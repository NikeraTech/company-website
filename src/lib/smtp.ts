import net from 'node:net';
import tls from 'node:tls';

type SmtpConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  fromName: string;
  envelopeFrom: string;
  to: string;
  timeout: number;
};

type ContactMessage = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

type Socket = net.Socket | tls.TLSSocket;

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function formatAddress(email: string, name?: string) {
  const cleanEmail = sanitizeHeader(email);
  const cleanName = name ? sanitizeHeader(name).replace(/"/g, '\\"') : '';

  return cleanName ? `"${cleanName}" <${cleanEmail}>` : `<${cleanEmail}>`;
}

function dotStuff(value: string) {
  return value.replace(/^\./gm, '..');
}

function createEmail(config: SmtpConfig, contact: ContactMessage) {
  const subject = `Nikera Contact: Message from ${sanitizeHeader(contact.name)}`;
  const body = [
    'You have received a new message from Nikera contact form.',
    '',
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Company / Business Name: ${contact.company || 'Not provided'}`,
    '',
    'Message:',
    contact.message,
  ].join('\r\n');

  return [
    `From: ${formatAddress(config.envelopeFrom, config.fromName)}`,
    `To: ${formatAddress(config.to)}`,
    `Reply-To: ${formatAddress(contact.email, contact.name)}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    body,
  ].join('\r\n');
}

class SmtpClient {
  private buffer = '';
  private socket: Socket | null = null;

  constructor(private readonly config: SmtpConfig) {}

  async send(contact: ContactMessage) {
    await this.connect();

    try {
      await this.expect([220]);
      await this.command(`EHLO ${this.config.host}`, [250]);
      await this.command('STARTTLS', [220]);
      await this.upgradeToTls();
      await this.command(`EHLO ${this.config.host}`, [250]);
      await this.command('AUTH LOGIN', [334]);
      await this.command(Buffer.from(this.config.username).toString('base64'), [334]);
      await this.command(Buffer.from(this.config.password).toString('base64'), [235]);
      await this.command(`MAIL FROM:<${this.config.envelopeFrom}>`, [250]);
      await this.command(`RCPT TO:<${this.config.to}>`, [250, 251]);
      await this.command('DATA', [354]);
      await this.command(`${dotStuff(createEmail(this.config, contact))}\r\n.`, [250]);
      await this.command('QUIT', [221]);
    } finally {
      this.socket?.end();
    }
  }

  private connect() {
    return new Promise<void>((resolve, reject) => {
      const socket = net.createConnection(this.config.port, this.config.host);
      const timer = setTimeout(() => {
        socket.destroy();
        reject(new Error('SMTP connection timed out.'));
      }, this.config.timeout);

      socket.once('connect', () => {
        clearTimeout(timer);
        this.socket = socket;
        resolve();
      });
      socket.once('error', reject);
    });
  }

  private upgradeToTls() {
    return new Promise<void>((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('SMTP socket was not connected.'));
        return;
      }

      this.buffer = '';
      const secureSocket = tls.connect({
        socket: this.socket,
        servername: this.config.host,
      });

      secureSocket.once('secureConnect', () => {
        this.socket = secureSocket;
        resolve();
      });
      secureSocket.once('error', reject);
    });
  }

  private command(command: string, acceptedCodes: number[]) {
    this.socket?.write(`${command}\r\n`);
    return this.expect(acceptedCodes);
  }

  private expect(acceptedCodes: number[]) {
    return new Promise<string>((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('SMTP socket was not connected.'));
        return;
      }

      const timer = setTimeout(() => {
        cleanup();
        reject(new Error('SMTP response timed out.'));
      }, this.config.timeout);

      const cleanup = () => {
        clearTimeout(timer);
        this.socket?.off('data', onData);
        this.socket?.off('error', onError);
      };

      const onError = (error: Error) => {
        cleanup();
        reject(error);
      };

      const onData = (chunk: Buffer) => {
        this.buffer += chunk.toString('utf8');
        const response = this.readResponse();

        if (!response) {
          return;
        }

        cleanup();

        if (!acceptedCodes.includes(response.code)) {
          reject(new Error(`SMTP command failed: ${response.message}`));
          return;
        }

        resolve(response.message);
      };

      this.socket.on('data', onData);
      this.socket.once('error', onError);
    });
  }

  private readResponse() {
    const lines = this.buffer.split(/\r?\n/);
    const completeLineIndex = lines.findIndex((line) => /^\d{3} /.test(line));

    if (completeLineIndex === -1) {
      return null;
    }

    const responseLines = lines.slice(0, completeLineIndex + 1);
    this.buffer = lines.slice(completeLineIndex + 1).join('\r\n');
    const code = Number(responseLines[completeLineIndex].slice(0, 3));

    return {
      code,
      message: responseLines.join('\n'),
    };
  }
}

export async function sendContactEmail(contact: ContactMessage) {
  const config: SmtpConfig = {
    host: process.env.SMTP_HOST ?? 'smtp.ionos.co.uk',
    port: Number(process.env.SMTP_PORT ?? 587),
    username: process.env.SMTP_USER ?? 'info@anangajewels.com',
    password: process.env.SMTP_PASSWORD ?? '',
    fromName: process.env.SMTP_FROM_NAME ?? 'Nikera Contact Form',
    envelopeFrom: process.env.SMTP_ENVELOPE_FROM ?? process.env.SMTP_USER ?? 'info@anangajewels.com',
    to: process.env.CONTACT_TO ?? 'hello@nikera.co.uk',
    timeout: Number(process.env.SMTP_TIMEOUT ?? 30000),
  };

  if (!config.password) {
    throw new Error('SMTP_PASSWORD is not configured.');
  }

  await new SmtpClient(config).send(contact);
}

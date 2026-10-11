import { sendContactEmail } from '@/lib/smtp';

export const runtime = 'nodejs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeInput(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const name = sanitizeInput(data.name, 120);
  const email = sanitizeInput(data.email, 180);
  const company = sanitizeInput(data.company, 180);
  const message = sanitizeInput(data.message, 4000);
  const website = sanitizeInput(data.website, 200);

  if (website) {
    return Response.json({ message: 'Message sent successfully.' });
  }

  if (!name || !emailPattern.test(email) || !message) {
    return Response.json(
      { message: 'Please provide your name, a valid email address and a message.' },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail({ name, email, company, message });
    return Response.json({ message: 'Thank you! Your message has been sent successfully.' });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return Response.json(
      { message: 'Sorry, your message could not be sent right now. Please email hello@nikera.co.uk.' },
      { status: 500 },
    );
  }
}

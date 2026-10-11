/**
 * Simple generator script to produce optimized AVIF/WebP fallbacks from the SVG.
 * Requires `sharp` installed as a devDependency: `npm install --save-dev sharp`
 * Usage: `node scripts/generate-hero-images.js`
 *
 * Produces:
 *  - public/images/hero-illustration.avif
 *  - public/images/hero-illustration.webp
 *  - public/images/hero-illustration@2x.avif
 *  - public/images/hero-illustration@2x.webp
 */

async function generate() {
  try {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const { default: sharp } = await import('sharp');
    const outDir = path.join(process.cwd(), 'public', 'images');
    const svgPath = path.join(outDir, 'hero-illustration.svg');

    if (!fs.existsSync(svgPath)) {
      console.error('SVG source not found:', svgPath);
      process.exit(1);
    }

    const svgBuffer = fs.readFileSync(svgPath);

    // 1x
    await sharp(svgBuffer)
      .resize(780, 500, { fit: 'contain' })
      .avif({ quality: 65 })
      .toFile(path.join(outDir, 'hero-illustration.avif'));

    await sharp(svgBuffer)
      .resize(780, 500, { fit: 'contain' })
      .webp({ quality: 75 })
      .toFile(path.join(outDir, 'hero-illustration.webp'));

    // 2x
    await sharp(svgBuffer)
      .resize(1560, 1000, { fit: 'contain' })
      .avif({ quality: 60 })
      .toFile(path.join(outDir, 'hero-illustration@2x.avif'));

    await sharp(svgBuffer)
      .resize(1560, 1000, { fit: 'contain' })
      .webp({ quality: 72 })
      .toFile(path.join(outDir, 'hero-illustration@2x.webp'));

    console.log('Generated hero-illustration.avif/.webp and @2x variants in public/images');
  } catch (err) {
    console.error('Failed to run generator. Make sure `sharp` is installed. Error:');
    console.error(err);
    process.exit(1);
  }
}

generate();

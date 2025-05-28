import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const STATIC_DIR = join(__dirname, '..', 'static');
const SOURCE_ICON = join(STATIC_DIR, 'favicon.png');

async function generateIcons() {
  const sizes = [192, 512];
  
  for (const size of sizes) {
    await sharp(SOURCE_ICON)
      .resize(size, size)
      .toFile(join(STATIC_DIR, `pwa-${size}x${size}.png`));
  }
  
  console.log('PWA icons generated successfully!');
}

generateIcons().catch(console.error); 
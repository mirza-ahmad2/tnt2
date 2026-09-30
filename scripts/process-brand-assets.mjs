import sharp from "sharp";
import fs from "fs";

const src = "public/images/ttn-logo-source.jpg";

// Upscale first for cleaner edges in UI / OG / favicon
const upscaled = await sharp(src)
  .resize(1000, 1000, { kernel: sharp.kernel.lanczos3 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = upscaled;
const ink = Buffer.from(data);
const light = Buffer.from(data);

for (let i = 0; i < ink.length; i += 4) {
  const r = ink[i];
  const g = ink[i + 1];
  const b = ink[i + 2];
  const min = Math.min(r, g, b);

  if (min > 248) {
    ink[i + 3] = 0;
    light[i + 3] = 0;
  } else if (min > 200) {
    const a = Math.round(255 * (1 - (min - 200) / 48));
    ink[i + 3] = a;
    light[i + 3] = a;
  }

  if (light[i + 3] > 0) {
    light[i] = 255;
    light[i + 1] = 255;
    light[i + 2] = 255;
  }
}

await sharp(ink, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim({ threshold: 8 })
  .png()
  .toFile("public/images/ttn-logo-ink.png");

await sharp(light, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim({ threshold: 8 })
  .png()
  .toFile("public/images/ttn-logo-light.png");

const meta = await sharp("public/images/ttn-logo-ink.png").metadata();
console.log("logo size", meta.width, meta.height);

// Monogram crop for favicon (top portion of stacked mark)
const cropH = Math.round(meta.height * 0.62);
const favSrc = await sharp("public/images/ttn-logo-ink.png")
  .extract({ left: 0, top: 0, width: meta.width, height: Math.min(cropH, meta.height) })
  .trim({ threshold: 8 })
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

await sharp(favSrc).resize(32, 32).png().toFile("public/favicon-32.png");
await sharp(favSrc).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(favSrc).png().toFile("public/favicon.png");

const ogLogo = await sharp("public/images/ttn-logo-ink.png")
  .resize({ width: 280, withoutEnlargement: false })
  .png()
  .toBuffer();

const svgText = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#E8ECF2" stroke-width="1"/>
  <text x="80" y="400" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" fill="#1A2238">Through the noise.</text>
  <text x="80" y="460" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" fill="#1A2238">To the right hire.</text>
  <line x1="80" y1="500" x2="380" y2="500" stroke="#2563EB" stroke-width="2"/>
  <text x="80" y="545" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#5B6577" letter-spacing="2">SPECIALIST AI · ML · FRONTIER RESEARCH SEARCH</text>
</svg>`);

await sharp(svgText)
  .composite([{ input: ogLogo, top: 80, left: 80 }])
  .png()
  .toFile("public/og.png");

// Optimize founder for web
await sharp("public/images/founder-dan.jpg")
  .resize(900, 900, { fit: "cover" })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile("public/images/founder-dan-opt.jpg");
fs.renameSync("public/images/founder-dan-opt.jpg", "public/images/founder-dan.jpg");

console.log("assets ready");

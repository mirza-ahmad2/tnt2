import sharp from "sharp";

const ink = "public/images/ttn-logo-ink.png";
const meta = await sharp(ink).metadata();

// Extract monogram (top portion), make it white for contrast on blue
const cropH = Math.round(meta.height * 0.58);
const monoRaw = await sharp(ink)
  .extract({ left: 0, top: 0, width: meta.width, height: Math.min(cropH, meta.height) })
  .trim({ threshold: 8 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const white = Buffer.from(monoRaw.data);
for (let i = 0; i < white.length; i += 4) {
  if (white[i + 3] > 0) {
    white[i] = 255;
    white[i + 1] = 255;
    white[i + 2] = 255;
  }
}

const whiteMono = await sharp(white, {
  raw: { width: monoRaw.info.width, height: monoRaw.info.height, channels: 4 },
})
  .resize(360, 360, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// Brand blue tile (#2563EB ≈ signal) — visible on light and dark browser chrome
const size = 512;
const bg = await sharp({
  create: {
    width: size,
    height: size,
    channels: 3,
    background: { r: 37, g: 99, b: 235 },
  },
})
  .png()
  .toBuffer();

const fav = await sharp(bg)
  .composite([{ input: whiteMono, gravity: "centre" }])
  .png()
  .toBuffer();

await sharp(fav).png().toFile("public/favicon.png");
await sharp(fav).resize(32, 32).png().toFile("public/favicon-32.png");
await sharp(fav).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(fav).resize(192, 192).png().toFile("public/icon-192.png");

console.log("high-contrast favicon ready");

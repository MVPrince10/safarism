// One-off generator for the brand-derived static assets. Re-run after the
// source logos in public/brand/ change:
//   node scripts/brand-assets.mjs
// Uses sharp (already present via next's optional deps — no extra install).
import sharp from "sharp";

const CREAM = "#FBF6EA";
const MARK = "public/brand/mark.png";
const LOCKUP = "public/brand/lockup.webp";

// Favicon / touch icon: the mark centred on a cream square. The mark is a wide
// landscape shape, so we scale to ~82% of the square's width.
async function icon(size, out) {
  const inner = Math.round(size * 0.84);
  const mark = await sharp(MARK).resize({ width: inner }).png().toBuffer();
  const { height } = await sharp(mark).metadata();
  await sharp({ create: { width: size, height: size, channels: 4, background: CREAM } })
    .composite([{ input: mark, left: Math.round((size - inner) / 2), top: Math.round((size - height) / 2) }])
    .png()
    .toFile(out);
  console.log("wrote", out);
}

// OpenGraph card: full lockup (mark + wordmark + address), 1200x630. The lockup
// source has a white ground (no alpha), so the card is white to keep it seamless.
async function og(out) {
  const W = 1200, H = 630;
  const lockup = await sharp(LOCKUP).resize({ height: 500 }).png().toBuffer();
  const { width, height } = await sharp(lockup).metadata();
  await sharp({ create: { width: W, height: H, channels: 4, background: "#ffffff" } })
    .composite([{ input: lockup, left: Math.round((W - width) / 2), top: Math.round((H - height) / 2) }])
    .png()
    .toFile(out);
  console.log("wrote", out);
}

await icon(64, "app/icon.png");
await icon(180, "app/apple-icon.png");
await og("app/opengraph-image.png");

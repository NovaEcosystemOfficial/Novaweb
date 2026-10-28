/**
 * Public site URL used by SEO metadata, sitemap and robots.
 *
 * Before production release, set NEXT_PUBLIC_SITE_URL to the confirmed
 * GLITCH domain (no trailing slash). Do not invent a domain here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://nova.example.com"
).replace(/\/$/, "");

export const SITE_URL_IS_PLACEHOLDER =
  !process.env.NEXT_PUBLIC_SITE_URL ||
  SITE_URL.includes("example.com") ||
  SITE_URL.includes("nova.example");

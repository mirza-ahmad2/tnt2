export const SITE_URL = "https://ttn-talent.com";
export const SITE_NAME = "TTN Talent";
export const SITE_TAGLINE = "Through the noise. To the right hire.";
export const SITE_OG_IMAGE = `${SITE_URL}/og.png`;
export const SITE_OG_IMAGE_ALT =
  "TTN Talent — Through the noise. To the right hire. Specialist AI, ML and frontier research search.";

export const DEFAULT_KEYWORDS = [
  "AI recruitment",
  "machine learning recruitment",
  "executive search",
  "AI talent",
  "ML hiring",
  "frontier research recruitment",
  "specialist search",
  "TTN Talent",
  "Dan Kirkpatrick",
].join(", ");

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "profile";
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

/** Shared meta + link tags for every page (title, description, OG, Twitter, canonical). */
export function pageSeo({
  title,
  description,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  image = SITE_OG_IMAGE,
  type = "website",
  noIndex = false,
}: PageSeoInput) {
  const url = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      ...(noIndex
        ? [{ name: "robots", content: "noindex, nofollow" }]
        : [{ name: "robots", content: "index, follow, max-image-preview:large" }]),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: SITE_OG_IMAGE_ALT },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: SITE_OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

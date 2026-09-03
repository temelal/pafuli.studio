import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.PAGES_BASE_PATH ?? "";

  return {
    name: "Pafuli Studio",
    short_name: "Pafuli Studio",
    description: "Original games and thoughtful game-development collaborations.",
    start_url: basePath || "/",
    display: "standalone",
    background_color: "#f6f1e8",
    theme_color: "#f4b63f",
    icons: [{ src: `${basePath}/favicon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}

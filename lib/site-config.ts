export const siteConfig = {
  name: "Pafuli Studio",
  legalName: "Studio Pafuli Inc.",
  url: "https://pafuli.studio",
  parentUrl: "https://pafu.li",
  email: "t@pafuli.studio",
} as const;

export function assetPath(path: string) {
  return `${process.env.PAGES_BASE_PATH ?? ""}${path}`;
}

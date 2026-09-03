import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pafuli.studio"),
  title: {
    default: "Pafuli Studio — Games with a point of view",
    template: "%s · Pafuli Studio",
  },
  description:
    "Pafuli Studio creates original games and works with selected partners on playable ideas and thoughtful releases.",
  applicationName: "Pafuli Studio",
  keywords: [
    "independent game studio",
    "game development",
    "game co-development",
    "player systems",
    "leaderboards",
    "Montréal game studio",
  ],
  creator: "Pafuli Studio",
  publisher: "Studio Pafuli Inc.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: "/",
    siteName: "Pafuli Studio",
    title: "Pafuli Studio — Games with a point of view",
    description:
      "Original games, precise player systems, and thoughtful collaborations from Montréal.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pafuli Studio — Games with a point of view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pafuli Studio — Games with a point of view",
    description:
      "Original games, precise player systems, and thoughtful collaborations from Montréal.",
    images: ["/og.png"],
  },
  icons: { icon: "https://pafuli.studio/favicon.svg" },
  category: "games",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4b63f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

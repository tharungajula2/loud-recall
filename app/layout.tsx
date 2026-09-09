import type { Metadata, Viewport } from "next";
import { Literata } from "next/font/google";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://loud-recall.vercel.app"),
  title: {
    default: "Loud Recall",
    template: "%s — Loud Recall",
  },
  description:
    "Notes on risk, finance and AI. One subject at a time, taken deep enough to defend.",
  applicationName: "Loud Recall",
  authors: [{ name: "Tharun Gajula" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Loud Recall",
    locale: "en_IN",
    url: "/",
    title: "Loud Recall",
    description:
      "Notes on risk, finance and AI. One subject at a time, taken deep enough to defend.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loud Recall — learning out loud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loud Recall",
    description:
      "Notes on risk, finance and AI. One subject at a time, taken deep enough to defend.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${literata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col min-w-0 bg-background text-foreground">{children}</body>
    </html>
  );
}

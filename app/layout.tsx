import type { Metadata, Viewport } from "next";
import { Literata } from "next/font/google";
import "./globals.css";
import { Mark } from "@/components/Mark";

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

const SITE_DESCRIPTION =
  "Learning out loud. Finance, health and AI — and now and then, life. One subject at a time, explained badly until it isn't.";

export const metadata: Metadata = {
  metadataBase: new URL("https://loud-recall.vercel.app"),
  title: {
    default: "Loud Recall — Learning out loud",
    template: "%s — Loud Recall",
  },
  description: SITE_DESCRIPTION,
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
    title: "Loud Recall — Learning out loud",
    description: SITE_DESCRIPTION,
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
    title: "Loud Recall — Learning out loud",
    description: SITE_DESCRIPTION,
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
      <body className="min-h-full flex flex-col min-w-0 bg-background text-foreground">
        {/* Inline PWA First-Paint Splash Screen */}
        <div
          id="pwa-splash"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FFFFFF] text-[#111111] pointer-events-none select-none"
          aria-hidden="true"
        >
          <Mark className="h-9 w-auto text-[#111111]" />
          <div className="text-xl font-sans font-light tracking-wide text-[#111111] mt-3">
            Loud Recall
          </div>
          <div className="text-[11px] font-sans text-[#666666] tracking-widest uppercase mt-1 font-medium">
            Tharun Gajula
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}

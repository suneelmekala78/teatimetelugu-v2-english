import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import NetworkProvider from "@/components/providers/NetworkProvider";
import AuthBootstrap from "@/components/providers/AuthBootstrap";
import NavbarWrapper from "@/components/common/navbar/NavbarWrapper";
import ClientShell from "./ClientShell";
import AdScript from "@/components/google-ads/AdScript";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const SITE_BASE =
  process.env.NEXT_PUBLIC_CLIENT_URL || "https://english.teatimetelugu.com";

const SITE_TITLE =
  "Tea Time Telugu - English News, Politics, Movies, and Entertainment";

const SITE_DESCRIPTION =
  "Latest news, movie updates, gossip, and entertainment for Telugu audiences in English. Get breaking news, movie reviews, OTT release updates, political analysis, and exclusive celebrity interviews.";

const SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  "n5Z9FmEzjRRyrO9W7lvdr_Hh1NAxDbebpBW1J1OmadY";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_BASE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Tea Time Telugu English",
    images: [{ url: "/images/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/logo.png"],
  },
  verification: {
    google: SITE_VERIFICATION,
  },
  other: {
    "google-adsense-account": "ca-pub-2480610460273610",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <GoogleAnalytics />
        <AdScript />
        <Toaster position="top-center" richColors />
        <AuthBootstrap>
          <div className="page-container">
            <NavbarWrapper />
            <NetworkProvider>
              <ClientShell>{children}</ClientShell>
            </NetworkProvider>
            <Footer />
          </div>
        </AuthBootstrap>
      </body>
    </html>
  );
}

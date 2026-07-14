import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.texasck.com"),
  title: "Texas C&K, LLC",
  description:
    "Texas C&K, LLC is the holding company for 911 Pool Care — pool leak detection, repair, renovations, and inspections across Central Texas.",
  openGraph: {
    title: "Texas C&K, LLC",
    description:
      "Holding company for 911 Pool Care. Serving Central Texas pool owners.",
    url: "https://www.texasck.com",
    siteName: "Texas C&K, LLC",
    images: [
      {
        url: "/images/logo-flag.png",
        width: 1200,
        height: 630,
        alt: "Texas C&K, LLC logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/images/logo-mark.png",
    apple: "/images/logo-mark.png",
  },
  alternates: {
    canonical: "https://www.texasck.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

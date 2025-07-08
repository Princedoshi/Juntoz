import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Juntoz – Grow Your Business Digitally",
    template: "%s | Juntoz",
  },
  description: "Juntoz helps businesses create powerful web experiences with modern design and technology.",
  keywords: ["Juntoz", "Next.js SEO", "Web Development", "India", "Digital Agency", "Tech Services"],
  metadataBase: new URL("https://www.juntoz.in"),
  openGraph: {
    title: "Juntoz – Grow Your Business Digitally",
    description: "Transform your business with cutting-edge web solutions from Juntoz.",
    url: "https://www.juntoz.in",
    siteName: "Juntoz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Juntoz – Grow Your Business Digitally",
    description: "Cutting-edge websites, modern design, scalable systems.",
  },
  themeColor: "#0f172a",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

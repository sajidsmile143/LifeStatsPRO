import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Age Calculator & Life Statistics Clock | Days Alive Counter & Birthday Tracker",
  description:
    "Free Age Calculator and Life Statistics Clock! Calculate your exact age down to the second, track total heartbeats, sleeping years, days alive counter, planetary ages, 5-year weekend birthday tracker, and download your custom Life Story Card!",
  keywords: [
    "Age Calculator",
    "Life Statistics Clock",
    "Days Alive Counter",
    "Birthday Tracker",
    "Exact Age Calculator",
    "Chronological Age Calculator",
    "Planetary Age Calculator",
    "Heartbeats Counter",
    "Sleep Statistics Calculator",
    "Weekend Birthday Tracker",
    "Life Story Card Generator",
  ],
  authors: [{ name: "LifeStats PRO" }],
  openGraph: {
    title: "Age Calculator & Life Statistics Clock | Days Alive Counter",
    description:
      "Calculate your exact age, total heartbeats, days alive, planet ages, and 5-year weekend birthday tracker. Generate your downloadable Life Story Card!",
    type: "website",
    locale: "en_US",
    siteName: "LifeStats PRO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator & Life Statistics Clock | Days Alive Counter",
    description:
      "Calculate your exact age, total heartbeats, sleeping years, planet ages, and download your Life Card!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

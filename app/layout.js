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

export const metadata = {
  title: "Anurag Mahanta - Full Stack Developer",
  description: "Professional portfolio showcasing full-stack web development skills, projects, and experience. Specialized in React, Next.js, Node.js, and modern web technologies.",
  keywords: "Full Stack Developer, Web Developer, React, Next.js, Node.js, JavaScript, Portfolio",
  authors: [{ name: "Anurag Mahanta" }],
  creator: "Anurag Mahanta",
  openGraph: {
    title: "Anurag Mahanta - Full Stack Developer",
    description: "Professional portfolio showcasing full-stack web development skills and projects",
    url: "https://yourportfolio.com",
    siteName: "Anurag Mahanta Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Mahanta - Full Stack Developer",
    description: "Professional portfolio showcasing full-stack web development skills and projects",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

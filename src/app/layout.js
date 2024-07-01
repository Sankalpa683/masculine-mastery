import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masculine Mastery",
  description: "Empower your journey with Masculine Mastery, your ultimate guide to embracing true masculinity, achieving wealth, and mastering the art of seduction. Our expert advice, actionable strategies, and inspiring content are designed to help young men unlock their full potential and lead a life of confidence and success. Discover transformative insights on personal development, financial growth, and relationship dynamics that will elevate your life to new heights. Join our community and start your path to becoming the best version of yourself today. Embrace masculinity, build wealth, and achieve seductive success with Masculine Mastery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

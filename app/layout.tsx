import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A Next.js Pokedex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " border min-h-screen"}>
        <nav className="h-20 flex bg-neutral-600 sticky top-0 shadow-lg">
          <div className="container my-auto">
            <Link href="/" className="text-slate-50">Home</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

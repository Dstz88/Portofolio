import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhesta Irham Prasetya | Web Developer & UI/UX Designer",
  description: "Portfolio Dhesta Irham Prasetya yang menampilkan proyek web development, sistem informasi, dan studi kasus UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} dark antialiased`}>
      <body className={`${outfit.className} bg-[#050505] text-white selection:bg-[#6EE7F9] selection:text-[#050505] overflow-x-hidden min-h-screen`}>
        <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40" />
        {children}
      </body>
    </html>
  );
}
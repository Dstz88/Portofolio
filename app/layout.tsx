import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Developer & UI Engineer | Portofolio",
  description: "Pengalaman portofolio scrollytelling interaktif kelas dunia yang dibangun dengan Next.js, Motion, Lenis, dan HTML5 Canvas.",
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

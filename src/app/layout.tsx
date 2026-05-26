import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roteiros Finance Dark — Hooks de 30s em tom Mr Robot",
  description:
    "Roteiros virais sobre dinheiro em tom dark cinema. Fórmula validada: número + lei + cotidiano. Hook em 60 segundos por R$5.",
  metadataBase: new URL("https://roteiros-finance-dark.vercel.app"),
  openGraph: {
    title: "Roteiros Finance Dark",
    description: "Hooks de 30s em tom Mr Robot. R$5 por roteiro.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-200">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display-loader",
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-loader",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono-loader",
});

export const metadata: Metadata = {
  title: "ORQUESTBA — Integrated Business Planning",
  description:
    "Conectamos datos, áreas y decisiones para que tu empresa tenga claridad, dirección y capacidad de adaptación.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${bodyFont.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

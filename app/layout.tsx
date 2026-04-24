import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--dm-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
});

export const metadata: Metadata = {
  title: "Orquestba — Integrated Business Planning",
  description:
    "Conectamos datos, áreas y decisiones para que tu empresa tenga claridad, dirección y capacidad de adaptación.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

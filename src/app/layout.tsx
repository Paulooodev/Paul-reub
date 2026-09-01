// src/app/layout.tsx
import type { Metadata } from "next";
import { Sen, Space_Mono } from "next/font/google";
import "./globals.css";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sen-next",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Paulreub — Civil Engineering & Heavy Construction",
  description:
    "Heavy civil and construction, self-performed. Building Nigeria's backbone.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sen.variable} ${spaceMono.variable} font-sen antialiased`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Michelle Seguil - Front-end Developer",
  description:
    "Portafolio de Michelle Seguil, Ingeniera de Sistemas y desarrolladora front-end especializada en React, Next.js y tecnologías web modernas.",
  keywords: [
    "portafolio",
    "front-end",
    "developer",
    "react",
    "next.js",
    "michelle seguil",
  ],
  authors: [{ name: "Michelle Seguil" }],
  creator: "Michelle Seguil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

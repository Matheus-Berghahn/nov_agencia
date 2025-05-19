import type { Metadata } from "next";
import { Montserrat } from "next/font/google";  // Importando Montserrat
import "./globals.css";

// Importando Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGENCIA_NOV",
  description: "AGENCIA_NOV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

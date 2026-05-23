import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ScrollFix from "./components/ScrollFix";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Salon Barbe Blanche",
  description: "Salon Barbe Blanche - coupe & barbe premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <LanguageProvider>
          <ScrollFix />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
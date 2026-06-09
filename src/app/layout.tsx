import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-head",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: 'AIRBAND — Dilatador Nasal Magnético | Kit con 60 Adhesivos',
  description: 'Dilatador Nasal Magnético | Kit con 60 Adhesivos. Calidad Premium. Diseñado para optimizar tu sueño, tu energía y tu rendimiento. Envío Full disponible.',
  alternates: {
    canonical: 'https://airbando2.com',
  },
  openGraph: {
    title: 'AIRBAND — Dilatador Nasal Magnético | Kit con 60 Adhesivos',
    description: 'El kit más completo del mercado. 4 talles, 60 adhesivos, tecnología magnética. Mejorá tu sueño y rendimiento.',
    images: [
      {
        url: 'https://airbando2.com/assets/kit-negro.png',
        width: 1200,
        height: 630,
        alt: 'AIRBAND Kit Dilatador Nasal Magnético',
      },
    ],
    url: 'https://airbando2.com',
    type: 'website',
    locale: 'es_AR',
    siteName: 'AIRBAND',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRBAND — Dilatador Nasal Magnético',
    description: 'El kit más completo del mercado. 4 talles, 60 adhesivos.',
    images: ['https://airbando2.com/assets/kit-negro.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

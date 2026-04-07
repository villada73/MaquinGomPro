import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaquinGom Pro | Equipamiento para Gomerías y Talleres",
  description: "Venta de elevadores, balanceadoras, desmontadoras y rectificadoras de discos. Confianza, servicio postventa y seriedad.",
  keywords: "elevadores, balanceadoras, desmontadoras, rectificadoras, maquinaria, gomería, taller, equipamiento industrial, Argentina",
  openGraph: {
    title: "MaquinGom Pro | Equipamiento para Gomerías y Talleres",
    description: "Venta de elevadores, balanceadoras, desmontadoras y más. Confianza y servicio postventa.",
    type: "website",
    locale: "es_AR",
    siteName: "MaquinGom Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaquinGom Pro",
    description: "Equipamiento industrial para gomerías y talleres",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0f1115] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
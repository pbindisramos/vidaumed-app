import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatbotWhatsApp from "@/components/widgets/ChatbotWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#134e4a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vidaumed.cl"),
  title: "Vidaumed | Medicina Estética en Temuco",
  description:
    "Clínica de medicina estética en Temuco dirigida por la Dra. Teresa Vidaurre. Tratamientos con toxina botulínica, bioestimuladores, mesoterapia y más. Resultados naturales con respaldo médico certificado.",
  openGraph: {
    title: "Vidaumed | Medicina Estética en Temuco",
    description:
      "Clínica de medicina estética dirigida por la Dra. Teresa Vidaurre. Resultados naturales con respaldo médico certificado.",
    url: "https://www.vidaumed.cl",
    siteName: "Vidaumed",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidaumed | Medicina Estética en Temuco",
    description:
      "Tratamientos estéticos con respaldo médico. Dra. Teresa Vidaurre en Temuco, Chile.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotWhatsApp />
      </body>
    </html>
  );
}

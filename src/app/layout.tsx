import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/usercontext";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visor de Datos OSPA",
  description: "Creado por la Oficina del Servicio de Pronósticos y Alertas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center bg-cyan-600">
          <Link href="/" className="text-center text-1xl font-bold text-white">
            Reporte diario de estaciones - Oficina del Servicio de Pronósticos y
            Alertas
          </Link>
        </div>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

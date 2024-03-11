import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/usercontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h5 className="w-full text-center text-3xl font-bold bg-cyan-600 text-white">
          Reporte diario de estaciones - Oficina del Servicio de Pronósticos y
          Alertas
        </h5>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

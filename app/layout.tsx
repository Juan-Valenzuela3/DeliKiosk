import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "DeliKiosk - Quisco Moderno con Next.js",
  description: "Sistema de pedidos moderno y elegante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${poppins.variable} bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans`}>
        {children}
      </body>
    </html>
  );
}

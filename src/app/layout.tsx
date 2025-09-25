import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Praman 3D - Professional 3D Laser Scanning & Digital Documentation",
  description:
    "Professional surveying and digital documentation company specializing in high-accuracy 3D laser scanning, LiDAR processing, CAD modelling, BIM, and heritage conservation services.",
  keywords:
    "3D laser scanning, LiDAR, CAD modelling, BIM, heritage conservation, plant modelling, VR AR, digital documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

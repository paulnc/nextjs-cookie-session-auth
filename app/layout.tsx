import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Cookie-Session Auth",
  description: "Cookie-based authentication and authorization in Next.js 14 app router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
      <Navbar />
  <div className="content">{children}</div>
</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import MainLayout from "./mainLayout";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ovistake",
  description: "Defi staking and liquidity protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

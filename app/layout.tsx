import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/themeProvider";
import { backgroundDiv } from "./app.css";
import Image from "next/image";
import gradientBlur from './assets/staking/gradient-blur.png'
import Footer from "./components/Footer";



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
        <ThemeProvider>
          <div className={backgroundDiv}>
            {/* <div className="w-full z-[0] h-[100vh] absolute overflow-hidden  "><Image className=" w-full object-contain top-[-90%] absolute " alt="gradient-glow" src={gradientBlur}/></div> */}
            <Navbar />
            <div className="relative z-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

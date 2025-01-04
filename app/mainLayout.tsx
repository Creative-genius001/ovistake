'use client'

import "./globals.css";
import DesktopNav from "./components/DesktopNav";
import { backgroundDiv } from "./app.css";
import Image from "next/image";
import gradientBlur from './assets/staking/gradient-blur.png'
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/themeProvider";
import { Theme } from "@radix-ui/themes";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { config } from "./lib/config";
import { useWindowSize } from "./hooks/useWindowBreakpoint";
import MobileNav from "./components/MobileNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const dappUrl = typeof window !== 'undefined' ? window.location.href : '';
    const width = useWindowSize();
  return (
    <>
         <MetaMaskProvider
          sdkOptions={{
            dappMetadata: {
              name: "Ovistake Dapp",
              url: dappUrl,
            },
            infuraAPIKey: config.INFURA_API_KEY,
            // Other options.
          }}
        >   
          <ThemeProvider>
            <Theme
              className="font-inter"
            >
              <div className={backgroundDiv}>
                <div className="w-full z-[0] h-[100vh] absolute overflow-hidden  "><Image className=" w-full object-contain top-[-90%] absolute " alt="gradient-glow" src={gradientBlur}/></div>
                { width < 980 ? <MobileNav /> : <DesktopNav /> }
                <div className="relative z-1">
                  {children}
                </div>
                <Footer />
              </div>
            </Theme>
          </ThemeProvider>
        </MetaMaskProvider>
    </>
  );
}

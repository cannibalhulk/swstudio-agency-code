"use client";

import Footer from "@/components/Footer";
import Script from "next/script";
import Header from "@/components/Header";
import ToasterContext from "@/components/Toast/ToasetContex";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/prism-vsc-dark-plus.css";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>

      <body>
        {loading ? (
          <PreLoader />
        ) : (
            <ThemeProvider
              attribute="class"
              enableSystem={true}
              defaultTheme="light"
            >
              <ToasterContext/>
              <Header />
                {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
        )}

        {/* @ts-ignore */}
            <chat-widget location-id="u3C9sgjViW4Iniwt0wSM"></chat-widget>
            <Script
              src="https://widgets.leadconnectorhq.com/loader.js" 
              data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
            />
      </body>
    </html>
  );
}

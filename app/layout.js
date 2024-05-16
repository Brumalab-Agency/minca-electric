import { Inter } from "next/font/google";
import "@/globals.css";
import "@/animation.css";
import "@/mediaQueries.css";

import { AppProvider } from "./components/context/Context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "./components/smoothscrool/SmoothScroll";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.mincaelectric.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Minca Electric | Empresa líder de movilidad eléctrica en Colombia",
    description:
      "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
    url: "/",
    siteName: "Minca Electric",
    images: "/ShowRoom-pc.jpg",
    locale: "es_LA",
    type: "website",
  },
  title: {
    template: "%s",
    default:
      "Minca Electric | Empresa líder de movilidad eléctrica en Colombia",
  },
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="es">
        <head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0J2S3K5ZR5"
          ></Script>
          <Script id="google-analytics" >
            {`   
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             gtag('config', 'G-0J2S3K5ZR5');        
          `}
          </Script>
        </head>
        <body id="up" className={`${inter.className} m-auto max-w-[2560px]`}>
          <div id="scrollbar"></div>
          <SmoothScroll>{children}</SmoothScroll>
        </body>

        
      </html>
    </AppProvider>
  );
}

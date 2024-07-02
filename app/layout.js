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
    title: "Minca Electric | Empresa líder de movilidad eléctrica",
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
          <Script src="https://s3.amazonaws.com/widgets.addi.com/bundle.min.js"></Script>
          <Script id="metricool-tracker">
            {`
              function loadScript(a){
                var b=document.getElementsByTagName("head")[0],
                c=document.createElement("script");
                c.type="text/javascript";
                c.src="https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange=a;
                c.onload=a;
                b.appendChild(c);
              }
              loadScript(function(){
                beTracker.t({hash:"448e258bc7ec018aeec47365a097b036"});
              });
            `}
          </Script>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0J2S3K5ZR5"></Script>
          <Script>
            {`
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-802491717/LpWFCJy61b0ZEMWa1P4C',
                    'event_callback': callback
                });
                return false;
              }
            `}
            </Script>
          <Script>
            {`
              !function(f,b,e,v,n,t,s) {
                if(f.fbq) return;
                n = f.fb
                q=function() { 
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
                  if(!f._fbq) f._fbq = n;
                  n.push = n;
                  n.loaded = !0;
                  n.version='2.0';
                  n.queue = [];
                  t = b.createElement(e);
                  t.async = !0;
                  t.src = v;
                  s = b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)
              }
              (window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '618423798896056');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript><img height="1" width="1" style={{display: "none"}} src="https://www.facebook.com/tr?id=618423798896056&ev=PageView&noscript=1"/></noscript>
        </head>
        <body id="up" className={`${inter.className} m-auto max-w-[2560px]`}>
          <div id="scrollbar"></div>
          <SmoothScroll>{children}</SmoothScroll>
        </body>

        
      </html>
    </AppProvider>
  );
}

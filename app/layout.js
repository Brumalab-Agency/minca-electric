import { Inter } from "next/font/google";
import "@/globals.css";
import "@/animation.css";
import "@/mediaQueries.css";
import { AppProvider } from "./components/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MINCA",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}

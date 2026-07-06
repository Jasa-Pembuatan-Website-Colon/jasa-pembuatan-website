import "./globals.css";
import BackendProvider from "@/components/providers/BackendProvider";
import { LazyMotion, domAnimation } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "ThreeDevs — Wujudkan Website Impian Anda",
  description:
    "ThreeDevs adalah IT Agency yang menghadirkan website modern, performa tinggi, dan desain elegan untuk bisnis Anda.",
  alternates: {
    canonical: "https://threedevs.id",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body
        className={`${inter.className} min-h-full bg-zinc-950 text-zinc-100 font-sans`}
      >
        <BackendProvider>
          <LazyMotion features={domAnimation} strict>
            {children}
          </LazyMotion>
        </BackendProvider>
      </body>
    </html>
  );
}

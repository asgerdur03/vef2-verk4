import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import style from "./layout.module.css";
export const metadata: Metadata = {
  title: "Halló Heimur",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={style.body}>
        <header>
          <Navigation/>
        </header>
        <main className={style.main}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

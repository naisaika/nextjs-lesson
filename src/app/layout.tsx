import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import LayoutProvider from "@/provider/LayoutProvider";

export const metadata: Metadata = {
  title: "成瀬・猪熊建築設計事務所",
  description: "成瀬・猪熊建築設計事務所 - 若手建築家、成瀬友梨　猪熊純のホームページ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body>
        <Header/>
        <LayoutProvider>
          <main>
            {children}
          </main>
          <Footer/>
        </LayoutProvider>
      </body>
    </html>
  );
}

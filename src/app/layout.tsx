import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GridProvider from "@/providers/GridProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Tim Krause | Portfolio",
  description: "This is Tim Krause's porfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GridProvider>
          <Header />
          {children}
          <Footer />
        </GridProvider>
      </body>
      <GoogleAnalytics gaId="G-1TLVW4P73H" />
    </html>
  );
}

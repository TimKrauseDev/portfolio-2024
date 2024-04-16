import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GridProvider from "@/providers/GridProvider";
import Contact from "@/components/contact";

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
          <Contact />
          <Footer />
        </GridProvider>
      </body>
    </html>
  );
}

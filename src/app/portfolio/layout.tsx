import "@/styles/globals.scss";
import { Fragment } from "react";
import Contact from "@/components/contact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      {children}
      <Contact />
    </Fragment>
  );
}

import type { Metadata } from "next";
import "./styles/globals.scss";
import SmoothScroller from "@/app/components/Lenis";
import LayoutSetup from "./components/LayoutSetup";

export const metadata: Metadata = {
  title: "Komet Website",
  description: "Komet website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroller />
        <LayoutSetup />
        {children}
      </body>
    </html>
  );
}

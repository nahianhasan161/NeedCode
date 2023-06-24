"use client";
import { RecoilRoot } from "recoil";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeadCode",
  description: "coding problem and solving site with tutorials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}

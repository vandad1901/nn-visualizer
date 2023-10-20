import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./material-tailwind";
import { Header } from "./components/Header";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });
import React from "react";

export const metadata: Metadata = {
    title: "Neural Networks Visualizer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <ThemeProvider>
                <head>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                    />
                </head>
                <body className={clsx(inter.className, "bg-teal-50")}>
                    <Header />
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}

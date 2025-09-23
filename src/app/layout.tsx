import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../styles/globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: "400"
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilkie's Workshop",
  description: "Created by Vincent Wilkie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased font-[family-name:var(--font-roboto-sans)]`}>
        <div className="min-h-dvh relative">
          <Navigation />

          {/* Main Content */}
          <main className="w-full min-h-screen flex items-center justify-center md:min-h-[calc(100vh-80px)] px-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

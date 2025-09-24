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
          <main className="mx-auto w-full max-w-6xl min-h-screen flex items-center justify-center px-10" style={{ minHeight: 'calc(100vh - var(--header-height, 80px))' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

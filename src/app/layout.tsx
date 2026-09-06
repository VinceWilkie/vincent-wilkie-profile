import type { Metadata, Viewport } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "../styles/globals.css"

const robotoSans = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
    weight: "400"
})

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
})

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0A0A0B",
}

export const metadata: Metadata = {
    metadataBase: new URL("https://vincentwilkie.ca"),
    title: "Vincent Wilkie — Full-stack engineer",
    description:
        "Full-stack engineer in Ontario, Canada. I design, build, and operate web systems end to end — interface through infrastructure.",
    authors: [{ name: "Vincent Wilkie" }],
    openGraph: {
        type: "website",
        locale: "en_CA",
        url: "https://vincentwilkie.ca",
        siteName: "Vincent Wilkie",
        title: "Vincent Wilkie — Full-stack engineer",
        description:
            "Full-stack engineer in Ontario, Canada. I design, build, and operate web systems end to end — interface through infrastructure.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vincent Wilkie — Full-stack engineer",
        description:
            "Full-stack engineer in Ontario, Canada. I design, build, and operate web systems end to end — interface through infrastructure.",
        creator: "@vincentwilkie",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased font-[family-name:var(--font-roboto-sans)]`}>
                {children}
            </body>
        </html>
    )
}

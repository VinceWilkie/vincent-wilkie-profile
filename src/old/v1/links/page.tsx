import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"

const links = [
    {
        label: "Phone",
        href: "tel:+2896984004",
        theme: "green",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        label: "Email",
        href: "mailto:vincentwilkie@hotmail.com",
        theme: "blue",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/vdubworkshop",
        theme: "linkedin",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        )
    },
    {
        label: "Facebook",
        href: "https://facebook.com/vincewilkie1",
        theme: "facebook",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        )
    },
    {
        label: "Twitter/X",
        href: "https://x.com/vincentwilkie",
        theme: "twitter",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        )
    },
    {
        label: "GitHub",
        href: "https://github.com/VinceWilkie",
        theme: "github",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        )
    },
]

export default function LinksPage() {
    return (
        <section className="flex flex-col items-center justify-center flex-1 space-y-8">
            <FadeIn className="flex justify-center">
                <Image
                    src="/logo.png"
                    alt="Vincent Wilkie logo"
                    width={500}
                    height={300}
                    className="w-40 h-24 sm:w-52 sm:h-32 md:w-72 md:h-44 object-contain"
                    priority
                />
            </FadeIn>

            <FadeIn className="space-y-2 text-center" delayMs={75}>
                <h1 className="text-2xl font-semibold tracking-tight">Links</h1>
                <p className="text-sm text-gray-600">Let&apos;s connect! Explore my work, follow my journey, or reach out directly.</p>
            </FadeIn>

            {/* Links List */}
            <FadeIn className="w-full max-w-lg" delayMs={150}>
                <div className="space-y-0 flex flex-col items-center">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`relative flex items-center justify-between gap-3 py-2 px-4 transition-all duration-200 hover:opacity-90 w-[150px] hover:w-[170px] ${
                                link.theme === `orange` ? `bg-orange-500 text-white hover:bg-orange-600` :
                                link.theme === `purple` ? `bg-purple-500 text-white hover:bg-purple-600` :
                                link.theme === `linkedin` ? `bg-blue-600 text-white hover:bg-blue-700` :
                                link.theme === `github` ? `bg-gray-800 text-white hover:bg-gray-900` :
                                link.theme === `twitter` ? `bg-black text-white hover:bg-gray-800` :
                                link.theme === `facebook` ? `bg-blue-600 text-white hover:bg-blue-700` :
                                link.theme === `blue` ? `bg-blue-500 text-white hover:bg-blue-600` :
                                link.theme === `green` ? `bg-green-500 text-white hover:bg-green-600` :
                                `bg-gray-500 text-white hover:bg-gray-600`
                            }`}
                            style={{
                                clipPath: `polygon(15px 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0% 50%)`
                            }}
                        >
                            <div className="flex-shrink-0">
                                {link.icon}
                            </div>
                            <span className="font-medium">{link.label}</span>
                        </Link>
                    ))}
                </div>
            </FadeIn>
        </section>
    )
}

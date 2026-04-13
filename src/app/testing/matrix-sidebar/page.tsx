"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MatrixRain from "@/components/MatrixRain"

const SKILLS = [
    {
        category: `Frontend`,
        years: `14+`,
        tools: [`React`, `Vue`, `Angular`, `TypeScript`, `SCSS`, `Tailwind CSS`, `Ionic`],
    },
    {
        category: `Backend & Data`,
        years: `12+`,
        tools: [`Node.js`, `Express`, `PHP`, `Python`, `MySQL`, `NoSQL`, `REST APIs`],
    },
    {
        category: `Cloud & Infrastructure`,
        years: `8+`,
        tools: [`AWS`, `CloudFormation`, `SQS/SNS`, `CI/CD`, `Server Management`],
    },
    {
        category: `Full Stack Leadership`,
        years: `10+`,
        tools: [`Architecture`, `Legacy Modernization`, `Cross-Platform`, `Mentoring`, `Technical Strategy`],
    },
]

const PROJECTS = [
    {
        name: `liati`,
        url: `https://liati.ca`,
        description: `Digital narrative + fashion brand`,
        status: `IN_DEV`,
        image: `/projects/liati.png`,
    },
    {
        name: `ctrlaltrandom`,
        url: `https://ctrlaltrandom.com`,
        description: `Tech podcast`,
        status: `IN_DEV`,
        image: `/projects/ctrlaltrandom.png`,
    },
]

const CONTACTS = [
    {
        label: `+1-289-698-4004`,
        href: `tel:+2896984004`,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        label: `vincentwilkie@hotmail.com`,
        href: `mailto:vincentwilkie@hotmail.com`,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
        ),
    },
    {
        label: `/in/vdubworkshop`,
        href: `https://www.linkedin.com/in/vdubworkshop`,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: `VinceWilkie`,
        href: `https://github.com/VinceWilkie`,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: `@vincentwilkie`,
        href: `https://x.com/vincentwilkie`,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
]

export default function MatrixSidebarPage() {
    const [distortion, setDistortion] = useState(true)

    const profileBlock = (
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-green-500/30">
                <Image
                    src="/vincent-wilkie-profile-picture.png"
                    alt="Vincent Wilkie"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <h1 className="mt-4 text-xl font-bold text-white">Vincent Wilkie</h1>
            <p className="mt-1 text-sm text-green-400">Full Stack Software Developer</p>
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                Building delightful web experiences from scratch. 14+ years of pragmatic solutions,
                clean UX, and steady iteration across the full stack.
            </p>
        </div>
    )

    const contactList = (
        <nav className="flex flex-col gap-1">
            {CONTACTS.map((c) => (
                <Link
                    key={c.href}
                    href={c.href}
                    target={c.href.startsWith(`http`) ? `_blank` : undefined}
                    rel={c.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                    className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm text-gray-300 hover:text-green-400 hover:bg-green-500/5 transition-colors"
                >
                    {c.icon}
                    <span className="truncate">{c.label}</span>
                </Link>
            ))}
        </nav>
    )

    const contactIconRow = (
        <div className="flex items-center justify-center gap-3">
            {CONTACTS.map((c) => (
                <Link
                    key={c.href}
                    href={c.href}
                    target={c.href.startsWith(`http`) ? `_blank` : undefined}
                    rel={c.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                    className="p-2 rounded-lg text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-colors"
                    aria-label={c.label}
                >
                    {c.icon}
                </Link>
            ))}
        </div>
    )

    const skillsSection = (
        <section>
            <h2 className="text-lg font-semibold text-white mb-4">Skills &amp; Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((s) => (
                    <div
                        key={s.category}
                        className="bg-black/50 backdrop-blur-sm border border-green-500/10 rounded-xl p-4"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-medium text-green-400">{s.category}</h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-300">
                                {s.years} yrs
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {s.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-2 py-0.5 text-[11px] rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/50"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

    const projectsSection = (
        <section className="mt-8">
            <h2 className="text-lg font-semibold text-white mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((p) => (
                    <div
                        key={p.name}
                        className="bg-black/50 backdrop-blur-sm border border-green-500/10 rounded-xl overflow-hidden"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={p.image}
                                alt={p.name}
                                fill
                                className="object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="text-sm font-medium text-white">{p.name}</h3>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                    {p.status}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 mb-2">{p.description}</p>
                            <Link
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-green-400 hover:text-green-300 transition-colors"
                            >
                                {p.url.replace(`https://`, ``)} &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

    return (
        <div className="bg-black min-h-screen">
            <MatrixRain distortion={distortion} />

            <button
                onClick={() => setDistortion((d) => !d)}
                className={`fixed top-3 right-3 z-50 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors backdrop-blur-md ${
                    distortion
                        ? `bg-green-500/20 text-green-400 border border-green-500/30`
                        : `bg-gray-800/70 text-gray-500 border border-gray-700/50`
                }`}
                aria-label="Toggle matrix distortion effect"
            >
                FX {distortion ? `ON` : `OFF`}
            </button>

            {/* Mobile layout */}
            <div className="relative z-10 md:hidden">
                <div className="px-4 pt-16 pb-6">
                    {profileBlock}
                    <div className="mt-4">{contactIconRow}</div>
                </div>
                <div className="px-4 pb-8">
                    {skillsSection}
                    {projectsSection}
                </div>
                <footer className="border-t border-green-500/10 px-4 py-4 text-center">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} Vincent Wilkie. All rights reserved.
                    </p>
                </footer>
            </div>

            {/* Desktop layout */}
            <div className="relative z-10 hidden md:flex">
                <aside className="w-72 flex-shrink-0 bg-black/70 backdrop-blur-md sticky top-0 h-screen overflow-y-auto border-r border-green-500/20">
                    <div className="flex flex-col justify-between h-full px-5 py-8">
                        <div>
                            {profileBlock}
                            <div className="my-5 border-t border-green-500/10" />
                            {contactList}
                        </div>
                        <p className="text-[10px] text-gray-600 mt-6">
                            &copy; {new Date().getFullYear()} Vincent Wilkie
                        </p>
                    </div>
                </aside>

                <main className="flex-1 p-6 sm:p-8">
                    {skillsSection}
                    {projectsSection}
                </main>
            </div>
        </div>
    )
}

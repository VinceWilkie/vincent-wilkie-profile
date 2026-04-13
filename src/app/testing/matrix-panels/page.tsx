"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MatrixRain from "@/components/MatrixRain"

const skills = [
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

const projects = [
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

const contacts = [
    { label: `+1-289-698-4004`, href: `tel:+2896984004`, icon: `phone` },
    { label: `vincentwilkie@hotmail.com`, href: `mailto:vincentwilkie@hotmail.com`, icon: `email` },
    { label: `/in/vdubworkshop`, href: `https://www.linkedin.com/in/vdubworkshop`, icon: `linkedin` },
    { label: `VinceWilkie`, href: `https://github.com/VinceWilkie`, icon: `github` },
    { label: `@vincentwilkie`, href: `https://x.com/vincentwilkie`, icon: `twitter` },
]

function ContactIcon({ type }: { type: string }) {
    switch (type) {
        case `phone`:
            return (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        case `email`:
            return (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        case `linkedin`:
            return (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        case `github`:
            return (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            )
        case `twitter`:
            return (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        default:
            return null
    }
}

export default function MatrixPanelsPage() {
    const [distortion, setDistortion] = useState(true)

    return (
        <div className="bg-black min-h-screen">
            <MatrixRain distortion={distortion} />

            <button
                onClick={() => setDistortion((d) => !d)}
                className="fixed top-4 right-4 z-50 bg-black/70 border border-green-500/30 text-green-400 text-xs font-mono px-2 py-1 rounded hover:bg-green-500/10 transition-colors"
            >
                FX
            </button>

            <div className="relative z-10 space-y-4 sm:space-y-6">
                {/* Hero */}
                <section className="bg-black/60 backdrop-blur-sm border-b border-green-500/10 py-16 sm:py-24 px-4">
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/vincent-wilkie-profile-picture.png"
                            alt="Vincent Wilkie"
                            width={96}
                            height={96}
                            className="rounded-full w-24 h-24 object-cover mb-6"
                        />
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                            Vincent Wilkie
                        </h1>
                        <p className="text-green-400 text-xl mb-4">
                            Full Stack Software Developer
                        </p>
                        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                            Building delightful web experiences from scratch. 14+ years of pragmatic
                            solutions, clean UX, and steady iteration across the full stack.
                        </p>
                    </div>
                </section>

                {/* Skills */}
                <section className="bg-black/60 backdrop-blur-sm border-b border-green-500/10 px-4 sm:px-8 py-8 sm:py-12">
                    <h2 className="text-white text-2xl font-bold text-center mb-8">
                        Skills &amp; Experience
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {skills.map((skill) => (
                            <div key={skill.category} className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400 font-semibold">
                                        {skill.category}
                                    </span>
                                    <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full">
                                        {skill.years} yrs
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {skill.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="bg-green-500/10 text-green-300 text-xs rounded-full px-2.5 py-1"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="bg-black/60 backdrop-blur-sm border-b border-green-500/10 px-4 sm:px-8 py-8 sm:py-12">
                    <h2 className="text-white text-2xl font-bold text-center mb-8">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {projects.map((project) => (
                            <div
                                key={project.name}
                                className="bg-black/40 rounded-lg overflow-hidden border border-green-500/10"
                            >
                                <div className="aspect-video relative">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="p-4 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white font-semibold text-lg">
                                            {project.name}
                                        </h3>
                                        <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full">
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={project.url}
                                        target="_blank"
                                        className="text-green-400 text-sm hover:text-green-300 transition-colors inline-flex items-center gap-1"
                                    >
                                        {project.url.replace(`https://`, ``)}
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section className="bg-black/60 backdrop-blur-sm border-b border-green-500/10 px-4 sm:px-8 py-8 sm:py-12">
                    <h2 className="text-white text-2xl font-bold text-center mb-8">
                        Get in Touch
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {contacts.map((contact) => (
                            <Link
                                key={contact.icon}
                                href={contact.href}
                                target={contact.href.startsWith(`http`) ? `_blank` : undefined}
                                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                            >
                                <ContactIcon type={contact.icon} />
                                <span>{contact.label}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-6 text-center">
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} Vincent Wilkie. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    )
}

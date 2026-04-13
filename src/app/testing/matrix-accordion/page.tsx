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
        years: `10+`,
        tools: [`Node.js`, `Express`, `PHP`, `Python`, `MySQL`, `NoSQL`, `REST APIs`],
    },
    {
        category: `Cloud & Infrastructure`,
        years: `6+`,
        tools: [`AWS`, `CloudFormation`, `SQS/SNS`, `CI/CD`, `Server Management`],
    },
    {
        category: `Full Stack Leadership`,
        years: `8+`,
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
    { icon: `📞`, label: `+1-289-698-4004`, href: `tel:+2896984004` },
    { icon: `✉️`, label: `vincentwilkie@hotmail.com`, href: `mailto:vincentwilkie@hotmail.com` },
    { icon: `💼`, label: `LinkedIn — /in/vdubworkshop`, href: `https://www.linkedin.com/in/vdubworkshop` },
    { icon: `🐙`, label: `GitHub — VinceWilkie`, href: `https://github.com/VinceWilkie` },
    { icon: `🐦`, label: `Twitter — @vincentwilkie`, href: `https://x.com/vincentwilkie` },
]

interface AccordionSectionProps {
    title: string
    isOpen: boolean
    onToggle: () => void
    children: React.ReactNode
}

function AccordionSection({ title, isOpen, onToggle, children }: AccordionSectionProps) {
    return (
        <div>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 bg-black/60 backdrop-blur-sm rounded-xl border border-green-500/15 hover:border-green-500/30 transition-colors"
            >
                <span className="text-white font-semibold">{title}</span>
                <svg
                    className={`w-5 h-5 text-green-400 transition-transform duration-300 ${isOpen ? `rotate-180` : ``}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? `max-h-[1000px] opacity-100` : `max-h-0 opacity-0`}`}
            >
                <div className="p-4">{children}</div>
            </div>
        </div>
    )
}

export default function MatrixAccordionPage() {
    const [distortion, setDistortion] = useState(true)
    const [openSections, setOpenSections] = useState<Set<string>>(new Set())

    function toggleSection(section: string) {
        setOpenSections((prev) => {
            const next = new Set(prev)
            if (next.has(section)) {
                next.delete(section)
            } else {
                next.add(section)
            }
            return next
        })
    }

    return (
        <div className="bg-black min-h-screen">
            <MatrixRain distortion={distortion} />

            <button
                onClick={() => setDistortion((d) => !d)}
                className="fixed top-4 right-4 z-50 px-3 py-1.5 text-xs font-mono rounded-lg border border-green-500/30 bg-black/70 backdrop-blur-sm text-green-400 hover:border-green-500/60 transition-colors"
            >
                FX {distortion ? `ON` : `OFF`}
            </button>

            <div className="relative z-10">
                {/* Hero */}
                <section className="min-h-[60vh] flex items-center justify-center px-4">
                    <div className="text-center space-y-5">
                        <Image
                            src="/vincent-wilkie-profile-picture.png"
                            alt="Vincent Wilkie"
                            width={112}
                            height={112}
                            className="rounded-full w-28 h-28 border-2 border-green-500/30 mx-auto object-cover"
                        />
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">Vincent Wilkie</h1>
                        <p className="text-green-400 text-xl">Full Stack Software Developer</p>
                        <p className="text-gray-400 max-w-xl mx-auto text-center">
                            Building delightful web experiences from scratch. 14+ years of pragmatic
                            solutions, clean UX, and steady iteration across the full stack.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            Available for work
                        </div>
                    </div>
                </section>

                {/* Accordion */}
                <div className="max-w-2xl mx-auto px-4 pb-12 space-y-3">
                    <AccordionSection
                        title="Skills & Experience"
                        isOpen={openSections.has(`skills`)}
                        onToggle={() => toggleSection(`skills`)}
                    >
                        <div className="space-y-4">
                            {skills.map((group, i) => (
                                <div key={group.category}>
                                    {i > 0 && <div className="border-t border-green-500/10 mb-4" />}
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-green-400 font-medium">{group.category}</span>
                                        <span className="text-xs bg-green-500/10 text-green-300 px-2 py-0.5 rounded-full">
                                            {group.years} yrs
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {group.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="bg-green-500/10 text-green-300 text-xs px-3 py-1 rounded-full"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionSection>

                    <AccordionSection
                        title="Projects"
                        isOpen={openSections.has(`projects`)}
                        onToggle={() => toggleSection(`projects`)}
                    >
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <div key={project.name} className="space-y-3">
                                    <div className="w-full aspect-video rounded-lg overflow-hidden bg-black/50">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={600}
                                            height={338}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-white font-semibold">{project.name}</h3>
                                            <p className="text-gray-400 text-sm">{project.description}</p>
                                        </div>
                                        <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full">
                                            {project.status}
                                        </span>
                                    </div>
                                    <Link
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-400 text-sm hover:underline"
                                    >
                                        {project.url} →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </AccordionSection>

                    <AccordionSection
                        title="Get in Touch"
                        isOpen={openSections.has(`contact`)}
                        onToggle={() => toggleSection(`contact`)}
                    >
                        <div className="space-y-2">
                            {contacts.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500/5 transition-colors"
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-gray-300 text-sm">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </AccordionSection>
                </div>

                {/* Footer */}
                <footer className="text-center pb-8">
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} Vincent Wilkie. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    )
}

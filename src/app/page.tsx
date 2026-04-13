"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MatrixRain from "@/components/MatrixRain"

const skills = [
    {
        category: `Frontend`,
        years: `14y+`,
        tagline: `Interfaces people actually enjoy using`,
        narrative: `From hand-coded HTML/CSS sites to complex single-page apps, I've spent 14 years obsessing over how things feel in the browser. I build responsive, accessible interfaces that work across every screen — including hybrid mobile apps with Ionic.`,
        tools: [`React`, `Vue`, `Angular`, `TypeScript`, `SCSS`, `Tailwind CSS`, `Ionic`, `HTML/CSS/JS`],
    },
    {
        category: `Backend & Data`,
        years: `14y+`,
        tagline: `The engine behind the curtain`,
        narrative: `I've built APIs, refactored legacy PHP codebases into structured frameworks, and designed database schemas that scale. Whether it's a REST endpoint or a complex query optimization, I focus on reliability and clarity.`,
        tools: [`Node.js`, `Express`, `PHP`, `CodeIgniter`, `Python`, `MySQL`, `NoSQL`, `REST APIs`],
    },
    {
        category: `Cloud & Infrastructure`,
        years: `5y+`,
        tagline: `Ship it and keep it running`,
        narrative: `From spinning up EC2 instances to orchestrating serverless workflows with Lambda and SQS, I handle the infrastructure that keeps production humming. I've also managed on-site servers and hardware systems.`,
        tools: [`AWS (EC2, Lambda, S3, RDS)`, `CloudFormation`, `SQS/SNS`, `CI/CD`, `Server Management`],
    },
    {
        category: `Full Stack Leadership`,
        years: `14y+`,
        tagline: `14 years of connecting the dots`,
        narrative: `Beyond writing code, I make architectural decisions that shape entire products. I've modernized legacy systems, bridged web and mobile platforms, and helped teams move faster by simplifying complexity.`,
        tools: [`Architecture`, `Legacy Modernization`, `Cross-Platform`, `Mentoring`, `Technical Strategy`],
    },
]

const projects = [
    {
        name: `liati`,
        url: `https://liati.ca`,
        description: `Digital narrative + fashion brand storytelling`,
        status: `IN_DEV`,
        image: `/projects/liati.png`,
    },
    {
        name: `ctrlaltrandom`,
        url: `https://ctrlaltrandom.com`,
        description: `Tech podcast — innovations & quirky gadgets`,
        status: `IN_DEV`,
        image: `/projects/ctrlaltrandom.png`,
    },
]

const contacts = [
    {
        label: `Phone`,
        href: `tel:+2896984004`,
        display: `+1-289-698-4004`,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        label: `Email`,
        href: `mailto:vincentwilkie@hotmail.com`,
        display: `vincentwilkie@hotmail.com`,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: `LinkedIn`,
        href: `https://www.linkedin.com/in/vdubworkshop`,
        display: `/in/vdubworkshop`,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: `GitHub`,
        href: `https://github.com/VinceWilkie`,
        display: `VinceWilkie`,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        label: `Twitter`,
        href: `https://x.com/vincentwilkie`,
        display: `@vincentwilkie`,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: `Facebook`,
        href: `https://facebook.com/vincewilkie1`,
        display: `vincewilkie1`,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
]

export default function HomePage() {
    const [distortion, setDistortion] = useState(false)
    const [isMobile, setIsMobile] = useState(true)
    const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set())

    useEffect(() => {
        const mql = window.matchMedia(`(min-width: 640px)`)
        const update = () => {
            const desktop = mql.matches
            setIsMobile(!desktop)
            setDistortion(desktop)
        }
        update()
        mql.addEventListener(`change`, update)
        return () => mql.removeEventListener(`change`, update)
    }, [])

    const toggleSkill = (category: string) => {
        setExpandedSkills((prev) => {
            const next = new Set(prev)
            if (next.has(category)) {
                next.delete(category)
            } else {
                next.add(category)
            }
            return next
        })
    }

    return (
        <div className="bg-black min-h-screen">
            <MatrixRain distortion={distortion} />

            {!isMobile && (
            <button
                onClick={() => setDistortion((prev) => !prev)}
                className={`fixed top-4 right-4 z-20 px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 ${
                    distortion
                        ? `bg-green-500/20 border-green-500/40 text-green-400`
                        : `bg-gray-800/60 border-gray-600/40 text-gray-500`
                }`}
            >
                FX
            </button>
            )}

            <div className="relative z-10 flex items-start justify-center min-h-screen py-8 px-4">
                <div className="max-w-2xl w-full bg-black/70 backdrop-blur-md rounded-2xl border border-green-500/20 overflow-hidden">

                    {/* Header */}
                    <div className="flex flex-col items-center pt-8 pb-6 px-6">
                        <Image
                            src="/vincent-wilkie-profile-picture.png"
                            alt="Vincent Wilkie"
                            width={80}
                            height={80}
                            className="rounded-full w-20 h-20 object-cover mb-4"
                        />
                        <h1 className="text-2xl font-bold text-white">Vincent Wilkie</h1>
                        <p className="text-green-400 mt-1">Full Stack Software Developer</p>
                        <p className="text-gray-400 text-sm text-center mt-3 max-w-md leading-relaxed">
                            Building delightful web experiences from scratch. 14+ years of pragmatic
                            solutions, clean UX, and steady iteration across the full stack.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Available for work
                            </span>
                        </div>
                    </div>

                    <div className="border-t border-green-500/20" />

                    {/* Skills */}
                    <div className="px-6 py-6">
                        <h2 className="text-green-400 text-xs uppercase tracking-wider font-semibold mb-5">Skills & Experience</h2>
                        <div className="space-y-3">
                            {skills.map((group) => {
                                const isOpen = expandedSkills.has(group.category)
                                return (
                                    <div key={group.category} className="border border-green-500/10 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => toggleSkill(group.category)}
                                            className="w-full text-left p-4 flex items-start gap-3 hover:bg-green-500/5 transition-colors"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-white font-semibold text-sm">{group.category}</h3>
                                                    <span className="text-green-400 text-[10px] font-mono bg-green-500/10 px-1.5 py-0.5 rounded flex-shrink-0">
                                                        {group.years}
                                                    </span>
                                                    <span className="text-gray-500 text-xs italic hidden sm:inline">— {group.tagline}</span>
                                                </div>
                                                <p className="text-gray-500 text-xs italic mt-1 sm:hidden">{group.tagline}</p>
                                                <div className="flex flex-wrap gap-1.5 mt-2">
                                                    {group.tools.map((tool) => (
                                                        <span
                                                            key={tool}
                                                            className="bg-green-500/10 text-green-300 text-xs rounded-full px-2.5 py-0.5"
                                                        >
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <svg
                                                className={`w-4 h-4 text-green-400/50 flex-shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? `rotate-180` : ``}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? `max-h-48 opacity-100` : `max-h-0 opacity-0`}`}>
                                            <p className="text-gray-400 text-xs leading-relaxed px-4 pb-4">
                                                {group.narrative}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="border-t border-green-500/20" />

                    {/* Projects */}
                    <div className="px-6 py-6">
                        <h2 className="text-green-400 text-xs uppercase tracking-wider font-semibold mb-5">Projects</h2>
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <Link
                                    key={project.name}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-3 -mx-3 rounded-xl border border-transparent hover:border-green-500/20 hover:bg-green-500/5 transition-all duration-200 cursor-pointer"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-xl object-contain bg-black/50 flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">{project.name}</h3>
                                            <span className="bg-yellow-500/20 text-yellow-400 text-[10px] rounded-full px-2 py-0.5">
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                                        <span className="inline-flex items-center gap-1 text-green-400/70 text-xs mt-2 group-hover:text-green-400 transition-colors">
                                            {project.url.replace(`https://`, ``)}
                                            <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-green-500/20" />

                    {/* Contact */}
                    <div className="px-6 py-6">
                        <h2 className="text-green-400 text-xs uppercase tracking-wider font-semibold mb-4 text-center">Contact</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {contacts.map((contact) => (
                                <Link
                                    key={contact.label}
                                    href={contact.href}
                                    target={contact.href.startsWith(`http`) ? `_blank` : undefined}
                                    rel={contact.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                                    className="flex flex-col items-center gap-1 text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    {contact.icon}
                                    <span className="text-xs">{contact.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-green-500/20" />

                    {/* Footer */}
                    <div className="px-6 py-4 text-center">
                        <p className="text-gray-600 text-xs">
                            {`© ${new Date().getFullYear()} Vincent Wilkie. All rights reserved.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

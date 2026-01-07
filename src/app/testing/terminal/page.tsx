"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
    { label: `phone`, value: `+1-289-698-4004`, href: `tel:+2896984004`, color: `text-green-400` },
    { label: `email`, value: `vincentwilkie@hotmail.com`, href: `mailto:vincentwilkie@hotmail.com`, color: `text-cyan-400` },
    { label: `linkedin`, value: `/in/vdubworkshop`, href: `https://www.linkedin.com/in/vdubworkshop`, color: `text-blue-400` },
    { label: `github`, value: `VinceWilkie`, href: `https://github.com/VinceWilkie`, color: `text-purple-400` },
    { label: `twitter`, value: `@vincentwilkie`, href: `https://x.com/vincentwilkie`, color: `text-gray-400` },
    { label: `facebook`, value: `vincewilkie1`, href: `https://facebook.com/vincewilkie1`, color: `text-blue-500` },
]

const skills = [
    {
        name: `frontend`,
        version: `5y+`,
        description: `Crafting responsive, accessible UIs with React, Next.js, and modern CSS. Obsessed with smooth animations and pixel-perfect layouts.`
    },
    {
        name: `backend`,
        version: `5y+`,
        description: `Building scalable APIs and services with Node.js, Python, and cloud infrastructure. Clean architecture that scales.`
    },
    {
        name: `database`,
        version: `4y+`,
        description: `Designing efficient schemas, writing optimized queries, and managing both SQL and NoSQL databases in production.`
    },
    {
        name: `devops`,
        version: `3y+`,
        description: `CI/CD pipelines, containerization with Docker, and cloud deployments. Automating everything that can be automated.`
    },
    {
        name: `api_design`,
        version: `5y+`,
        description: `RESTful and GraphQL APIs that are intuitive, well-documented, and a pleasure to integrate with.`
    },
    {
        name: `integration`,
        version: `4y+`,
        description: `Connecting disparate systems, third-party APIs, and legacy codebases into cohesive, working solutions.`
    },
]

const projects = [
    {
        name: `liati`,
        description: `Digital narrative + fashion brand storytelling`,
        url: `https://liati.ca`,
        status: `IN_DEV`,
        image: `/projects/liati.png`,
    },
    {
        name: `ctrlaltrandom`,
        description: `Tech podcast - innovations & quirky gadgets`,
        url: `https://ctrlaltrandom.com`,
        status: `IN_DEV`,
        image: `/projects/ctrlaltrandom.png`,
    },
]

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayText, setDisplayText] = useState(``)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0
            const interval = setInterval(() => {
                if (index <= text.length) {
                    setDisplayText(text.slice(0, index))
                    index++
                } else {
                    clearInterval(interval)
                    setTimeout(() => setShowCursor(false), 1000)
                }
            }, 30)
            return () => clearInterval(interval)
        }, delay)
        return () => clearTimeout(timeout)
    }, [text, delay])

    return (
        <span>
            {displayText}
            {showCursor && <span className="animate-pulse">█</span>}
        </span>
    )
}

function SkillOutput({ text, skillKey }: { text: string; skillKey: string }) {
    const [displayText, setDisplayText] = useState(``)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        // Reset when skill changes
        setDisplayText(``)
        setShowCursor(true)

        let index = 0
        const interval = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index))
                index++
            } else {
                clearInterval(interval)
                setTimeout(() => setShowCursor(false), 500)
            }
        }, 20)

        return () => clearInterval(interval)
    }, [text, skillKey])

    return (
        <span>
            {displayText}
            {showCursor && <span className="animate-pulse">█</span>}
        </span>
    )
}

export default function TerminalDesign() {
    const [bootComplete, setBootComplete] = useState(false)
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

    useEffect(() => {
        const timer = setTimeout(() => setBootComplete(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    const activeSkill = skills.find(s => s.name === selectedSkill)

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black overflow-x-hidden">
            {/* Scanlines Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 1px,
                        rgba(0, 255, 65, 0.1) 1px,
                        rgba(0, 255, 65, 0.1) 2px
                    )`,
                }}
            />

            {/* CRT Vignette */}
            <div
                className="fixed inset-0 pointer-events-none z-40"
                style={{
                    background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)`,
                }}
            />

            {/* Phosphor Glow Effect */}
            <div
                className="fixed inset-0 pointer-events-none z-30"
                style={{
                    boxShadow: `inset 0 0 150px rgba(0, 255, 65, 0.05)`,
                }}
            />

            {/* Terminal Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 border-b border-green-900/50 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center h-10">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="ml-4 text-sm opacity-60">vwilkie@portfolio:~$</span>
                        <span className="ml-1 animate-pulse">█</span>
                    </div>
                </div>
            </header>

            {/* Main Terminal Content */}
            <main className="pt-16 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
                {/* Boot Sequence */}
                {!bootComplete && (
                    <div className="space-y-2 text-sm animate-pulse">
                        <p>[BOOT] Initializing system...</p>
                        <p>[OK] Loading kernel modules</p>
                        <p>[OK] Starting portfolio daemon</p>
                        <p className="text-cyan-400">[INFO] Welcome to Vincent Wilkie Portfolio v2.0</p>
                    </div>
                )}

                {bootComplete && (
                    <div className="space-y-6">
                        {/* ASCII Art Header */}
                        {/* <section className="overflow-x-auto flex flex-col items-center">
                            <pre className="text-[8px] sm:text-xs leading-none text-green-500/80 whitespace-pre inline-block">
                                {`██╗   ██╗██╗███╗   ██╗ ██████╗███████╗███╗   ██╗████████╗
██║   ██║██║████╗  ██║██╔════╝██╔════╝████╗  ██║╚══██╔══╝
██║   ██║██║██╔██╗ ██║██║     █████╗  ██╔██╗ ██║   ██║
╚██╗ ██╔╝██║██║╚██╗██║██║     ██╔══╝  ██║╚██╗██║   ██║
 ╚████╔╝ ██║██║ ╚████║╚██████╗███████╗██║ ╚████║   ██║
  ╚═══╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   `}
                            </pre>
                            <pre className="text-[8px] sm:text-xs leading-none text-cyan-400/80 whitespace-pre inline-block mt-1">
                                {`██╗    ██╗██╗██╗     ██╗  ██╗██╗███████╗
██║    ██║██║██║     ██║ ██╔╝██║██╔════╝
██║ █╗ ██║██║██║     █████╔╝ ██║█████╗
██║███╗██║██║██║     ██╔═██╗ ██║██╔══╝
╚███╔███╔╝██║███████╗██║  ██╗██║███████╗
 ╚══╝╚══╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚══════╝`}
                            </pre>
                        </section> */}

                        {/* Profile Section */}
                        <section id="about" className="space-y-2">
                            <p className="text-gray-500">$ cat /etc/profile</p>
                            <div className="border border-green-500/50 p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                                    {/* Profile Image */}
                                    <div className="flex-shrink-0">
                                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 border-2 border-green-500/50 overflow-hidden">
                                            <Image
                                                src="/vincent-wilkie-profile-picture.png"
                                                alt="Vincent Wilkie"
                                                fill
                                                className="object-cover"
                                                style={{ filter: `grayscale(100%) brightness(1.2) contrast(1.3)` }}
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-green-500/10" />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h1 className="text-xl sm:text-2xl">
                                                <TypeWriter text="VINCENT WILKIE" delay={500} />
                                            </h1>
                                            <p className="text-cyan-400">
                                                <TypeWriter text="// Full Stack Software Developer" delay={1000} />
                                            </p>
                                        </div>

                                        <div className="text-sm space-y-2 text-gray-400">
                                            <p>
                                                <span className="text-green-500">→</span> Building <span className="text-white">delightful web experiences</span> from scratch
                                            </p>
                                            <p>
                                                <span className="text-green-500">→</span> Pragmatic solutions | Clean UX | Steady iteration
                                            </p>
                                            <p>
                                                <span className="text-green-500">→</span> Status: <span className="text-green-400 animate-pulse">AVAILABLE</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section id="skills" className="space-y-2">
                            <p className="text-gray-500">$ skills --list</p>
                            <div className="border border-green-500/50 p-4 sm:p-6">
                                <p className="text-gray-500 text-sm mb-3"># click a package for details</p>
                                <div className="space-y-1">
                                    {skills.map((skill) => (
                                        <button
                                            key={skill.name}
                                            onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                                            className={`flex items-center gap-2 text-sm w-full text-left transition-colors !min-h-0 py-0 ${selectedSkill === skill.name
                                                ? `text-white`
                                                : `text-gray-400 hover:text-white`
                                                }`}
                                        >
                                            <span className={`${selectedSkill === skill.name ? `text-green-400` : `text-green-600`}`}>
                                                {selectedSkill === skill.name ? `▼` : `├──`}
                                            </span>
                                            <span className="text-cyan-400">{skill.name}</span>
                                            <span className="text-gray-600">@</span>
                                            <span className="text-yellow-500">{skill.version}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Skill Output */}
                                {activeSkill && (
                                    <div className="mt-4 pt-4 border-t border-green-900/50">
                                        <p className="text-gray-500 text-sm mb-2">$ man {activeSkill.name}</p>
                                        <div className="text-sm text-gray-300 leading-relaxed">
                                            <SkillOutput
                                                text={activeSkill.description}
                                                skillKey={activeSkill.name}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Links Section */}
                        <section id="links" className="space-y-2">
                            <p className="text-gray-500">$ cat ./contact.json</p>
                            <div className="border border-green-500/50 p-4 sm:p-6">
                                <pre className="text-sm overflow-x-auto">
                                    <span className="text-gray-500">{`{`}</span>
                                    {links.map((link, i) => (
                                        <div key={link.label} className="ml-4">
                                            <Link
                                                href={link.href}
                                                target={link.href.startsWith(`http`) ? `_blank` : undefined}
                                                rel={link.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                                                className="group inline-flex !min-h-0 !min-w-0"
                                            >
                                                <span className="text-purple-400">&quot;{link.label}&quot;</span>
                                                <span className="text-gray-500">: </span>
                                                <span className={`${link.color} group-hover:text-white group-hover:underline transition-colors`}>
                                                    &quot;{link.value}&quot;
                                                </span>
                                                {i < links.length - 1 && <span className="text-gray-500">,</span>}
                                            </Link>
                                        </div>
                                    ))}
                                    <span className="text-gray-500">{`}`}</span>
                                </pre>
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section id="projects" className="space-y-2">
                            <p className="text-gray-500">$ ls -la ./projects/</p>
                            <div className="border border-green-500/50 p-4 sm:p-6 space-y-4">
                                {projects.map((project) => (
                                    <Link
                                        key={project.name}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block border border-green-900/50 hover:border-green-500/50 transition-colors"
                                    >
                                        <div className="flex flex-col sm:flex-row">
                                            {/* Image */}
                                            <div className="relative aspect-video sm:aspect-square sm:w-48 flex-shrink-0 bg-black/50 overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    fill
                                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                                    style={{ filter: `brightness(0.9) contrast(1.1)` }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 p-4 sm:p-6 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg text-cyan-400 group-hover:text-white transition-colors">
                                                        ./{project.name}/
                                                    </h3>
                                                    <span className="px-2 py-1 text-xs border border-yellow-500/50 text-yellow-500">
                                                        [{project.status}]
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    {project.description}
                                                </p>
                                                <div className="text-sm text-green-500 group-hover:text-green-400 transition-colors">
                                                    <span className="opacity-60">→</span> {project.url}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="border-t border-green-900/50 pt-8">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                                <p className="text-gray-500">
                                    [EOF] © {new Date().getFullYear()} Vincent Wilkie | All rights reserved
                                </p>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600">PID: {Math.floor(Math.random() * 9000) + 1000}</span>
                                    <Link
                                        href="/testing"
                                        className="text-cyan-400 hover:text-white transition-colors"
                                    >
                                        [exit]
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-4 text-gray-600 text-sm">
                                <span className="animate-pulse">█</span> Connection established | Type &apos;exit&apos; to disconnect
                            </div>
                        </footer>
                    </div>
                )}
            </main>
        </div>
    )
}


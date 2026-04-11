"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { links, skills, projects } from "@/data/profile"

const THEME_KEY = `vw-theme`

function ContactIcon({ type, className }: { type: string; className?: string }) {
    const cls = className ?? `w-5 h-5`
    switch (type) {
        case `phone`:
            return (
                <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        case `email`:
            return (
                <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        case `linkedin`:
            return (
                <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        case `facebook`:
            return (
                <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        case `twitter`:
            return (
                <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        case `github`:
            return (
                <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        default:
            return (
                <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
                </svg>
            )
    }
}

const navSections = [
    { id: `about`, label: `About` },
    { id: `skills`, label: `Skills` },
    { id: `projects`, label: `Projects` },
    { id: `contact`, label: `Contact` },
]

function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: `smooth` })
}

function SectionNavUp({ targetId, dark }: { targetId: string; dark: boolean }) {
    return (
        <div className="flex justify-center py-1 sm:py-2">
            <button
                onClick={() => scrollToId(targetId)}
                className={`p-1.5 sm:p-2 rounded-full transition-colors ${dark ? `text-gray-500 hover:text-white hover:bg-gray-800` : `text-gray-400 hover:text-gray-900 hover:bg-gray-200`}`}
                aria-label="Previous section"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </button>
        </div>
    )
}

function SectionNavDown({ targetId, dark }: { targetId: string; dark: boolean }) {
    return (
        <div className="flex justify-center py-1 sm:py-2">
            <button
                onClick={() => scrollToId(targetId)}
                className={`p-1.5 sm:p-2 rounded-full transition-colors animate-bounce ${dark ? `text-gray-500 hover:text-white hover:bg-gray-800` : `text-gray-400 hover:text-gray-900 hover:bg-gray-200`}`}
                aria-label="Next section"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
        </div>
    )
}

function SkillIcon({ icon, className }: { icon: string; className?: string }) {
    const cls = className ?? `w-6 h-6`
    switch (icon) {
        case `monitor`:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            )
        case `server`:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
                    <rect x="2" y="2" width="20" height="8" rx="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" />
                    <path d="M6 6h.01M6 18h.01" />
                </svg>
            )
        case `cloud`:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
            )
        case `compass`:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
            )
        default:
            return null
    }
}

function useHorizontalSnap(itemCount: number) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const scrollTo = useCallback((index: number) => {
        const container = scrollRef.current
        if (!container) return
        const slide = container.children[index] as HTMLElement | undefined
        if (slide) {
            slide.scrollIntoView({ behavior: `smooth`, block: `nearest`, inline: `start` })
        }
    }, [])

    useEffect(() => {
        const container = scrollRef.current
        if (!container) return

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft
            const width = container.clientWidth
            const index = Math.round(scrollLeft / width)
            setActiveIndex(Math.min(Math.max(index, 0), itemCount - 1))
        }

        container.addEventListener(`scroll`, handleScroll, { passive: true })
        return () => container.removeEventListener(`scroll`, handleScroll)
    }, [itemCount])

    return { scrollRef, activeIndex, scrollTo }
}

export default function HomePage() {
    const [dark, setDark] = useState(true)
    const [mounted, setMounted] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null)

    const skillsSnap = useHorizontalSnap(skills.length)
    const projectsSnap = useHorizontalSnap(projects.length)

    useEffect(() => {
        try {
            const saved = localStorage.getItem(THEME_KEY)
            if (saved !== null) {
                setDark(saved === `dark`)
            }
        } catch {
            // localStorage might not be available
        }
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const next = !dark
        setDark(next)
        try {
            localStorage.setItem(THEME_KEY, next ? `dark` : `light`)
        } catch {
            // localStorage might not be available
        }
    }

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: `smooth` })
        }
        setDrawerOpen(false)
    }

    return (
        <div
            className={`transition-colors duration-300 ${dark ? `bg-gray-950 text-gray-100` : `bg-white text-gray-900`}`}
            style={{ visibility: mounted ? `visible` : `hidden` }}
        >
            {/* Hamburger button */}
            <button
                onClick={() => setDrawerOpen(true)}
                className={`fixed top-3 right-3 sm:top-5 sm:right-5 z-50 p-2 sm:p-2.5 rounded-xl backdrop-blur-md transition-colors ${dark ? `bg-gray-800/70 text-gray-300 hover:text-white` : `bg-white/70 text-gray-600 hover:text-gray-900`} ${drawerOpen ? `opacity-0 pointer-events-none` : `opacity-100`}`}
                aria-label="Open menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-5 h-5">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Drawer backdrop */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ${drawerOpen ? `opacity-100` : `opacity-0 pointer-events-none`}`}
                onClick={() => setDrawerOpen(false)}
                style={{ backgroundColor: `rgba(0,0,0,0.5)` }}
            />

            {/* Drawer */}
            <nav
                className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] transition-transform duration-300 ease-in-out flex flex-col ${dark ? `bg-gray-900 border-l border-gray-800` : `bg-white border-l border-gray-200`} ${drawerOpen ? `translate-x-0` : `translate-x-full`}`}
            >
                <div className="flex items-center justify-between p-6">
                    <span className={`text-sm font-medium ${dark ? `text-gray-400` : `text-gray-500`}`}>Menu</span>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className={`p-2 rounded-lg transition-colors !min-h-0 !min-w-0 ${dark ? `text-gray-400 hover:text-white hover:bg-gray-800` : `text-gray-500 hover:text-gray-900 hover:bg-gray-100`}`}
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-5 h-5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 flex flex-col gap-1 px-4">
                    {navSections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors !min-h-0 ${dark ? `text-gray-300 hover:bg-gray-800 hover:text-white` : `text-gray-700 hover:bg-gray-100 hover:text-gray-900`}`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                <div className={`border-t px-6 py-6 space-y-4 ${dark ? `border-gray-800` : `border-gray-200`}`}>
                    <button
                        onClick={toggleTheme}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors !min-h-0 ${dark ? `text-gray-300 hover:bg-gray-800 hover:text-white` : `text-gray-700 hover:bg-gray-100 hover:text-gray-900`}`}
                    >
                        {dark ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
                            </svg>
                        )}
                        {dark ? `Light mode` : `Dark mode`}
                    </button>
                    <Link
                        href="/terminal"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors !min-h-0 bg-gray-900 text-white hover:bg-gray-700"
                        onClick={() => setDrawerOpen(false)}
                    >
                        <span className="font-mono text-xs text-green-400">&gt;_</span>
                        Terminal Mode
                    </Link>
                </div>
            </nav>

            {/* Snap-scroll container */}
            <main ref={mainRef} data-theme={dark ? `dark` : `light`} className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-themed">

                {/* ── Section 1: Hero ── */}
                <section id="about" className="h-screen snap-start flex flex-col px-4 sm:px-8">
                    {/* Content */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="flex justify-center mb-4 sm:mb-8">
                                <div className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/vincent-wilkie-profile-picture.png"
                                        alt="Vincent Wilkie"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            <h1 className={`text-3xl sm:text-6xl font-bold tracking-tight ${dark ? `text-white` : `text-gray-900`}`}>
                                Vincent Wilkie
                            </h1>
                            <p className={`mt-2 sm:mt-4 text-lg sm:text-2xl ${dark ? `text-gray-400` : `text-gray-500`}`}>
                                Full Stack Software Developer
                            </p>
                            <p className={`mt-3 sm:mt-6 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed ${dark ? `text-gray-400` : `text-gray-600`}`}>
                                Building delightful web experiences from scratch. 14+ years of pragmatic solutions,
                                clean UX, and steady iteration across the full stack.
                            </p>
                            <div className="mt-4 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${dark ? `bg-green-500/10 text-green-400` : `bg-green-50 text-green-700`}`}>
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Available for work
                                </span>
                                <Link
                                    href="/terminal"
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors bg-gray-900 text-white hover:bg-gray-700"
                                >
                                    <span className="font-mono text-xs text-green-400">&gt;_</span>
                                    Terminal Mode
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Down arrow */}
                    <SectionNavDown targetId="skills" dark={dark} />
                </section>

                {/* ── Section 2: Skills ── */}
                <section id="skills" className={`h-screen snap-start flex flex-col transition-colors duration-300 ${dark ? `bg-gray-900/50` : `bg-gray-50`}`}>
                    {/* Title */}
                    <div className="px-4 sm:px-8 pt-4 sm:pt-8 max-w-5xl mx-auto w-full">
                        <h2 className={`text-xl sm:text-3xl font-bold ${dark ? `text-white` : `text-gray-900`}`}>Skills & Experience</h2>
                        <p className={`mt-0.5 sm:mt-1 text-sm sm:text-base ${dark ? `text-gray-400` : `text-gray-500`}`}>What I bring to the table</p>
                    </div>
                    {/* Up arrow */}
                    <SectionNavUp targetId="about" dark={dark} />
                    {/* Content: horizontal slides */}
                    <div
                        ref={skillsSnap.scrollRef}
                        className="flex-1 min-h-0 flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
                    >
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="w-full flex-shrink-0 snap-start flex items-start sm:items-center justify-center px-4 sm:px-8 py-2 sm:py-0 overflow-y-auto"
                                style={{ minWidth: `100%` }}
                            >
                                <div className="max-w-2xl mx-auto w-full">
                                    <div className={`rounded-2xl p-4 sm:p-10 border shadow-sm ${dark ? `bg-gray-800/50 border-gray-700/50` : `bg-white border-gray-200`}`}>
                                        <div className={`mb-3 sm:mb-6 ${dark ? `text-gray-300` : `text-gray-600`}`}>
                                            <SkillIcon icon={skill.icon} className="w-8 h-8 sm:w-12 sm:h-12" />
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-1 sm:mb-2">
                                            <h3 className={`text-lg sm:text-2xl font-bold ${dark ? `text-white` : `text-gray-900`}`}>
                                                {skill.name}
                                            </h3>
                                            <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full ${dark ? `bg-gray-700 text-gray-300` : `bg-gray-100 text-gray-600`}`}>
                                                {skill.years}
                                            </span>
                                        </div>
                                        <p className={`text-sm italic mb-3 sm:mb-6 ${dark ? `text-gray-400` : `text-gray-500`}`}>
                                            {skill.tagline}
                                        </p>
                                        <p className={`text-xs sm:text-base leading-relaxed mb-3 sm:mb-6 ${dark ? `text-gray-300` : `text-gray-600`}`}>
                                            {skill.narrative}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {skill.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className={`text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium ${dark ? `bg-gray-700/70 text-gray-300` : `bg-gray-100 text-gray-700`}`}
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Icon tab bar */}
                    <div className="px-4 sm:px-8 py-2 sm:py-3 flex justify-center gap-3 sm:gap-6">
                        {skills.map((skill, i) => (
                            <button
                                key={skill.name}
                                onClick={() => skillsSnap.scrollTo(i)}
                                className={`flex flex-col items-center gap-1 sm:gap-1.5 transition-all ${skillsSnap.activeIndex === i
                                    ? (dark ? `text-white` : `text-gray-900`)
                                    : (dark ? `text-gray-600 hover:text-gray-400` : `text-gray-400 hover:text-gray-600`)
                                    }`}
                                aria-label={skill.name}
                            >
                                <div className={`p-1.5 sm:p-2.5 rounded-xl transition-colors ${skillsSnap.activeIndex === i
                                    ? (dark ? `bg-gray-700` : `bg-gray-200`)
                                    : `bg-transparent`
                                    }`}>
                                    <SkillIcon icon={skill.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-medium">{skill.name.split(` `)[0]}</span>
                            </button>
                        ))}
                    </div>
                    {/* Down arrow */}
                    <SectionNavDown targetId="projects" dark={dark} />
                </section>

                {/* ── Section 3: Projects ── */}
                <section id="projects" className="h-screen snap-start flex flex-col">
                    {/* Title */}
                    <div className="px-4 sm:px-8 pt-4 sm:pt-8 max-w-5xl mx-auto w-full">
                        <h2 className={`text-xl sm:text-3xl font-bold ${dark ? `text-white` : `text-gray-900`}`}>Projects</h2>
                        <p className={`mt-0.5 sm:mt-1 text-sm sm:text-base ${dark ? `text-gray-400` : `text-gray-500`}`}>Things I&apos;m building</p>
                    </div>
                    {/* Up arrow */}
                    <SectionNavUp targetId="skills" dark={dark} />
                    {/* Content: horizontal slides */}
                    <div
                        ref={projectsSnap.scrollRef}
                        className="flex-1 min-h-0 flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
                    >
                        {projects.map((project) => (
                            <div
                                key={project.name}
                                className="w-full flex-shrink-0 snap-start flex items-start sm:items-center justify-center px-4 sm:px-8 py-2 sm:py-0 overflow-y-auto"
                                style={{ minWidth: `100%` }}
                            >
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="max-w-2xl mx-auto w-full group"
                                >
                                    <div className={`rounded-2xl overflow-hidden border shadow-sm transition-all group-hover:shadow-lg ${dark ? `bg-gray-800/50 border-gray-700/50 group-hover:border-gray-600` : `bg-white border-gray-200 group-hover:border-gray-300`}`}>
                                        <div className={`relative aspect-video overflow-hidden ${dark ? `bg-gray-800` : `bg-gray-100`}`}>
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-8">
                                            <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                                                <h3 className={`text-base sm:text-xl font-bold transition-colors capitalize ${dark ? `text-white group-hover:text-blue-400` : `text-gray-900 group-hover:text-blue-600`}`}>
                                                    {project.name}
                                                </h3>
                                                <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border whitespace-nowrap ${dark ? `bg-yellow-500/10 text-yellow-400 border-yellow-500/30` : `bg-yellow-50 text-yellow-700 border-yellow-200`}`}>
                                                    {project.status.replace(`_`, ` `)}
                                                </span>
                                            </div>
                                            <p className={`text-xs sm:text-base ${dark ? `text-gray-400` : `text-gray-600`}`}>
                                                {project.description}
                                            </p>
                                            <p className={`mt-2 sm:mt-4 text-xs sm:text-sm transition-colors break-all ${dark ? `text-blue-400 group-hover:text-blue-300` : `text-blue-500 group-hover:text-blue-600`}`}>
                                                {project.url} →
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* Icon tab bar */}
                    <div className="px-4 sm:px-8 py-2 sm:py-3 flex justify-center gap-3 sm:gap-6">
                        {projects.map((project, i) => (
                            <button
                                key={project.name}
                                onClick={() => projectsSnap.scrollTo(i)}
                                className={`flex flex-col items-center gap-1 sm:gap-1.5 transition-all ${projectsSnap.activeIndex === i
                                    ? (dark ? `text-white` : `text-gray-900`)
                                    : (dark ? `text-gray-600 hover:text-gray-400` : `text-gray-400 hover:text-gray-600`)
                                    }`}
                                aria-label={project.name}
                            >
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border-2 transition-colors ${projectsSnap.activeIndex === i
                                    ? (dark ? `border-white` : `border-gray-900`)
                                    : (dark ? `border-gray-700` : `border-gray-300`)
                                    }`}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-medium capitalize">{project.name}</span>
                            </button>
                        ))}
                    </div>
                    {/* Down arrow */}
                    <SectionNavDown targetId="contact" dark={dark} />
                </section>

                {/* ── Section 4: Contact ── */}
                <section id="contact" className={`h-screen snap-start flex flex-col transition-colors duration-300 ${dark ? `bg-gray-900/50` : `bg-gray-50`}`}>
                    {/* Title */}
                    <div className="px-4 sm:px-8 pt-4 sm:pt-8 max-w-5xl mx-auto w-full text-center">
                        <h2 className={`text-xl sm:text-3xl font-bold ${dark ? `text-white` : `text-gray-900`}`}>Get in Touch</h2>
                        <p className={`mt-0.5 sm:mt-1 text-sm sm:text-base ${dark ? `text-gray-400` : `text-gray-500`}`}>Reach out through any of these channels</p>
                    </div>
                    {/* Up arrow */}
                    <SectionNavUp targetId="projects" dark={dark} />
                    {/* Content */}
                    <div className="flex-1 min-h-0 flex items-start sm:items-center justify-center px-4 sm:px-8 overflow-y-auto">
                        <div className="max-w-3xl mx-auto w-full py-2 sm:py-0">
                            <div className="grid gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith(`http`) ? `_blank` : undefined}
                                        rel={link.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                                        className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all ${dark ? `bg-gray-800/50 border-gray-700/50 hover:shadow-md hover:border-gray-600` : `bg-white border-gray-100 hover:shadow-md hover:border-gray-200`}`}
                                    >
                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-colors flex items-center justify-center flex-shrink-0 ${dark ? `bg-gray-700 group-hover:bg-gray-600` : `bg-gray-100 group-hover:bg-gray-200`}`}>
                                            <ContactIcon type={link.label} className={`w-4 h-4 sm:w-5 sm:h-5 ${dark ? `text-gray-300` : `text-gray-600`}`} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className={`text-xs sm:text-sm font-medium capitalize ${dark ? `text-white` : `text-gray-900`}`}>
                                                {link.label}
                                            </p>
                                            <p className={`text-xs sm:text-sm truncate ${dark ? `text-gray-400` : `text-gray-500`}`}>
                                                {link.value}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={`border-t px-4 sm:px-8 py-3 sm:py-6 ${dark ? `border-gray-800` : `border-gray-200`}`}>
                        <div className="max-w-5xl mx-auto text-center">
                            <p className={`text-xs sm:text-sm ${dark ? `text-gray-500` : `text-gray-400`}`}>
                                © {new Date().getFullYear()} Vincent Wilkie. All rights reserved.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

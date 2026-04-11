"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

const links = [
    {
        label: `Phone`,
        href: `tel:+2896984004`,
        gradient: `from-emerald-400 to-cyan-400`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        label: `Email`,
        href: `mailto:vincentwilkie@hotmail.com`,
        gradient: `from-blue-400 to-indigo-400`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        label: `LinkedIn`,
        href: `https://www.linkedin.com/in/vdubworkshop`,
        gradient: `from-blue-500 to-blue-600`,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        )
    },
    {
        label: `GitHub`,
        href: `https://github.com/VinceWilkie`,
        gradient: `from-gray-600 to-gray-800`,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        )
    },
    {
        label: `Twitter/X`,
        href: `https://x.com/vincentwilkie`,
        gradient: `from-gray-800 to-black`,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        )
    },
    {
        label: `Facebook`,
        href: `https://facebook.com/vincewilkie1`,
        gradient: `from-blue-600 to-blue-700`,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        )
    },
]

const skills = [
    { name: `Frontend`, icon: `🎨`, color: `from-pink-400 to-rose-400` },
    { name: `Backend`, icon: `⚙️`, color: `from-violet-400 to-purple-400` },
    { name: `Database`, icon: `🗄️`, color: `from-cyan-400 to-blue-400` },
    { name: `APIs`, icon: `🔌`, color: `from-amber-400 to-orange-400` },
    { name: `DevOps`, icon: `🚀`, color: `from-emerald-400 to-teal-400` },
    { name: `Integration`, icon: `🔗`, color: `from-fuchsia-400 to-pink-400` },
]

const projects = [
    {
        title: `LIATI`,
        description: `A digital narrative weaving personal journey with fashion brand storytelling.`,
        image: `/projects/liati.png`,
        href: `https://liati.ca`,
        status: `In Development`,
        gradient: `from-rose-400 via-fuchsia-500 to-indigo-500`,
    },
    {
        title: `CtrlAltRandom`,
        description: `Tech podcast diving into random topics—from innovations to quirky gadgets.`,
        image: `/projects/ctrlaltrandom.png`,
        href: `https://ctrlaltrandom.com`,
        status: `In Development`,
        gradient: `from-cyan-400 via-blue-500 to-purple-600`,
    },
]

function GlassCard({ children, className = `` }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl ${className}`}>
            {children}
        </div>
    )
}

export default function GlassmorphismDesign() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                setMousePos({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                })
            }
        }
        window.addEventListener(`mousemove`, handleMouseMove)
        return () => window.removeEventListener(`mousemove`, handleMouseMove)
    }, [])

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative overflow-x-hidden"
            style={{
                background: `
                    radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
                    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)
                `,
            }}
        >
            {/* Animated Background Shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: `1s` }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: `2s` }} />
            </div>

            {/* Fixed Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
                <GlassCard className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-white">VW</span>
                    <div className="flex gap-6 text-sm font-medium text-white/90">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#links" className="hover:text-white transition-colors">Links</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    </div>
                </GlassCard>
            </nav>

            {/* Content */}
            <div className="relative z-10 pt-24 px-4 sm:px-8 pb-16 max-w-5xl mx-auto space-y-20">

                {/* About Section */}
                <section id="about" className="pt-12">
                    <GlassCard className="p-8 sm:p-12">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                            {/* Profile Image */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 animate-pulse" />
                                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/30">
                                    <Image
                                        src="/vincent-wilkie-profile-picture.png"
                                        alt="Vincent Wilkie"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left space-y-6">
                                <div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
                                        Vincent Wilkie
                                    </h1>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                        <span className="text-white/90 font-medium">Full Stack Developer</span>
                                    </div>
                                </div>

                                <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
                                    Building <span className="text-white font-semibold">delightful web experiences</span> from the ground up.
                                    Pragmatic solutions, clean user experiences, and steady iteration.
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg hover:scale-105 transition-transform cursor-default`}
                                        >
                                            <span>{skill.icon}</span>
                                            <span className="text-white font-medium text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Links Section */}
                <section id="links" className="pt-8">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Connect</h2>
                        <p className="text-white/70 text-lg">Let&apos;s build something amazing together</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {links.map((link, i) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith(`http`) ? `_blank` : undefined}
                                rel={link.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                                className="group"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <GlassCard className="p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${link.gradient} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        {link.icon}
                                    </div>
                                    <span className="block text-white font-medium">{link.label}</span>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="pt-8">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h2>
                        <p className="text-white/70 text-lg">Creative experiments and side projects</p>
                    </div>

                    <div className="space-y-6">
                        {projects.map((project) => (
                            <Link
                                key={project.title}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <GlassCard className="overflow-hidden hover:scale-[1.02] transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row">
                                        {/* Image */}
                                        <div className="relative aspect-video sm:aspect-square sm:w-64 flex-shrink-0 overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white/90">
                                                    {project.title}
                                                </h3>
                                                {project.status && (
                                                    <span className="px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-medium">
                                                        {project.status}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-white/70 leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-white/80 font-medium group-hover:text-white group-hover:translate-x-2 transition-all">
                                                <span>Visit Project</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-8">
                    <GlassCard className="p-6 text-center">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-white font-bold text-xl">VW</span>
                            <span className="text-white/60 text-sm">
                                © {new Date().getFullYear()} Vincent Wilkie
                            </span>
                            <Link
                                href="/testing"
                                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to designs
                            </Link>
                        </div>
                    </GlassCard>
                </footer>
            </div>
        </div>
    )
}


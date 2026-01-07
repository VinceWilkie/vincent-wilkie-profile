"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
    { label: `Phone`, href: `tel:+2896984004`, icon: `📞` },
    { label: `Email`, href: `mailto:vincentwilkie@hotmail.com`, icon: `✉️` },
    { label: `LinkedIn`, href: `https://www.linkedin.com/in/vdubworkshop`, icon: `💼` },
    { label: `GitHub`, href: `https://github.com/VinceWilkie`, icon: `🔧` },
    { label: `Twitter/X`, href: `https://x.com/vincentwilkie`, icon: `𝕏` },
    { label: `Facebook`, href: `https://facebook.com/vincewilkie1`, icon: `📘` },
]

const skills = [
    `Frontend Development`,
    `Backend Architecture`,
    `Database Design`,
    `API Development`,
    `DevOps & Deployment`,
    `System Integration`,
]

const projects = [
    {
        title: `LIATI`,
        description: `A digital narrative weaving personal journey with fashion brand storytelling.`,
        image: `/projects/liati.png`,
        href: `https://liati.ca`,
        status: `In Development`,
    },
    {
        title: `CtrlAltRandom`,
        description: `Tech podcast diving into random topics—from innovations to quirky gadgets.`,
        image: `/projects/ctrlaltrandom.png`,
        href: `https://ctrlaltrandom.com`,
        status: `In Development`,
    },
]

function Section({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <section id={id} className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-8">
            {children}
        </section>
    )
}

export default function BrutalistDesign() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener(`scroll`, handleScroll, { passive: true })
        return () => window.removeEventListener(`scroll`, handleScroll)
    }, [])

    return (
        <div className="bg-white text-black font-mono selection:bg-[#FF3D00] selection:text-white">
            {/* Fixed Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white mix-blend-difference">
                <div className="flex items-center justify-between px-4 sm:px-8 py-4">
                    <span className="text-xl font-black tracking-tighter">VW</span>
                    <div className="flex gap-4 sm:gap-8 text-sm font-bold uppercase tracking-widest">
                        <a href="#about" className="hover:text-[#FF3D00] transition-colors">About</a>
                        <a href="#links" className="hover:text-[#FF3D00] transition-colors">Links</a>
                        <a href="#projects" className="hover:text-[#FF3D00] transition-colors">Work</a>
                    </div>
                </div>
            </nav>

            {/* Hero / About Section */}
            <Section id="about">
                <div className="max-w-6xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Profile Image with Brutalist Frame */}
                        <div className="relative">
                            <div
                                className="absolute -inset-4 bg-[#FF3D00] -z-10"
                                style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)` }}
                            />
                            <div className="absolute -inset-2 bg-black -z-10" />
                            <div className="aspect-square relative overflow-hidden">
                                <Image
                                    src="/vincent-wilkie-profile-picture.png"
                                    alt="Vincent Wilkie"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
                                    VINCENT
                                    <br />
                                    <span className="text-[#FF3D00]">WILKIE</span>
                                </h1>
                            </div>

                            <div className="border-l-8 border-black pl-6 space-y-4">
                                <p className="text-xl sm:text-2xl leading-relaxed">
                                    Full Stack Software Developer building <span className="bg-[#FF3D00] text-white px-2">delightful web experiences</span> from the ground up.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Pragmatic solutions. Clean experiences. Steady iteration.
                                </p>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {skills.map((skill, i) => (
                                    <div
                                        key={skill}
                                        className="border-2 border-black p-3 text-center text-sm font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors cursor-default"
                                        style={{ transitionDelay: `${i * 50}ms` }}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-16 flex flex-col items-center animate-bounce">
                        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
                        <div className="w-0.5 h-12 bg-black" />
                    </div>
                </div>
            </Section>

            {/* Links Section */}
            <Section id="links">
                <div className="max-w-4xl w-full">
                    <div className="mb-12">
                        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter">
                            CONNECT<span className="text-[#FF3D00]">.</span>
                        </h2>
                        <p className="text-xl mt-4 text-gray-600">
                            Let&apos;s build something together.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {links.map((link, i) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith(`http`) ? `_blank` : undefined}
                                rel={link.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                                className="group relative border-4 border-black p-6 sm:p-8 text-center hover:bg-black hover:text-white transition-all duration-200"
                                style={{
                                    transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                                }}
                            >
                                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">
                                    {link.icon}
                                </span>
                                <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                                    {link.label}
                                </span>
                                <div className="absolute top-0 right-0 w-4 h-4 bg-[#FF3D00] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Projects Section */}
            <Section id="projects">
                <div className="max-w-6xl w-full">
                    <div className="mb-12">
                        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter">
                            WORK<span className="text-[#FF3D00]">.</span>
                        </h2>
                        <p className="text-xl mt-4 text-gray-600">
                            Creative experiments and side projects.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {projects.map((project, i) => (
                            <Link
                                key={project.title}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div
                                    className="relative border-4 border-black overflow-hidden"
                                    style={{ transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)` }}
                                >
                                    {/* Image */}
                                    <div className="aspect-[21/9] relative bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </div>

                                    {/* Content Bar */}
                                    <div className="bg-black text-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-4 mb-2">
                                                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                                                    {project.title}
                                                </h3>
                                                {project.status && (
                                                    <span className="px-3 py-1 bg-[#FF3D00] text-xs font-bold uppercase">
                                                        {project.status}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-400 max-w-xl">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="text-[#FF3D00] font-bold uppercase tracking-wider flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                            Visit
                                            <span className="text-2xl">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Footer */}
            <footer className="border-t-8 border-black py-8 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-black text-2xl">VW</span>
                    <span className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Vincent Wilkie. All rights reserved.
                    </span>
                    <Link
                        href="/testing"
                        className="text-sm font-bold uppercase tracking-wider hover:text-[#FF3D00] transition-colors"
                    >
                        ← Back to designs
                    </Link>
                </div>
            </footer>
        </div>
    )
}


"use client"

import Image from "next/image"
import Link from "next/link"

const links = [
    { label: `Phone`, href: `tel:+2896984004`, display: `+1 (289) 698-4004` },
    { label: `Email`, href: `mailto:vincentwilkie@hotmail.com`, display: `vincentwilkie@hotmail.com` },
    { label: `LinkedIn`, href: `https://www.linkedin.com/in/vdubworkshop`, display: `linkedin.com/in/vdubworkshop` },
    { label: `GitHub`, href: `https://github.com/VinceWilkie`, display: `github.com/VinceWilkie` },
    { label: `Twitter`, href: `https://x.com/vincentwilkie`, display: `@vincentwilkie` },
]

const expertise = [
    {
        title: `Frontend Development`,
        description: `Crafting pixel-perfect interfaces with React, Next.js, and modern CSS frameworks.`,
    },
    {
        title: `Backend Architecture`,
        description: `Designing scalable systems with Node.js, Python, and cloud infrastructure.`,
    },
    {
        title: `Database Design`,
        description: `Optimizing data structures for performance and maintainability.`,
    },
    {
        title: `API Development`,
        description: `Building robust RESTful and GraphQL APIs for seamless integrations.`,
    },
]

const projects = [
    {
        title: `LIATI`,
        subtitle: `Fashion & Narrative`,
        description: `A digital narrative weaving personal journey with fashion brand storytelling. An exploration of identity through fabric and code.`,
        image: `/projects/liati.png`,
        href: `https://liati.ca`,
        year: `2025`,
    },
    {
        title: `CtrlAltRandom`,
        subtitle: `Technology & Culture`,
        description: `A tech podcast diving into random topics—from groundbreaking innovations to quirky gadgets. Candid conversations about the digital world.`,
        image: `/projects/ctrlaltrandom.png`,
        href: `https://ctrlaltrandom.com`,
        year: `2025`,
    },
]

export default function EditorialDesign() {
    return (
        <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a]">
            {/* Custom Fonts - Using elegant serif and sans */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');

                .font-serif-editorial {
                    font-family: 'Cormorant Garamond', Georgia, serif;
                }
                .font-sans-editorial {
                    font-family: 'Outfit', -apple-system, sans-serif;
                }
            `}</style>

            {/* Fixed Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f0]/95 backdrop-blur-sm border-b border-[#1a1a1a]/10">
                <div className="max-w-6xl mx-auto px-6 sm:px-10">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        <span className="font-serif-editorial text-2xl sm:text-3xl font-semibold tracking-tight">
                            Vincent Wilkie
                        </span>
                        <div className="flex gap-8 font-sans-editorial text-sm tracking-wide">
                            <a href="#about" className="hidden sm:block text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">About</a>
                            <a href="#work" className="hidden sm:block text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">Work</a>
                            <a href="#contact" className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-6 sm:px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-4">
                                <p className="font-sans-editorial text-sm tracking-[0.3em] uppercase text-[#c9a227]">
                                    Full Stack Developer
                                </p>
                                <h1 className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.95] tracking-tight">
                                    Crafting Digital
                                    <br />
                                    <em className="text-[#c9a227]">Experiences</em>
                                </h1>
                            </div>
                            <p className="font-sans-editorial text-lg sm:text-xl text-[#1a1a1a]/70 leading-relaxed max-w-xl">
                                I build delightful web experiences from the ground up—combining pragmatic solutions
                                with clean design and steady iteration.
                            </p>
                        </div>

                        {/* Profile Image */}
                        <div className="lg:col-span-5">
                            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                                <div className="absolute -inset-4 border border-[#c9a227]/30" />
                                <div className="absolute inset-0 bg-[#c9a227]/5" />
                                <Image
                                    src="/vincent-wilkie-profile-picture.png"
                                    alt="Vincent Wilkie"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="h-px bg-[#1a1a1a]/10" />
            </div>

            {/* About Section */}
            <section id="about" className="py-20 sm:py-32 px-6 sm:px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Section Label */}
                        <div className="lg:col-span-3">
                            <p className="font-sans-editorial text-sm tracking-[0.3em] uppercase text-[#c9a227] sticky top-24">
                                Expertise
                            </p>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-9 space-y-12">
                            {expertise.map((item, i) => (
                                <div
                                    key={item.title}
                                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 group"
                                >
                                    <div className="sm:col-span-1 font-sans-editorial text-sm text-[#1a1a1a]/40">
                                        0{i + 1}
                                    </div>
                                    <div className="sm:col-span-4">
                                        <h3 className="font-serif-editorial text-2xl sm:text-3xl font-medium group-hover:text-[#c9a227] transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="sm:col-span-7">
                                        <p className="font-sans-editorial text-[#1a1a1a]/70 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="h-px bg-[#1a1a1a]/10" />
            </div>

            {/* Projects Section */}
            <section id="work" className="py-20 sm:py-32 px-6 sm:px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Section Label */}
                        <div className="lg:col-span-3">
                            <p className="font-sans-editorial text-sm tracking-[0.3em] uppercase text-[#c9a227] sticky top-24">
                                Selected Work
                            </p>
                        </div>

                        {/* Projects */}
                        <div className="lg:col-span-9 space-y-20">
                            {projects.map((project) => (
                                <Link
                                    key={project.title}
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <article className="space-y-6">
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]/5">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-[#c9a227]/0 group-hover:bg-[#c9a227]/5 transition-colors" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-4">
                                                    <h3 className="font-serif-editorial text-3xl sm:text-4xl font-medium group-hover:text-[#c9a227] transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    <span className="font-sans-editorial text-sm text-[#1a1a1a]/40">
                                                        {project.year}
                                                    </span>
                                                </div>
                                                <p className="font-sans-editorial text-sm tracking-wide uppercase text-[#1a1a1a]/50">
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                            <p className="font-sans-editorial text-[#1a1a1a]/70 leading-relaxed max-w-md">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* View Link */}
                                        <div className="flex items-center gap-2 font-sans-editorial text-sm tracking-wide text-[#c9a227] group-hover:gap-4 transition-all">
                                            <span>View Project</span>
                                            <span className="text-lg">→</span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="h-px bg-[#1a1a1a]/10" />
            </div>

            {/* Contact Section */}
            <section id="contact" className="py-20 sm:py-32 px-6 sm:px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Section Label */}
                        <div className="lg:col-span-3">
                            <p className="font-sans-editorial text-sm tracking-[0.3em] uppercase text-[#c9a227] sticky top-24">
                                Get in Touch
                            </p>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-9">
                            <div className="space-y-12">
                                <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
                                    Let&apos;s create something
                                    <br />
                                    <em className="text-[#c9a227]">extraordinary</em> together.
                                </h2>

                                <div className="space-y-4">
                                    {links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            target={link.href.startsWith(`http`) ? `_blank` : undefined}
                                            rel={link.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                                            className="group flex items-baseline justify-between py-4 border-b border-[#1a1a1a]/10 hover:border-[#c9a227] transition-colors"
                                        >
                                            <span className="font-sans-editorial text-sm tracking-wide uppercase text-[#1a1a1a]/50 group-hover:text-[#c9a227] transition-colors">
                                                {link.label}
                                            </span>
                                            <span className="font-serif-editorial text-lg sm:text-xl group-hover:text-[#c9a227] transition-colors">
                                                {link.display}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 sm:px-10 border-t border-[#1a1a1a]/10">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <span className="font-serif-editorial text-xl font-medium">
                        Vincent Wilkie
                    </span>
                    <span className="font-sans-editorial text-sm text-[#1a1a1a]/50">
                        © {new Date().getFullYear()} All rights reserved.
                    </span>
                    <Link
                        href="/testing"
                        className="font-sans-editorial text-sm tracking-wide text-[#c9a227] hover:text-[#1a1a1a] transition-colors flex items-center gap-2"
                    >
                        ← Back to designs
                    </Link>
                </div>
            </footer>
        </div>
    )
}


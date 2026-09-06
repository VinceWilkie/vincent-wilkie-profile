"use client"

import Link from "next/link"
import { links, skills, projects } from "@/data/profile"

const stats = [
    { value: `14+`, label: `Years shipping` },
    { value: `4`, label: `Core domains` },
    { value: `AWS`, label: `Cloud native` },
    { value: `2`, label: `Live side projects` },
]

export default function PrecisionPage() {
    return (
        <div className="min-h-screen bg-[#08090A] text-[#EDEDEF] antialiased selection:bg-indigo-500/30">
            {/* Ambient light */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
                        backgroundSize: `64px 64px`,
                        maskImage: `radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)`,
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-5xl px-6">
                {/* Nav */}
                <nav className="flex items-center justify-between py-6">
                    <span className="font-mono text-sm tracking-tight text-white">
                        vw<span className="text-indigo-400">.</span>
                    </span>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        <span className="text-xs text-white/60">Available for work</span>
                    </div>
                </nav>

                {/* Hero */}
                <header className="pb-20 pt-24">
                    <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400/80">
                        Full-stack engineer · Ontario, CA
                    </p>
                    <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
                        I build software that
                        <span className="text-white/40"> holds up under load</span>
                        <span className="text-indigo-400">.</span>
                    </h1>
                    <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/50">
                        Fourteen years across frontend, backend, and cloud infrastructure — turning
                        legacy systems into things teams can actually move fast on.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <a
                            href="https://wilkieindustries.ca"
                            className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
                        >
                            Hire me for a project
                            <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </a>
                        <a
                            href="mailto:vincentwilkie@hotmail.com"
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
                        >
                            Get in touch
                        </a>
                    </div>
                </header>

                {/* Stats */}
                <section className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-[#0A0B0D] px-5 py-6">
                            <div className="font-mono text-2xl tracking-tight text-white">{s.value}</div>
                            <div className="mt-1 text-xs text-white/40">{s.label}</div>
                        </div>
                    ))}
                </section>

                {/* Capabilities */}
                <section className="py-24">
                    <SectionLabel index="01" title="Capabilities" />
                    <div className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
                        {skills.map((skill) => (
                            <div key={skill.name} className="group grid gap-4 py-7 sm:grid-cols-[220px_1fr]">
                                <div>
                                    <h3 className="font-medium tracking-tight text-white">{skill.name}</h3>
                                    <span className="font-mono text-xs text-indigo-400/70">{skill.years}</span>
                                </div>
                                <div>
                                    <p className="text-[15px] leading-relaxed text-white/50">{skill.narrative}</p>
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {skill.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-white/45 transition group-hover:border-white/[0.12] group-hover:text-white/60"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="pb-24">
                    <SectionLabel index="02" title="Selected work" />
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {projects.map((p) => (
                            <a
                                key={p.name}
                                href={p.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-medium tracking-tight text-white">{p.name}</h3>
                                    <span className="rounded border border-amber-500/20 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] text-amber-400/90">
                                        {p.status}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-white/45">{p.description}</p>
                                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-white/30 transition group-hover:text-indigo-400">
                                    {p.url.replace(`https://`, ``)}
                                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section className="pb-24">
                    <SectionLabel index="03" title="Elsewhere" />
                    <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className="group bg-[#0A0B0D] px-5 py-5 transition hover:bg-[#0E0F12]"
                            >
                                <div className="font-mono text-[11px] uppercase tracking-wider text-white/30">
                                    {l.label}
                                </div>
                                <div className="mt-1.5 truncate text-sm text-white/70 transition group-hover:text-indigo-400">
                                    {l.value}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <footer className="flex items-center justify-between border-t border-white/[0.07] py-8 font-mono text-xs text-white/25">
                    <span>© {new Date().getFullYear()} Vincent Wilkie</span>
                    <Link href="/testing" className="transition hover:text-white/60">
                        ← design lab
                    </Link>
                </footer>
            </div>
        </div>
    )
}

function SectionLabel({ index, title }: { index: string; title: string }) {
    return (
        <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-indigo-400/60">{index}</span>
            <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-white/70">{title}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
    )
}

"use client"

import Link from "next/link"
import { links, skills, projects } from "@/data/profile"

const glass = `rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl`

export default function AuroraPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050510] text-white antialiased">
            <style>{`
                @keyframes drift-a { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,-40px) scale(1.15); } }
                @keyframes drift-b { 0%,100% { transform: translate(0,0) scale(1.1); } 50% { transform: translate(-70px,50px) scale(0.95); } }
                @keyframes drift-c { 0%,100% { transform: translate(0,0) scale(0.95); } 50% { transform: translate(40px,60px) scale(1.2); } }
                .blob-a { animation: drift-a 18s ease-in-out infinite; }
                .blob-b { animation: drift-b 22s ease-in-out infinite; }
                .blob-c { animation: drift-c 26s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .blob-a, .blob-b, .blob-c { animation: none; }
                }
            `}</style>

            {/* Aurora field */}
            <div className="pointer-events-none fixed inset-0">
                <div className="blob-a absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-violet-600/30 blur-[130px]" />
                <div className="blob-b absolute right-0 top-24 h-[460px] w-[460px] rounded-full bg-sky-500/25 blur-[130px]" />
                <div className="blob-c absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-600/20 blur-[130px]" />
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                        backgroundSize: `32px 32px`,
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 py-10 sm:py-16">
                {/* Nav */}
                <nav className={`${glass} mb-16 flex items-center justify-between px-5 py-3`}>
                    <span className="text-sm font-semibold tracking-tight">Vincent Wilkie</span>
                    <a
                        href="https://wilkieindustries.ca"
                        className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-white/85"
                    >
                        Work with me
                    </a>
                </nav>

                {/* Hero */}
                <header className="text-center">
                    <span className={`${glass} inline-flex items-center gap-2 px-3.5 py-1.5 text-xs text-white/70`}>
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Available for new projects
                    </span>

                    <h1 className="mx-auto mt-8 max-w-3xl text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-[1.03] tracking-[-0.04em]">
                        <span className="bg-gradient-to-br from-white via-white to-violet-300 bg-clip-text text-transparent">
                            Fourteen years of
                        </span>
                        <br />
                        <span className="bg-gradient-to-br from-sky-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                            shipping software
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/55">
                        Full-stack engineer building interfaces people enjoy, backends that hold up,
                        and cloud infrastructure that stays quiet.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <a
                            href="https://wilkieindustries.ca"
                            className="group rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                        >
                            Start a project
                            <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="mailto:vincentwilkie@hotmail.com"
                            className={`${glass} px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/[0.09]`}
                        >
                            Say hello
                        </a>
                    </div>
                </header>

                {/* Skills */}
                <section className="mt-28">
                    <SectionHead eyebrow="Capabilities" title="What I bring to a build" />
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {skills.map((skill, i) => (
                            <div key={skill.name} className={`${glass} group p-6 transition hover:bg-white/[0.07]`}>
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`bg-gradient-to-r bg-clip-text text-sm font-semibold text-transparent ${
                                            [
                                                `from-sky-300 to-cyan-200`,
                                                `from-violet-300 to-purple-200`,
                                                `from-fuchsia-300 to-pink-200`,
                                                `from-amber-200 to-orange-200`,
                                            ][i % 4]
                                        }`}
                                    >
                                        {skill.name}
                                    </span>
                                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/60">
                                        {skill.years}
                                    </span>
                                </div>
                                <p className="mt-3 text-sm font-medium text-white/90">{skill.tagline}</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/50">{skill.narrative}</p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {skill.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/45"
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
                <section className="mt-24">
                    <SectionHead eyebrow="Selected work" title="Things I've been making" />
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {projects.map((p) => (
                            <a
                                key={p.name}
                                href={p.url}
                                target="_blank"
                                rel="noreferrer"
                                className={`${glass} group overflow-hidden p-7 transition hover:bg-white/[0.08]`}
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                                    <span className="rounded-full border border-amber-300/25 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-200">
                                        {p.status}
                                    </span>
                                </div>
                                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{p.description}</p>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/40 transition group-hover:text-sky-300">
                                    {p.url.replace(`https://`, ``)}
                                    <span className="transition-transform group-hover:translate-x-1">↗</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Workshop CTA */}
                <section className="mt-24">
                    <a
                        href="https://wilkieindustries.ca"
                        className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/25 via-sky-600/15 to-transparent p-10 text-center backdrop-blur-xl transition hover:border-white/25 sm:p-14"
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Software workshop</p>
                        <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Wilkie Industries
                        </h3>
                        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
                            Need something built properly? Web apps, APIs, and cloud architecture —
                            contract and consulting work.
                        </p>
                        <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
                            Visit the workshop
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </a>
                </section>

                {/* Contact */}
                <section className="mt-24">
                    <SectionHead eyebrow="Elsewhere" title="Find me around the web" />
                    <div className="mt-10 grid gap-3 sm:grid-cols-3">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className={`${glass} group px-4 py-4 transition hover:bg-white/[0.09]`}
                            >
                                <div className="text-[11px] uppercase tracking-widest text-white/35">{l.label}</div>
                                <div className="mt-1 truncate text-sm text-white/75 transition group-hover:text-white">
                                    {l.value}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <footer className="mt-20 flex items-center justify-between border-t border-white/10 py-8 text-xs text-white/30">
                    <span>© {new Date().getFullYear()} Vincent Wilkie</span>
                    <Link href="/testing" className="transition hover:text-white/70">
                        ← design lab
                    </Link>
                </footer>
            </div>
        </div>
    )
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        </div>
    )
}

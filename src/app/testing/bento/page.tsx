"use client"

import Link from "next/link"
import { experience, links, skills, projects } from "@/data/profile"

const tile = `rounded-2xl border border-white/[0.08] bg-[#141417] p-6 transition duration-300 hover:border-white/[0.16] hover:bg-[#18181c]`

export default function BentoPage() {
    return (
        <div className="min-h-screen bg-[#0B0B0D] px-4 py-10 text-zinc-200 antialiased sm:px-6 sm:py-14">
            <div className="mx-auto max-w-6xl">
                {/* Grid */}
                <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Identity — hero tile */}
                    <div className={`${tile} relative overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2`}>
                        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />
                        <div className="relative flex h-full flex-col">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 font-semibold text-black">
                                    VW
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    <span className="text-[11px] font-medium text-emerald-400">Open to work</span>
                                </div>
                            </div>

                            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                                Vincent
                                <br />
                                Wilkie
                            </h1>
                            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-zinc-400">
                                Full-stack engineer who turns tangled systems into products that
                                ship. Frontend craft, backend rigour, cloud that stays up.
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2 pt-8">
                                <a
                                    href="https://wilkieindustries.ca"
                                    className="rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
                                >
                                    Work with me →
                                </a>
                                <a
                                    href="mailto:vincentwilkie@hotmail.com"
                                    className="rounded-lg border border-white/10 px-3.5 py-2 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"
                                >
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Big stat */}
                    <div className={`${tile} flex flex-col justify-between lg:row-span-1`}>
                        <span className="text-xs uppercase tracking-widest text-zinc-500">Experience</span>
                        <div>
                            <div className="text-5xl font-semibold tracking-tight text-white">
                                {experience.years}
                            </div>
                            <div className="mt-1 text-sm text-zinc-400">years building for the web</div>
                        </div>
                    </div>

                    {/* Location / availability */}
                    <div className={`${tile} flex flex-col justify-between`}>
                        <span className="text-xs uppercase tracking-widest text-zinc-500">Based in</span>
                        <div>
                            <div className="text-2xl font-semibold tracking-tight text-white">Ontario</div>
                            <div className="mt-1 text-sm text-zinc-400">Canada · remote-friendly</div>
                        </div>
                    </div>

                    {/* Skill tiles */}
                    {skills.map((skill, i) => (
                        <div key={skill.name} className={tile}>
                            <div className="flex items-start justify-between">
                                <span
                                    className={`text-xs font-medium uppercase tracking-widest ${
                                        [`text-teal-400`, `text-sky-400`, `text-violet-400`, `text-amber-400`][i % 4]
                                    }`}
                                >
                                    {skill.name}
                                </span>
                                <span className="font-mono text-[11px] text-zinc-600">{skill.years}</span>
                            </div>
                            <p className="mt-3 text-sm font-medium text-white">{skill.tagline}</p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {skill.tools.slice(0, 5).map((tool) => (
                                    <span
                                        key={tool}
                                        className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] text-zinc-400"
                                    >
                                        {tool}
                                    </span>
                                ))}
                                {skill.tools.length > 5 && (
                                    <span className="rounded-md px-2 py-1 text-[11px] text-zinc-600">
                                        +{skill.tools.length - 5}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Projects */}
                    {projects.map((p) => (
                        <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`${tile} group flex flex-col`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs uppercase tracking-widest text-zinc-500">Project</span>
                                <span className="rounded bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] text-amber-400">
                                    {p.status}
                                </span>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{p.name}</h3>
                            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                            <span className="mt-4 font-mono text-xs text-zinc-600 transition group-hover:text-teal-400">
                                {p.url.replace(`https://`, ``)} ↗
                            </span>
                        </a>
                    ))}

                    {/* Wilkie Industries callout */}
                    <a
                        href="https://wilkieindustries.ca"
                        className="group relative overflow-hidden rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-emerald-600/5 p-6 transition hover:border-teal-500/40 sm:col-span-2"
                    >
                        <span className="text-xs uppercase tracking-widest text-teal-400/70">Software workshop</span>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                            Wilkie Industries
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                            Need something built? My development workshop takes on contract and
                            consulting work — web apps, APIs, cloud infrastructure.
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-teal-400">
                            wilkieindustries.ca{` `}
                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </a>

                    {/* Contact links */}
                    <div className={`${tile} sm:col-span-2`}>
                        <span className="text-xs uppercase tracking-widest text-zinc-500">Elsewhere</span>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                            {links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    className="group flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2.5 transition hover:bg-white/[0.08]"
                                >
                                    <span className="text-xs capitalize text-zinc-500">{l.label}</span>
                                    <span className="truncate pl-2 text-xs text-zinc-300 transition group-hover:text-white">
                                        {l.value}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="mt-8 flex items-center justify-between text-xs text-zinc-600">
                    <span>© {new Date().getFullYear()} Vincent Wilkie</span>
                    <Link href="/testing" className="transition hover:text-zinc-300">
                        ← design lab
                    </Link>
                </footer>
            </div>
        </div>
    )
}

"use client"

import Link from "next/link"
import { useState } from "react"
import { experience, links, skills, projects } from "@/data/profile"

const NAV = [
    { id: `overview`, label: `Overview`, icon: `▤` },
    { id: `capabilities`, label: `Capabilities`, icon: `◈` },
    { id: `projects`, label: `Projects`, icon: `◆` },
    { id: `contact`, label: `Contact`, icon: `✉` },
]

/**
 * The "Console" profile design — a product-UI take on a personal profile.
 *
 * Rendered both as the live homepage and inside the (dev-only) design lab,
 * so the two can never drift apart. `showLabLink` is what distinguishes them.
 */
export default function ConsoleProfile({ showLabLink = false }: { showLabLink?: boolean }) {
    const [active, setActive] = useState(`overview`)

    return (
        <div className="min-h-screen bg-[#0A0A0B] font-[family-name:var(--font-roboto-sans)] text-zinc-300 antialiased">
            {/* Top bar */}
            <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-white/[0.07] bg-[#0A0A0B]/90 px-4 backdrop-blur sm:px-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-teal-600 text-[11px] font-bold text-black">
                        VW
                    </div>
                    <nav className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                        <span className="text-zinc-300">vincent-wilkie</span>
                        <span className="text-zinc-700">/</span>
                        <span>profile</span>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <span className="hidden items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-[11px] text-emerald-400 sm:flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        available
                    </span>
                    <a
                        href="https://wilkieindustries.ca"
                        className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-zinc-200"
                    >
                        Hire →
                    </a>
                </div>
            </header>

            <div className="mx-auto flex max-w-7xl">
                {/* Sidebar */}
                <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r border-white/[0.07] p-4 lg:block">
                    <p className="mb-3 px-2 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                        Navigation
                    </p>
                    <nav className="space-y-0.5">
                        {NAV.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setActive(item.id)}
                                className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition ${
                                    active === item.id
                                        ? `bg-white/[0.07] text-white`
                                        : `text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-300`
                                }`}
                            >
                                <span className="text-xs text-emerald-500/70">{item.icon}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-6 rounded-lg border border-white/[0.07] bg-white/[0.02] p-3">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Uptime</p>
                        <p className="mt-1.5 font-mono text-lg text-white">{experience.years} yrs</p>
                        <div className="mt-2 flex gap-0.5">
                            {Array.from({ length: 28 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-6 flex-1 rounded-[1px] ${
                                        i > 24 ? `bg-emerald-400` : `bg-emerald-500/40`
                                    }`}
                                />
                            ))}
                        </div>
                        <p className="mt-2 font-mono text-[10px] text-zinc-600">no unplanned outages</p>
                    </div>
                </aside>

                {/* Main */}
                <main className="min-w-0 flex-1 px-4 py-8 sm:px-8">
                    {/* Overview */}
                    <section id="overview" className="scroll-mt-20">
                        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Vincent Wilkie
                        </h1>
                        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                            Full-stack engineer. I design, build, and operate web systems end to
                            end — interface through infrastructure.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                            <Metric
                                label="Experience"
                                value={`${experience.years}y`}
                                trend="frontend · backend · cloud"
                            />
                            <Metric
                                label="Since"
                                value={String(experience.startYear)}
                                trend="first production ship"
                            />
                            <Metric label="Domains" value="4" trend="full lifecycle" />
                            <Metric label="Region" value="ON, CA" trend="remote-friendly" />
                        </div>
                    </section>

                    {/* Capabilities */}
                    <section id="capabilities" className="mt-14 scroll-mt-20">
                        <PanelHeader title="Capabilities" meta={`${skills.length} services`} />
                        <div className="overflow-hidden rounded-lg border border-white/[0.07]">
                            {skills.map((skill, i) => (
                                <details
                                    key={skill.name}
                                    open={i === 0}
                                    className="group border-b border-white/[0.07] last:border-0"
                                >
                                    <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3.5 transition hover:bg-white/[0.03]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                        <span className="flex-1 text-sm font-medium text-white">{skill.name}</span>
                                        <span className="hidden font-mono text-xs text-zinc-500 sm:inline">
                                            {skill.tagline}
                                        </span>
                                        <span className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                                            {skill.years}
                                        </span>
                                        <span className="font-mono text-xs text-zinc-600 transition group-open:rotate-90">
                                            ›
                                        </span>
                                    </summary>
                                    <div className="border-t border-white/[0.07] bg-white/[0.015] px-4 py-4 pl-[2.15rem]">
                                        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
                                            {skill.narrative}
                                        </p>
                                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                                            {skill.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="rounded border border-white/[0.07] bg-white/[0.03] px-1.5 py-0.5 font-mono text-[11px] text-zinc-400"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section id="projects" className="mt-14 scroll-mt-20">
                        <PanelHeader title="Projects" meta={`${projects.length} repositories`} />
                        <div className="grid gap-3 sm:grid-cols-2">
                            {projects.map((p) => (
                                <a
                                    key={p.name}
                                    href={p.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group rounded-lg border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-sm text-white">{p.name}</span>
                                        <span className="rounded bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] text-amber-400">
                                            {p.status}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                                    <p className="mt-3 font-mono text-[11px] text-zinc-600 transition group-hover:text-emerald-400">
                                        {p.url.replace(`https://`, ``)} ↗
                                    </p>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="mt-14 scroll-mt-20">
                        <PanelHeader title="Contact" meta="all channels" />
                        <div className="overflow-hidden rounded-lg border border-white/[0.07] font-mono text-sm">
                            {links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    className="flex items-center gap-4 border-b border-white/[0.07] px-4 py-2.5 transition last:border-0 hover:bg-white/[0.04]"
                                >
                                    <span className="w-20 shrink-0 text-[11px] uppercase tracking-wider text-zinc-600">
                                        {l.label}
                                    </span>
                                    <span className="truncate text-zinc-300">{l.value}</span>
                                </a>
                            ))}
                        </div>

                        <a
                            href="https://wilkieindustries.ca"
                            className="group mt-3 flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/[0.07] p-4 transition hover:border-emerald-500/40"
                        >
                            <div>
                                <p className="text-sm font-medium text-white">Wilkie Industries</p>
                                <p className="mt-0.5 text-xs text-zinc-400">
                                    My software workshop — contract &amp; consulting enquiries
                                </p>
                            </div>
                            <span className="font-mono text-emerald-400 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </section>

                    <footer className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[11px] text-zinc-600">
                        <span>© {new Date().getFullYear()} Vincent Wilkie</span>
                        {showLabLink ? (
                            <Link href="/testing" className="transition hover:text-zinc-300">
                                ← design lab
                            </Link>
                        ) : (
                            <a
                                href="https://wilkieindustries.ca"
                                className="transition hover:text-emerald-400"
                            >
                                wilkieindustries.ca ↗
                            </a>
                        )}
                    </footer>
                </main>
            </div>
        </div>
    )
}

function Metric({ label, value, trend }: { label: string; value: string; trend: string }) {
    return (
        <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">{label}</p>
            <p className="mt-1.5 text-2xl font-semibold tracking-tight text-white">{value}</p>
            <p className="mt-0.5 truncate text-[11px] text-zinc-500">{trend}</p>
        </div>
    )
}

function PanelHeader({ title, meta }: { title: string; meta: string }) {
    return (
        <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-medium text-white">{title}</h2>
            <span className="font-mono text-[11px] text-zinc-600">{meta}</span>
        </div>
    )
}

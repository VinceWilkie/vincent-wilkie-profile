"use client"

import Link from "next/link"
import { links, skills, projects } from "@/data/profile"

const RULE = `border-t border-neutral-300`

export default function SpecSheetPage() {
    return (
        <div className="min-h-screen bg-[#F7F6F3] text-neutral-900 antialiased selection:bg-orange-600 selection:text-white">
            <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-16">
                {/* Masthead */}
                <header className={`${RULE} border-t-2 border-neutral-900 pt-4`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                        <span>Vincent Wilkie — Engineering Profile</span>
                        <span>Rev. {new Date().getFullYear()} / Ontario, CA</span>
                    </div>

                    <h1 className="mt-12 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                        Software built
                        <br />
                        with intent<span className="text-orange-600">.</span>
                    </h1>

                    <div className="mt-12 grid gap-8 sm:grid-cols-[1fr_320px]">
                        <p className="max-w-lg text-lg leading-relaxed text-neutral-700">
                            Fourteen years of full-stack engineering — frontend interfaces people
                            enjoy, backends that hold up, and cloud infrastructure that stays quiet.
                            I take tangled legacy systems and make them boring again.
                        </p>
                        <dl className="space-y-2 font-mono text-[11px] uppercase tracking-wider">
                            <SpecRow label="Discipline" value="Full-stack" />
                            <SpecRow label="Experience" value="14 years" />
                            <SpecRow label="Focus" value="Web · Cloud" />
                            <SpecRow label="Status" value="Available" accent />
                        </dl>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <a
                            href="https://wilkieindustries.ca"
                            className="bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
                        >
                            Commission a project →
                        </a>
                        <a
                            href="mailto:vincentwilkie@hotmail.com"
                            className="border border-neutral-400 px-5 py-3 text-sm transition hover:border-neutral-900"
                        >
                            vincentwilkie@hotmail.com
                        </a>
                    </div>
                </header>

                {/* Capabilities */}
                <Section number="01" title="Capabilities">
                    <div className="divide-y divide-neutral-300">
                        {skills.map((skill, i) => (
                            <article key={skill.name} className="grid gap-5 py-8 sm:grid-cols-[80px_240px_1fr]">
                                <span className="font-mono text-xs text-orange-600">
                                    {String(i + 1).padStart(2, `0`)}
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold tracking-tight">{skill.name}</h3>
                                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                                        {skill.years}
                                    </p>
                                    <p className="mt-2 text-sm italic text-neutral-600">{skill.tagline}</p>
                                </div>
                                <div>
                                    <p className="text-[15px] leading-relaxed text-neutral-700">{skill.narrative}</p>
                                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-neutral-500">
                                        {skill.tools.map((tool) => (
                                            <li key={tool} className="before:mr-1.5 before:text-orange-600 before:content-['/']">
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </Section>

                {/* Projects */}
                <Section number="02" title="Selected Work">
                    <div className="grid gap-px bg-neutral-300 sm:grid-cols-2">
                        {projects.map((p) => (
                            <a
                                key={p.name}
                                href={p.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-[#F7F6F3] p-8 transition hover:bg-white"
                            >
                                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
                                    <span className="text-neutral-500">{p.url.replace(`https://`, ``)}</span>
                                    <span className="text-orange-600">{p.status}</span>
                                </div>
                                <h3 className="mt-5 text-3xl font-semibold tracking-tight lowercase">{p.name}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">{p.description}</p>
                                <span className="mt-6 inline-block text-sm font-medium underline decoration-orange-600 decoration-2 underline-offset-4">
                                    View project
                                </span>
                            </a>
                        ))}
                    </div>
                </Section>

                {/* Workshop */}
                <Section number="03" title="The Workshop">
                    <a
                        href="https://wilkieindustries.ca"
                        className="group block border-2 border-neutral-900 p-8 transition hover:bg-neutral-900 hover:text-white sm:p-12"
                    >
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-400">
                                    Contract & consulting
                                </p>
                                <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                                    Wilkie Industries
                                </h3>
                                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600 group-hover:text-neutral-300">
                                    My software development workshop. Web applications, APIs, cloud
                                    architecture, and rescuing systems nobody wants to touch.
                                </p>
                            </div>
                            <span className="text-5xl text-orange-600 transition-transform group-hover:translate-x-2">
                                →
                            </span>
                        </div>
                    </a>
                </Section>

                {/* Contact */}
                <Section number="04" title="Contact">
                    <dl className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className="group flex items-baseline justify-between border-b border-neutral-300 py-4 transition hover:border-neutral-900"
                            >
                                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                                    {l.label}
                                </dt>
                                <dd className="text-sm transition group-hover:text-orange-600">{l.value}</dd>
                            </a>
                        ))}
                    </dl>
                </Section>

                <footer className="mt-20 flex items-center justify-between border-t-2 border-neutral-900 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    <span>© {new Date().getFullYear()} Vincent Wilkie</span>
                    <Link href="/testing" className="transition hover:text-orange-600">
                        ← design lab
                    </Link>
                </footer>
            </div>
        </div>
    )
}

function Section({
    number,
    title,
    children,
}: {
    number: string
    title: string
    children: React.ReactNode
}) {
    return (
        <section className="mt-20">
            <div className="flex items-baseline gap-4 border-t-2 border-neutral-900 pt-4">
                <span className="font-mono text-[11px] text-orange-600">{number}</span>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em]">{title}</h2>
            </div>
            <div className="mt-8">{children}</div>
        </section>
    )
}

function SpecRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
    return (
        <div className="flex justify-between border-b border-neutral-300 pb-2">
            <dt className="text-neutral-500">{label}</dt>
            <dd className={accent ? `text-orange-600` : `text-neutral-900`}>{value}</dd>
        </div>
    )
}

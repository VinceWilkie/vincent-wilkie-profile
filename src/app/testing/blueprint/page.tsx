"use client"

import Image from "next/image"
import Link from "next/link"

const BLUEPRINT_BLUE = `#4a9eff`

const skills = [
    {
        label: `Frontend`,
        items: [`React`, `Vue`, `Angular`, `TypeScript`, `SCSS`, `Tailwind CSS`, `Ionic`],
    },
    {
        label: `Backend & Data`,
        items: [`Node.js`, `Express`, `PHP`, `Python`, `MySQL`, `NoSQL`, `REST APIs`],
    },
    {
        label: `Cloud & Infrastructure`,
        items: [`AWS EC2/Lambda/S3/RDS`, `CloudFormation`, `SQS/SNS`, `CI/CD`],
    },
    {
        label: `Full Stack Leadership`,
        items: [`Architecture`, `Legacy Modernization`, `Cross-Platform`, `Mentoring`],
    },
]

const projects = [
    {
        name: `liati`,
        version: `v0.1-dev`,
        url: `https://liati.ca`,
        description: `Digital narrative + fashion brand`,
        status: `IN_DEV`,
        image: `/projects/liati.png`,
    },
    {
        name: `ctrlaltrandom`,
        version: `v0.1-dev`,
        url: `https://ctrlaltrandom.com`,
        description: `Tech podcast`,
        status: `IN_DEV`,
        image: `/projects/ctrlaltrandom.png`,
    },
]

const contacts = [
    { label: `PHONE`, value: `+1-289-698-4004`, href: `tel:+12896984004`, protocol: `TEL` },
    { label: `EMAIL`, value: `vincentwilkie@hotmail.com`, href: `mailto:vincentwilkie@hotmail.com`, protocol: `SMTP` },
    { label: `LINKEDIN`, value: `/in/vdubworkshop`, href: `https://linkedin.com/in/vdubworkshop`, protocol: `HTTPS` },
    { label: `GITHUB`, value: `VinceWilkie`, href: `https://github.com/VinceWilkie`, protocol: `HTTPS` },
    { label: `TWITTER`, value: `@vincentwilkie`, href: `https://twitter.com/vincentwilkie`, protocol: `HTTPS` },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.3em] uppercase text-[#4a9eff]">
                    {children}
                </span>
                <div className="flex-1 border-t border-dashed border-[#4a9eff]/40" />
            </div>
        </div>
    )
}

export default function BlueprintPage() {
    return (
        <div
            className="min-h-screen font-mono text-white"
            style={{
                backgroundColor: `#1a2744`,
                backgroundImage: [
                    `linear-gradient(rgba(74,158,255,0.1) 1px, transparent 1px)`,
                    `linear-gradient(90deg, rgba(74,158,255,0.1) 1px, transparent 1px)`,
                ].join(`, `),
                backgroundSize: `20px 20px`,
            }}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

                {/* ── Hero / Profile ── */}
                <section className="mb-16 sm:mb-24">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">

                        {/* Profile picture with crosshair */}
                        <div className="relative flex-shrink-0">
                            {/* Horizontal crosshair */}
                            <div
                                className="absolute top-1/2 -translate-y-px left-[-24px] right-[-24px] h-px"
                                style={{ backgroundColor: `${BLUEPRINT_BLUE}60` }}
                            />
                            {/* Vertical crosshair */}
                            <div
                                className="absolute left-1/2 -translate-x-px top-[-24px] bottom-[-24px] w-px"
                                style={{ backgroundColor: `${BLUEPRINT_BLUE}60` }}
                            />
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-dashed border-[#4a9eff] overflow-hidden relative">
                                <Image
                                    src="/vincent-wilkie-profile-picture.png"
                                    alt="Vincent Wilkie"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Corner dimension ticks */}
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-[#4a9eff]/60">
                                +
                            </span>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#4a9eff]/60">
                                +
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 -left-7 text-[10px] text-[#4a9eff]/60">
                                +
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 -right-7 text-[10px] text-[#4a9eff]/60">
                                +
                            </span>
                        </div>

                        {/* Name + title + dimension annotation */}
                        <div className="flex-1 text-center sm:text-left">
                            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                                Vincent Wilkie
                            </h1>
                            <p className="mt-2 text-lg sm:text-xl text-[#4a9eff]">
                                Full Stack Software Developer
                            </p>

                            {/* Dimension annotation */}
                            <div className="mt-4 flex items-center gap-2 justify-center sm:justify-start">
                                <span className="text-[10px] text-[#4a9eff]/70">{`◄`}</span>
                                <div className="border-t border-dashed border-[#4a9eff]/50 w-20 sm:w-28" />
                                <span className="text-[10px] text-[#4a9eff] tracking-wider">
                                    14y exp.
                                </span>
                                <div className="border-t border-dashed border-[#4a9eff]/50 w-20 sm:w-28" />
                                <span className="text-[10px] text-[#4a9eff]/70">{`►`}</span>
                            </div>

                            {/* Spec box */}
                            <div className="mt-6 border border-dashed border-[#4a9eff]/40 p-4 sm:p-6 relative">
                                <span className="absolute -top-2.5 left-3 bg-[#1a2744] px-2 text-[10px] tracking-[0.2em] text-[#4a9eff]/70 uppercase">
                                    SPEC: Developer Profile v2.0
                                </span>
                                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                                    Building delightful web experiences from scratch. 14+ years of
                                    pragmatic solutions, clean UX, and steady iteration across the
                                    full stack.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── System Architecture (Skills) ── */}
                <section className="mb-16 sm:mb-24">
                    <SectionTitle>System Architecture</SectionTitle>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px relative">
                        {/* Central spine — vertical connector */}
                        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-[#4a9eff]/30" />

                        {skills.map((category, i) => (
                            <div key={category.label} className="p-3 sm:p-4">
                                <div className="border border-dashed border-[#4a9eff]/40 p-4 sm:p-5 relative h-full">
                                    {/* Component label */}
                                    <span className="absolute -top-2.5 left-3 bg-[#1a2744] px-2 text-[10px] tracking-[0.2em] text-[#4a9eff] uppercase">
                                        {`COMPONENT ${String(i + 1).padStart(2, `0`)}: ${category.label}`}
                                    </span>

                                    {/* Port connector on left edge */}
                                    <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-[7px] w-3 h-3 rounded-full border border-[#4a9eff]/60 bg-[#1a2744]" />

                                    <ul className="mt-2 space-y-1.5">
                                        {category.items.map((item) => (
                                            <li
                                                key={item}
                                                className="text-xs sm:text-sm text-white/70 flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#4a9eff]/50 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bus line under components */}
                    <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 border-t border-dashed border-[#4a9eff]/30" />
                        <span className="text-[10px] text-[#4a9eff]/50 tracking-wider">
                            DATA BUS
                        </span>
                        <div className="flex-1 border-t border-dashed border-[#4a9eff]/30" />
                    </div>
                </section>

                {/* ── Deployed Modules (Projects) ── */}
                <section className="mb-16 sm:mb-24">
                    <SectionTitle>Deployed Modules</SectionTitle>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.name}
                                className="border border-dashed border-[#4a9eff]/40 p-4 sm:p-5 relative"
                            >
                                {/* Module label */}
                                <span className="absolute -top-2.5 left-3 bg-[#1a2744] px-2 text-[10px] tracking-[0.2em] text-[#4a9eff] uppercase">
                                    {`MODULE: ${project.name} ${project.version}`}
                                </span>

                                <div className="flex gap-4 mt-1">
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 border border-dashed border-[#4a9eff]/30 rounded overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm sm:text-base font-bold text-white">
                                            {project.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-white/60 mt-1">
                                            {project.description}
                                        </p>
                                        <Link
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] sm:text-xs text-[#4a9eff] hover:text-white transition-colors mt-1 inline-block"
                                        >
                                            {`→ ${project.url}`}
                                        </Link>
                                        <div className="mt-2">
                                            <span className="text-[10px] sm:text-xs tracking-wider text-amber-400">
                                                {`STATUS: ${project.status}`}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── I/O Interfaces (Contact) ── */}
                <section className="mb-16 sm:mb-24">
                    <SectionTitle>I/O Interfaces</SectionTitle>

                    <div className="border border-dashed border-[#4a9eff]/40 p-4 sm:p-6 relative">
                        <span className="absolute -top-2.5 left-3 bg-[#1a2744] px-2 text-[10px] tracking-[0.2em] text-[#4a9eff]/70 uppercase">
                            CONNECTION PANEL
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                            {contacts.map((contact) => (
                                <Link
                                    key={contact.label}
                                    href={contact.href}
                                    target={contact.protocol === `TEL` || contact.protocol === `SMTP` ? undefined : `_blank`}
                                    rel={contact.protocol === `HTTPS` ? `noopener noreferrer` : undefined}
                                    className="group flex items-center gap-3 p-3 border border-dashed border-[#4a9eff]/20 hover:border-[#4a9eff]/60 transition-colors rounded"
                                >
                                    {/* Port indicator */}
                                    <div className="w-3 h-3 rounded-full border-2 border-[#4a9eff]/60 group-hover:bg-[#4a9eff]/40 transition-colors flex-shrink-0" />
                                    <div className="min-w-0">
                                        <span className="block text-[10px] text-[#4a9eff]/60 tracking-wider">
                                            {`${contact.label} [${contact.protocol}]`}
                                        </span>
                                        <span className="block text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors truncate">
                                            {contact.value}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Footer ── */}
                <footer className="border-t border-dashed border-[#4a9eff]/30 pt-6 pb-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-[#4a9eff]/50 tracking-wider">
                        <span>DRAWING NO. VW-2024-001</span>
                        <span>SCALE: 1:1</span>
                        <span>SHEET 1 OF 1</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

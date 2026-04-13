"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const STATUS = {
    PASSED: `PASSED`,
    IN_PROGRESS: `IN_PROGRESS`,
    FAILED: `FAILED`,
} as const

type Status = (typeof STATUS)[keyof typeof STATUS]

interface SkillTest {
    name: string
    status: Status
}

interface SkillSuite {
    suite: string
    tests: SkillTest[]
}

interface Project {
    name: string
    url: string
    description: string
    image: string
    status: Status
}

interface ContactChannel {
    type: string
    label: string
    href: string
    icon: string
}

const BIO = `Full Stack Software Developer with 14+ years of experience architecting and delivering scalable web applications. Proven track record of leading frontend modernization efforts, designing cloud-native solutions on AWS, and mentoring cross-functional teams.`

const SKILL_SUITES: SkillSuite[] = [
    {
        suite: `Frontend`,
        tests: [
            { name: `React`, status: STATUS.PASSED },
            { name: `Vue`, status: STATUS.PASSED },
            { name: `Angular`, status: STATUS.PASSED },
            { name: `TypeScript`, status: STATUS.PASSED },
            { name: `SCSS`, status: STATUS.PASSED },
            { name: `Tailwind CSS`, status: STATUS.PASSED },
            { name: `Ionic`, status: STATUS.PASSED },
        ],
    },
    {
        suite: `Backend & Data`,
        tests: [
            { name: `Node.js`, status: STATUS.PASSED },
            { name: `Express`, status: STATUS.PASSED },
            { name: `PHP`, status: STATUS.PASSED },
            { name: `Python`, status: STATUS.PASSED },
            { name: `MySQL`, status: STATUS.PASSED },
            { name: `NoSQL`, status: STATUS.PASSED },
            { name: `REST APIs`, status: STATUS.PASSED },
        ],
    },
    {
        suite: `Cloud & Infrastructure`,
        tests: [
            { name: `AWS EC2`, status: STATUS.PASSED },
            { name: `AWS Lambda`, status: STATUS.PASSED },
            { name: `AWS S3`, status: STATUS.PASSED },
            { name: `AWS RDS`, status: STATUS.PASSED },
            { name: `CloudFormation`, status: STATUS.PASSED },
            { name: `SQS/SNS`, status: STATUS.PASSED },
            { name: `CI/CD`, status: STATUS.PASSED },
        ],
    },
    {
        suite: `Full Stack Leadership`,
        tests: [
            { name: `Architecture`, status: STATUS.PASSED },
            { name: `Legacy Modernization`, status: STATUS.PASSED },
            { name: `Cross-Platform`, status: STATUS.PASSED },
            { name: `Mentoring`, status: STATUS.PASSED },
            { name: `Code Review`, status: STATUS.PASSED },
            { name: `Agile/Scrum`, status: STATUS.PASSED },
            { name: `Technical Planning`, status: STATUS.PASSED },
        ],
    },
]

const PROJECTS: Project[] = [
    {
        name: `liati`,
        url: `https://liati.ca`,
        description: `Digital narrative + fashion brand`,
        image: `/projects/liati.png`,
        status: STATUS.IN_PROGRESS,
    },
    {
        name: `ctrlaltrandom`,
        url: `https://ctrlaltrandom.com`,
        description: `Tech podcast`,
        image: `/projects/ctrlaltrandom.png`,
        status: STATUS.IN_PROGRESS,
    },
]

const CONTACTS: ContactChannel[] = [
    {
        type: `phone`,
        label: `+1-289-698-4004`,
        href: `tel:+12896984004`,
        icon: `📞`,
    },
    {
        type: `email`,
        label: `vincentwilkie@hotmail.com`,
        href: `mailto:vincentwilkie@hotmail.com`,
        icon: `📧`,
    },
    {
        type: `linkedin`,
        label: `/in/vdubworkshop`,
        href: `https://linkedin.com/in/vdubworkshop`,
        icon: `💼`,
    },
    {
        type: `github`,
        label: `VinceWilkie`,
        href: `https://github.com/VinceWilkie`,
        icon: `🐙`,
    },
    {
        type: `twitter`,
        label: `@vincentwilkie`,
        href: `https://twitter.com/vincentwilkie`,
        icon: `🐦`,
    },
]

const TOTAL_TESTS = SKILL_SUITES.reduce((acc, s) => acc + s.tests.length, 0)

function timestamp(): string {
    const now = new Date()
    return now.toISOString().replace(`T`, ` `).slice(0, 19)
}

function StatusBadge({ status }: { status: Status }) {
    const colors: Record<Status, string> = {
        [STATUS.PASSED]: `bg-green-500/20 text-green-400 border-green-500/40`,
        [STATUS.IN_PROGRESS]: `bg-amber-500/20 text-amber-400 border-amber-500/40`,
        [STATUS.FAILED]: `bg-red-500/20 text-red-400 border-red-500/40`,
    }

    const labels: Record<Status, string> = {
        [STATUS.PASSED]: `passed`,
        [STATUS.IN_PROGRESS]: `running`,
        [STATUS.FAILED]: `failed`,
    }

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${colors[status]}`}
        >
            {status === STATUS.IN_PROGRESS && (
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            )}
            {status === STATUS.PASSED && (
                <span className="text-green-400">✓</span>
            )}
            {status === STATUS.FAILED && (
                <span className="text-red-400">✗</span>
            )}
            {labels[status]}
        </span>
    )
}

function StageHeader({
    name,
    status,
    duration,
    expanded,
    onToggle,
}: {
    name: string
    status: Status
    duration: string
    expanded: boolean
    onToggle: () => void
}) {
    const borderColor: Record<Status, string> = {
        [STATUS.PASSED]: `border-green-500/50`,
        [STATUS.IN_PROGRESS]: `border-amber-500/50`,
        [STATUS.FAILED]: `border-red-500/50`,
    }

    return (
        <button
            onClick={onToggle}
            className={`group flex w-full items-center gap-3 rounded border ${borderColor[status]} bg-[#111] px-4 py-3 text-left font-mono transition-colors hover:bg-[#1a1a1a]`}
        >
            <span className="text-neutral-500 transition-transform group-hover:text-neutral-300">
                {expanded ? `▼` : `▶`}
            </span>
            <span className="flex-1 text-sm text-neutral-200 sm:text-base">
                {name}
            </span>
            <span className="hidden text-xs text-neutral-500 sm:inline">
                {duration}
            </span>
            <StatusBadge status={status} />
        </button>
    )
}

function DashedConnector() {
    return (
        <div className="flex justify-center py-1">
            <div className="h-6 border-l-2 border-dashed border-neutral-700" />
        </div>
    )
}

function LogLine({
    time,
    children,
}: {
    time: string
    children: React.ReactNode
}) {
    return (
        <div className="flex gap-3 font-mono text-xs leading-relaxed sm:text-sm">
            <span className="shrink-0 text-neutral-600">{time}</span>
            <span className="text-neutral-300">{children}</span>
        </div>
    )
}

function StageBuildProfile({
    expanded,
}: {
    expanded: boolean
}) {
    if (!expanded) return null

    return (
        <div className="rounded-b border border-t-0 border-green-500/20 bg-[#0d0d0d] p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="relative mx-auto h-24 w-24 shrink-0 overflow-hidden rounded border border-green-500/30 sm:mx-0">
                    <Image
                        src="/vincent-wilkie-profile-picture.png"
                        alt="Vincent Wilkie"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 space-y-2">
                    <LogLine time="00:00:01">
                        <span className="text-green-400">[INFO]</span>{` `}
                        Building profile artifact...
                    </LogLine>
                    <LogLine time="00:00:02">
                        <span className="text-green-400">[INFO]</span>{` `}
                        name: <span className="text-white font-bold">Vincent Wilkie</span>
                    </LogLine>
                    <LogLine time="00:00:02">
                        <span className="text-green-400">[INFO]</span>{` `}
                        title: <span className="text-green-300">Full Stack Software Developer</span>
                    </LogLine>
                    <LogLine time="00:00:03">
                        <span className="text-green-400">[INFO]</span>{` `}
                        experience: <span className="text-green-300">14+ years</span>
                    </LogLine>
                    <LogLine time="00:00:04">
                        <span className="text-green-400">[INFO]</span>{` `}
                        bio: <span className="text-neutral-400">{BIO}</span>
                    </LogLine>
                    <LogLine time="00:00:05">
                        <span className="text-green-400">[OK]</span>{` `}
                        Profile artifact built successfully.
                    </LogLine>
                </div>
            </div>
        </div>
    )
}

function StageTestSkills({
    expanded,
}: {
    expanded: boolean
}) {
    if (!expanded) return null

    return (
        <div className="rounded-b border border-t-0 border-green-500/20 bg-[#0d0d0d] p-4 sm:p-6">
            <div className="space-y-4">
                {SKILL_SUITES.map((suite) => (
                    <div key={suite.suite}>
                        <div className="mb-2 font-mono text-xs text-neutral-500 sm:text-sm">
                            <span className="text-green-400">PASS</span>
                            {` `}./tests/{suite.suite.toLowerCase().replace(/ & /g, `-`).replace(/ /g, `-`)}.spec.ts
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-1 pl-4 sm:grid-cols-2 lg:grid-cols-3">
                            {suite.tests.map((test) => (
                                <div
                                    key={test.name}
                                    className="flex items-center gap-2 font-mono text-xs sm:text-sm"
                                >
                                    <span className="text-green-400">✓</span>
                                    <span className="text-neutral-300">
                                        {test.name}
                                    </span>
                                    <span className="text-neutral-600">
                                        ({Math.floor(Math.random() * 50 + 10)}ms)
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="mt-4 border-t border-neutral-800 pt-3 font-mono text-xs sm:text-sm">
                    <span className="text-green-400">Test Suites:</span>{` `}
                    <span className="text-green-300">{SKILL_SUITES.length} passed</span>,{` `}
                    {SKILL_SUITES.length} total
                    <br />
                    <span className="text-green-400">Tests:</span>{` `}
                    <span className="text-green-300">{TOTAL_TESTS} passed</span>,{` `}
                    0 failed, {TOTAL_TESTS} total
                </div>
            </div>
        </div>
    )
}

function StageDeployProjects({
    expanded,
}: {
    expanded: boolean
}) {
    if (!expanded) return null

    return (
        <div className="rounded-b border border-t-0 border-amber-500/20 bg-[#0d0d0d] p-4 sm:p-6">
            <div className="space-y-4">
                {PROJECTS.map((project) => (
                    <div
                        key={project.name}
                        className="flex flex-col gap-4 rounded border border-amber-500/20 bg-[#111] p-4 sm:flex-row"
                    >
                        <div className="relative mx-auto h-20 w-32 shrink-0 overflow-hidden rounded border border-neutral-700 sm:mx-0">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 space-y-1 font-mono text-xs sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-amber-400">[DEPLOY]</span>
                                <span className="font-bold text-white">{project.name}</span>
                                <StatusBadge status={project.status} />
                            </div>
                            <div className="text-neutral-400">
                                {project.description}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-neutral-500">target:</span>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-300 underline decoration-amber-500/40 transition-colors hover:text-amber-200"
                                >
                                    {project.url.replace(`https://`, ``)}
                                </Link>
                            </div>
                            <div className="text-amber-400/70">
                                <span className="inline-block animate-pulse">▍</span>{` `}
                                deploying...
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function StageNotifyContacts({
    expanded,
}: {
    expanded: boolean
}) {
    if (!expanded) return null

    return (
        <div className="rounded-b border border-t-0 border-green-500/20 bg-[#0d0d0d] p-4 sm:p-6">
            <div className="space-y-2">
                <div className="mb-3 font-mono text-xs text-neutral-500 sm:text-sm">
                    Configuring notification channels...
                </div>
                {CONTACTS.map((channel) => (
                    <div
                        key={channel.type}
                        className="flex items-center gap-3 rounded border border-neutral-800 bg-[#111] px-4 py-2.5 font-mono text-xs transition-colors hover:border-green-500/30 hover:bg-[#141414] sm:text-sm"
                    >
                        <span className="text-lg">{channel.icon}</span>
                        <span className="w-16 shrink-0 text-neutral-500 sm:w-20">
                            {channel.type}
                        </span>
                        <Link
                            href={channel.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-300 underline decoration-green-500/30 transition-colors hover:text-green-200"
                        >
                            {channel.label}
                        </Link>
                        <span className="ml-auto text-green-500">✓ sent</span>
                    </div>
                ))}
                <div className="mt-3 font-mono text-xs text-green-400/70 sm:text-sm">
                    All notifications dispatched successfully.
                </div>
            </div>
        </div>
    )
}

export default function CliPipelinePage() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        build: true,
        test: true,
        deploy: true,
        notify: true,
    })

    const toggle = (stage: string) => {
        setExpanded((prev) => ({ ...prev, [stage]: !prev[stage] }))
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] font-mono text-neutral-200">
            {/* Pipeline Header */}
            <header className="border-b border-neutral-800 bg-[#0d0d0d]">
                <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-green-500/20 text-green-400">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-base font-bold text-white sm:text-lg">
                                    Pipeline #42
                                    <span className="text-neutral-500">{` — `}</span>
                                    <span className="text-neutral-400">vincentwilkie.ca</span>
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    triggered 14y ago{` · `}branch: <span className="text-neutral-400">main</span>{` · `}
                                    {timestamp()}
                                </p>
                            </div>
                        </div>
                        <StatusBadge status={STATUS.PASSED} />
                    </div>
                </div>
            </header>

            {/* Pipeline Stages */}
            <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
                {/* Stage 1: build:profile */}
                <div>
                    <StageHeader
                        name="build:profile"
                        status={STATUS.PASSED}
                        duration="5s"
                        expanded={expanded.build}
                        onToggle={() => toggle(`build`)}
                    />
                    <StageBuildProfile expanded={expanded.build} />
                </div>

                <DashedConnector />

                {/* Stage 2: test:skills */}
                <div>
                    <StageHeader
                        name="test:skills"
                        status={STATUS.PASSED}
                        duration="1m 23s"
                        expanded={expanded.test}
                        onToggle={() => toggle(`test`)}
                    />
                    <StageTestSkills expanded={expanded.test} />
                </div>

                <DashedConnector />

                {/* Stage 3: deploy:projects */}
                <div>
                    <StageHeader
                        name="deploy:projects"
                        status={STATUS.IN_PROGRESS}
                        duration="—"
                        expanded={expanded.deploy}
                        onToggle={() => toggle(`deploy`)}
                    />
                    <StageDeployProjects expanded={expanded.deploy} />
                </div>

                <DashedConnector />

                {/* Stage 4: notify:contacts */}
                <div>
                    <StageHeader
                        name="notify:contacts"
                        status={STATUS.PASSED}
                        duration="2s"
                        expanded={expanded.notify}
                        onToggle={() => toggle(`notify`)}
                    />
                    <StageNotifyContacts expanded={expanded.notify} />
                </div>

                {/* Footer */}
                <div className="mt-8 border-t border-neutral-800 pt-6 text-center font-mono text-xs text-neutral-600">
                    <p>Pipeline completed in 14y 0d 1h 23m 42s</p>
                    <p className="mt-1">
                        4 stages{` · `}3 passed{` · `}1 running{` · `}0 failed
                    </p>
                </div>
            </main>
        </div>
    )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type TabId = `about` | `skills` | `projects` | `contact`

interface Tab {
    id: TabId
    label: string
    icon: string
}

interface Project {
    name: string
    url: string
    description: string
    status: string
    image: string
}

interface ContactEntry {
    key: string
    type: string
    value: string
    href: string
}

const tabs: Tab[] = [
    { id: `about`, label: `About.tsx`, icon: `⚛` },
    { id: `skills`, label: `Skills.ts`, icon: `🟦` },
    { id: `projects`, label: `Projects.json`, icon: `{}` },
    { id: `contact`, label: `Contact.md`, icon: `📄` },
]

const fileTree = [
    { name: `src`, depth: 0, isFolder: true },
    { name: `components`, depth: 1, isFolder: true },
    { name: `About.tsx`, depth: 2, isFolder: false, tab: `about` as TabId },
    { name: `Skills.ts`, depth: 2, isFolder: false, tab: `skills` as TabId },
    { name: `data`, depth: 1, isFolder: true },
    { name: `Projects.json`, depth: 2, isFolder: false, tab: `projects` as TabId },
    { name: `docs`, depth: 1, isFolder: true },
    { name: `Contact.md`, depth: 2, isFolder: false, tab: `contact` as TabId },
]

const frontendSkills = [
    `React`, `Vue`, `Angular`, `TypeScript`, `SCSS`, `Tailwind CSS`, `Ionic`,
]

const backendSkills = [
    `Node.js`, `Express`, `PHP`, `Python`, `MySQL`, `NoSQL`, `REST APIs`,
]

const cloudSkills = [
    `AWS EC2`, `Lambda`, `S3`, `RDS`, `CloudFormation`, `SQS/SNS`, `CI/CD`,
]

const leadershipSkills = [
    `Architecture`, `Legacy Modernization`, `Cross-Platform`, `Mentoring`,
]

const projects: Project[] = [
    {
        name: `liati`,
        url: `https://liati.ca`,
        description: `Digital narrative weaving personal journey with fashion brand storytelling`,
        status: `IN_DEV`,
        image: `/projects/liati.png`,
    },
    {
        name: `ctrlaltrandom`,
        url: `https://ctrlaltrandom.com`,
        description: `Tech podcast diving into random topics—from innovations to quirky gadgets`,
        status: `IN_DEV`,
        image: `/projects/ctrlaltrandom.png`,
    },
]

const contacts: ContactEntry[] = [
    { key: `phone`, type: `PhoneNumber`, value: `+1-289-698-4004`, href: `tel:+12896984004` },
    { key: `email`, type: `Email`, value: `vincentwilkie@hotmail.com`, href: `mailto:vincentwilkie@hotmail.com` },
    { key: `linkedin`, type: `URL`, value: `/in/vdubworkshop`, href: `https://www.linkedin.com/in/vdubworkshop` },
    { key: `github`, type: `URL`, value: `VinceWilkie`, href: `https://github.com/VinceWilkie` },
    { key: `twitter`, type: `Handle`, value: `@vincentwilkie`, href: `https://x.com/vincentwilkie` },
]

function Keyword({ children }: { children: React.ReactNode }) {
    return <span className="text-[#c586c0]">{children}</span>
}

function Type({ children }: { children: React.ReactNode }) {
    return <span className="text-[#4ec9b0]">{children}</span>
}

function Str({ children }: { children: React.ReactNode }) {
    return <span className="text-[#ce9178]">{children}</span>
}

function Punct({ children }: { children: React.ReactNode }) {
    return <span className="text-[#d4d4d4]">{children}</span>
}

function Var({ children }: { children: React.ReactNode }) {
    return <span className="text-[#9cdcfe]">{children}</span>
}

function Func({ children }: { children: React.ReactNode }) {
    return <span className="text-[#dcdcaa]">{children}</span>
}

function Num({ children }: { children: React.ReactNode }) {
    return <span className="text-[#b5cea8]">{children}</span>
}

function Comment({ children }: { children: React.ReactNode }) {
    return <span className="text-[#6a9955]">{children}</span>
}

function LineNumbers({ count }: { count: number }) {
    return (
        <div className="select-none text-right pr-4 text-[#858585] text-xs sm:text-sm leading-6 shrink-0 w-8 sm:w-12">
            {Array.from({ length: count }, (_, i) => (
                <div key={i}>{i + 1}</div>
            ))}
        </div>
    )
}

function AboutContent() {
    const lines = 24
    return (
        <div className="flex">
            <LineNumbers count={lines} />
            <div className="text-xs sm:text-sm leading-6 overflow-x-auto">
                <div><Keyword>import</Keyword> <Type>React</Type> <Keyword>from</Keyword> <Str>{`\`react\``}</Str><Punct>;</Punct></div>
                <div>&nbsp;</div>
                <div><Comment>{`// Full Stack Software Developer`}</Comment></div>
                <div><Comment>{`// 14+ years of building web experiences`}</Comment></div>
                <div>&nbsp;</div>
                <div><Keyword>interface</Keyword> <Type>Developer</Type> <Punct>{`{`}</Punct></div>
                <div>    <Var>name</Var><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></div>
                <div>    <Var>title</Var><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></div>
                <div>    <Var>experience</Var><Punct>:</Punct> <Type>number</Type><Punct>;</Punct></div>
                <div>    <Var>passion</Var><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></div>
                <div><Punct>{`}`}</Punct></div>
                <div>&nbsp;</div>
                <div><Keyword>const</Keyword> <Var>vincent</Var><Punct>:</Punct> <Type>Developer</Type> <Punct>=</Punct> <Punct>{`{`}</Punct></div>
                <div>    <Var>name</Var><Punct>:</Punct> <Str>{`\`Vincent Wilkie\``}</Str><Punct>,</Punct></div>
                <div>    <Var>title</Var><Punct>:</Punct> <Str>{`\`Full Stack Software Developer\``}</Str><Punct>,</Punct></div>
                <div>    <Var>experience</Var><Punct>:</Punct> <Num>14</Num><Punct>,</Punct> <Comment>{`// years and counting`}</Comment></div>
                <div>    <Var>passion</Var><Punct>:</Punct> <Str>{`\`Building delightful web experiences\``}</Str><Punct>,</Punct></div>
                <div><Punct>{`}`}</Punct><Punct>;</Punct></div>
                <div>&nbsp;</div>
                <div><Keyword>export</Keyword> <Keyword>default</Keyword> <Keyword>function</Keyword> <Func>render</Func><Punct>(</Punct><Punct>)</Punct> <Punct>{`{`}</Punct></div>
                <div>    <Keyword>return</Keyword> <Punct>&lt;</Punct><Type>Profile</Type> <Var>dev</Var><Punct>=</Punct><Punct>{`{`}</Punct><Var>vincent</Var><Punct>{`}`}</Punct> <Punct>/&gt;</Punct><Punct>;</Punct></div>
                <div><Punct>{`}`}</Punct></div>
                <div>&nbsp;</div>
                <div><Comment>{`// Pragmatic solutions. Clean experiences. Steady iteration.`}</Comment></div>
            </div>
        </div>
    )
}

function SkillsContent() {
    const skillLines: React.ReactNode[] = []

    skillLines.push(<div key="l1"><Comment>{`// Skills & Expertise`}</Comment></div>)
    skillLines.push(<div key="l2">&nbsp;</div>)

    skillLines.push(<div key="fe-t"><Keyword>type</Keyword> <Type>Frontend</Type> <Punct>=</Punct></div>)
    frontendSkills.forEach((skill, i) => {
        const isLast = i === frontendSkills.length - 1
        skillLines.push(
            <div key={`fe-${i}`}>    <Punct>|</Punct> <Str>{`\`${skill}\``}</Str>{isLast ? <Punct>;</Punct> : null}</div>
        )
    })
    skillLines.push(<div key="fe-sp">&nbsp;</div>)

    skillLines.push(<div key="be-t"><Keyword>type</Keyword> <Type>BackendAndData</Type> <Punct>=</Punct></div>)
    backendSkills.forEach((skill, i) => {
        const isLast = i === backendSkills.length - 1
        skillLines.push(
            <div key={`be-${i}`}>    <Punct>|</Punct> <Str>{`\`${skill}\``}</Str>{isLast ? <Punct>;</Punct> : null}</div>
        )
    })
    skillLines.push(<div key="be-sp">&nbsp;</div>)

    skillLines.push(<div key="cl-t"><Keyword>type</Keyword> <Type>CloudInfra</Type> <Punct>=</Punct></div>)
    cloudSkills.forEach((skill, i) => {
        const isLast = i === cloudSkills.length - 1
        skillLines.push(
            <div key={`cl-${i}`}>    <Punct>|</Punct> <Str>{`\`${skill}\``}</Str>{isLast ? <Punct>;</Punct> : null}</div>
        )
    })
    skillLines.push(<div key="cl-sp">&nbsp;</div>)

    skillLines.push(<div key="ld-i"><Keyword>interface</Keyword> <Type>FullStackLeadership</Type> <Punct>{`{`}</Punct></div>)
    leadershipSkills.forEach((skill, i) => {
        const key = skill.toLowerCase().replace(/[^a-z]/g, `_`)
        const isLast = i === leadershipSkills.length - 1
        skillLines.push(
            <div key={`ld-${i}`}>    <Var>{key}</Var><Punct>:</Punct> <Type>boolean</Type><Punct>{isLast ? `` : `,`}</Punct></div>
        )
    })
    skillLines.push(<div key="ld-e"><Punct>{`}`}</Punct></div>)
    skillLines.push(<div key="ld-sp">&nbsp;</div>)

    skillLines.push(<div key="exp"><Keyword>export</Keyword> <Keyword>type</Keyword> <Punct>{`{`}</Punct> <Type>Frontend</Type><Punct>,</Punct> <Type>BackendAndData</Type><Punct>,</Punct> <Type>CloudInfra</Type><Punct>,</Punct> <Type>FullStackLeadership</Type> <Punct>{`}`}</Punct><Punct>;</Punct></div>)

    return (
        <div className="flex">
            <LineNumbers count={skillLines.length} />
            <div className="text-xs sm:text-sm leading-6 overflow-x-auto">
                {skillLines}
            </div>
        </div>
    )
}

function ProjectsContent() {
    const jsonLines: React.ReactNode[] = []

    jsonLines.push(<div key="open"><Punct>{`{`}</Punct></div>)
    jsonLines.push(<div key="pk">    <Str>{`"projects"`}</Str><Punct>:</Punct> <Punct>[</Punct></div>)

    projects.forEach((project, pi) => {
        const isLastProject = pi === projects.length - 1
        jsonLines.push(<div key={`po-${pi}`}>        <Punct>{`{`}</Punct></div>)
        jsonLines.push(<div key={`pn-${pi}`}>            <Str>{`"name"`}</Str><Punct>:</Punct> <Str>{`"${project.name}"`}</Str><Punct>,</Punct></div>)
        jsonLines.push(<div key={`pu-${pi}`}>            <Str>{`"url"`}</Str><Punct>:</Punct> <Str>{`"${project.url}"`}</Str><Punct>,</Punct></div>)
        jsonLines.push(<div key={`pd-${pi}`}>            <Str>{`"description"`}</Str><Punct>:</Punct> <Str>{`"${project.description}"`}</Str><Punct>,</Punct></div>)
        jsonLines.push(<div key={`ps-${pi}`}>            <Str>{`"status"`}</Str><Punct>:</Punct> <Str>{`"${project.status}"`}</Str><Punct>,</Punct></div>)
        jsonLines.push(<div key={`pi-${pi}`}>            <Str>{`"image"`}</Str><Punct>:</Punct> <Str>{`"${project.image}"`}</Str></div>)
        jsonLines.push(<div key={`pc-${pi}`}>        <Punct>{`}`}</Punct>{isLastProject ? null : <Punct>,</Punct>}</div>)
    })

    jsonLines.push(<div key="pa">    <Punct>]</Punct></div>)
    jsonLines.push(<div key="close"><Punct>{`}`}</Punct></div>)

    return (
        <div className="flex">
            <LineNumbers count={jsonLines.length} />
            <div className="text-xs sm:text-sm leading-6 overflow-x-auto">
                {jsonLines}
            </div>
        </div>
    )
}

function ContactContent() {
    const lines: React.ReactNode[] = []

    lines.push(<div key="c1"><Comment>{`// Contact Information`}</Comment></div>)
    lines.push(<div key="c2">&nbsp;</div>)

    contacts.forEach((c, i) => {
        lines.push(
            <div key={`c-${i}`}>
                <Keyword>const</Keyword>{` `}
                <Var>{c.key}</Var><Punct>:</Punct>{` `}
                <Type>{c.type}</Type>{` `}
                <Punct>=</Punct>{` `}
                <Link href={c.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <Str>{`\`${c.value}\``}</Str>
                </Link>
                <Punct>;</Punct>
            </div>
        )
    })

    lines.push(<div key="sp">&nbsp;</div>)
    lines.push(<div key="ex"><Comment>{`// Click any value above to connect`}</Comment></div>)
    lines.push(<div key="ex2"><Keyword>export</Keyword> <Punct>{`{`}</Punct> {contacts.map((c, i) => (<span key={c.key}><Var>{c.key}</Var>{i < contacts.length - 1 ? <Punct>, </Punct> : null}</span>))} <Punct>{`}`}</Punct><Punct>;</Punct></div>)

    return (
        <div className="flex">
            <LineNumbers count={lines.length} />
            <div className="text-xs sm:text-sm leading-6 overflow-x-auto">
                {lines}
            </div>
        </div>
    )
}

export default function IdePage() {
    const [activeTab, setActiveTab] = useState<TabId>(`about`)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const activeTabObj = tabs.find((t) => t.id === activeTab)

    const renderContent = () => {
        switch (activeTab) {
            case `about`:
                return <AboutContent />
            case `skills`:
                return <SkillsContent />
            case `projects`:
                return <ProjectsContent />
            case `contact`:
                return <ContactContent />
        }
    }

    return (
        <div className="h-screen flex flex-col bg-[#1e1e1e] text-[#d4d4d4] font-mono selection:bg-[#264f78] overflow-hidden">
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-[#323233] px-4 py-1 text-xs text-[#cccccc] shrink-0">
                <div className="flex items-center gap-2">
                    <span className="text-[#007acc] font-bold text-sm">⌥</span>
                    <span>Vincent Wilkie — VS Code</span>
                </div>
                <div className="flex gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#28c940] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
                </div>
            </div>

            {/* Tab Bar */}
            <div className="flex items-center bg-[#252526] shrink-0 overflow-x-auto scrollbar-hide">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="md:hidden px-3 py-2 text-[#858585] hover:text-[#d4d4d4] transition-colors shrink-0"
                    aria-label="Toggle sidebar"
                >
                    ☰
                </button>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id)
                            setSidebarOpen(false)
                        }}
                        className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm border-r border-[#1e1e1e] shrink-0 transition-colors ${
                            activeTab === tab.id
                                ? `bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]`
                                : `bg-[#2d2d2d] text-[#858585] hover:bg-[#2a2a2a] border-t-2 border-t-transparent`
                        }`}
                    >
                        <span className="text-xs">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Main Layout */}
            <div className="flex flex-1 min-h-0">
                {/* Sidebar */}
                <aside
                    className={`${
                        sidebarOpen ? `block` : `hidden`
                    } md:block bg-[#252526] border-r border-[#1e1e1e] w-56 shrink-0 overflow-y-auto absolute md:relative z-10 h-[calc(100%-theme(spacing.20))] md:h-auto`}
                >
                    <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#bbbbbb] font-semibold">
                        Explorer
                    </div>
                    <div className="text-[13px]">
                        {fileTree.map((item, i) => (
                            <div
                                key={i}
                                style={{ paddingLeft: `${item.depth * 16 + 12}px` }}
                                className={`flex items-center gap-1.5 py-0.5 cursor-pointer transition-colors ${
                                    !item.isFolder && item.tab === activeTab
                                        ? `bg-[#37373d] text-white`
                                        : `hover:bg-[#2a2d2e] text-[#cccccc]`
                                }`}
                                onClick={() => {
                                    if (!item.isFolder && item.tab) {
                                        setActiveTab(item.tab)
                                        setSidebarOpen(false)
                                    }
                                }}
                            >
                                <span className="text-xs w-4 text-center">
                                    {item.isFolder ? `📁` : `📄`}
                                </span>
                                <span className={item.isFolder ? `font-semibold` : ``}>
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Editor Area */}
                <main className="flex-1 flex flex-col min-w-0 overflow-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-1 px-4 py-1 text-xs text-[#858585] bg-[#1e1e1e] border-b border-[#2d2d2d] shrink-0">
                        <span>src</span>
                        <span className="text-[#555]">›</span>
                        <span>{activeTabObj?.label}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-6 overflow-auto">
                        {activeTab === `about` && (
                            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                <div className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-md overflow-hidden border-2 border-[#007acc] relative">
                                    <Image
                                        src="/vincent-wilkie-profile-picture.png"
                                        alt="Vincent Wilkie"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <h1 className="text-xl sm:text-2xl font-bold text-white">Vincent Wilkie</h1>
                                    <p className="text-[#007acc] text-sm">Full Stack Software Developer</p>
                                    <p className="text-[#858585] text-xs">14+ years experience</p>
                                </div>
                            </div>
                        )}

                        {activeTab === `projects` && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {projects.map((project) => (
                                    <Link
                                        key={project.name}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative aspect-video bg-[#252526] rounded border border-[#3e3e3e] overflow-hidden hover:border-[#007acc] transition-colors"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e1e1e] to-transparent p-3">
                                            <span className="text-xs font-semibold text-white">{project.name}</span>
                                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-[#007acc] text-white">
                                                {project.status}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        <div className="border border-[#3e3e3e] rounded bg-[#1e1e1e]">
                            <div className="p-4 overflow-x-auto">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between bg-[#007acc] px-4 py-0.5 text-[11px] text-white shrink-0">
                <div className="flex items-center gap-4">
                    <Link
                        href="/testing"
                        className="hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors"
                    >
                        ← Back
                    </Link>
                    <span>main*</span>
                    <span className="hidden sm:inline">⟳ 0 ⚠ 0</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline">Ln 1, Col 1</span>
                    <span className="hidden sm:inline">Spaces: 4</span>
                    <span>UTF-8</span>
                    <span className="hidden sm:inline">TypeScript React</span>
                    <span className="hidden sm:inline">Prettier</span>
                </div>
            </div>
        </div>
    )
}

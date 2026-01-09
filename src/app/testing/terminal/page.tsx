"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
    { label: `phone`, value: `+1-289-698-4004`, href: `tel:+2896984004`, color: `text-green-400` },
    { label: `email`, value: `vincentwilkie@hotmail.com`, href: `mailto:vincentwilkie@hotmail.com`, color: `text-cyan-400` },
    { label: `linkedin`, value: `/in/vdubworkshop`, href: `https://www.linkedin.com/in/vdubworkshop`, color: `text-blue-400` },
    { label: `github`, value: `VinceWilkie`, href: `https://github.com/VinceWilkie`, color: `text-purple-400` },
    { label: `twitter`, value: `@vincentwilkie`, href: `https://x.com/vincentwilkie`, color: `text-gray-400` },
    { label: `facebook`, value: `vincewilkie1`, href: `https://facebook.com/vincewilkie1`, color: `text-blue-500` },
]

const skills = [
    {
        name: `frontend`,
        version: `14y+`,
        description: `From early HTML/CSS/JS to modern frameworks like React, Vue, and Angular. Currently building with TypeScript, SCSS, and Ionic for hybrid mobile apps.`
    },
    {
        name: `backend`,
        version: `14y+`,
        description: `PHP (refactored legacy codebases to CodeIgniter), Node.js/Express, and Python. Building APIs and server-side logic that powers real applications.`
    },
    {
        name: `databases`,
        version: `14y+`,
        description: `MySQL across multiple production systems—schema design, query optimization, and migrations. NoSQL experience for flexible data needs.`
    },
    {
        name: `mobile`,
        version: `6y+`,
        description: `Objective-C for native iOS integration, Ionic/Cordova for cross-platform Android and iOS apps. Bridging web tech to mobile experiences.`
    },
    {
        name: `devops_infra`,
        version: `5y+`,
        description: `AWS (EC2, Lambda, S3, RDS, CloudFormation, SQS, SNS), on-site server management, hardware systems, and keeping production environments running.`
    },
]

const projects = [
    {
        name: `liati`,
        description: `Digital narrative + fashion brand storytelling`,
        url: `https://liati.ca`,
        status: `IN_DEV`,
        image: `/projects/liati.png`,
    },
    {
        name: `ctrlaltrandom`,
        description: `Tech podcast - innovations & quirky gadgets`,
        url: `https://ctrlaltrandom.com`,
        status: `IN_DEV`,
        image: `/projects/ctrlaltrandom.png`,
    },
]

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayText, setDisplayText] = useState(``)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0
            const interval = setInterval(() => {
                if (index <= text.length) {
                    setDisplayText(text.slice(0, index))
                    index++
                } else {
                    clearInterval(interval)
                    setTimeout(() => setShowCursor(false), 1000)
                }
            }, 20)
            return () => clearInterval(interval)
        }, delay)
        return () => clearTimeout(timeout)
    }, [text, delay])

    return (
        <span>
            {displayText}
            {showCursor && <span className="animate-pulse">█</span>}
        </span>
    )
}

function SkillOutput({ text, skillKey }: { text: string; skillKey: string }) {
    const [displayText, setDisplayText] = useState(``)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        // Reset when skill changes
        setDisplayText(``)
        setShowCursor(true)

        let index = 0
        const interval = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index))
                index++
            } else {
                clearInterval(interval)
                setTimeout(() => setShowCursor(false), 500)
            }
        }, 20)

        return () => clearInterval(interval)
    }, [text, skillKey])

    return (
        <span>
            {displayText}
            {showCursor && <span className="animate-pulse">█</span>}
        </span>
    )
}

const bootLines = [
    { text: `[BOOT] Initializing portfolio.exe...`, color: `text-[#00ff41]`, delay: 200 },
    { text: `[OK] Loading 14 years of caffeine dependencies`, color: `text-[#00ff41]`, delay: 200 },
    { text: `[OK] Mounting /dev/creativity`, color: `text-[#00ff41]`, delay: 150 },
    { text: `[OK] Starting imposter-syndrome-suppressor.service`, color: `text-[#00ff41]`, delay: 200 },
    { text: `[WARN] Found 47 unfinished side projects... ignoring`, color: `text-yellow-400`, delay: 300 },
    { text: `[OK] Connecting to the internet tubes`, color: `text-[#00ff41]`, delay: 150 },
    { text: `[OK] Compiling excuses for legacy code`, color: `text-[#00ff41]`, delay: 200 },
    { text: `[OK] Loading pixel-perfect expectations`, color: `text-[#00ff41]`, delay: 150 },
    { text: `[INFO] Stack overflow tabs: 42 (normal)`, color: `text-gray-400`, delay: 200 },
    { text: `[OK] Deploying smooth animations`, color: `text-[#00ff41]`, delay: 150 },
    { text: `[SUCCESS] Portfolio ready!`, color: `text-cyan-400`, delay: 500 },
    { text: ``, color: `text-[#00ff41]`, delay: 300 },
    { text: `Welcome to Vincent Wilkie's Portfolio`, color: `text-cyan-400`, delay: 100 },
]

const STORAGE_KEY = `vw-portfolio-boot-seen`

function BootSequence({ onComplete }: { onComplete: () => void }) {
    const [currentLine, setCurrentLine] = useState(0)
    const [displayedLines, setDisplayedLines] = useState<string[]>([])
    const [currentText, setCurrentText] = useState(``)
    const [showCursor, setShowCursor] = useState(true)
    const [waitingForInput, setWaitingForInput] = useState(false)

    useEffect(() => {
        if (currentLine >= bootLines.length) {
            // All lines done, wait for user input
            setShowCursor(false)
            setWaitingForInput(true)
            return
        }

        const line = bootLines[currentLine]
        let charIndex = 0

        const interval = setInterval(() => {
            if (charIndex <= line.text.length) {
                setCurrentText(line.text.slice(0, charIndex))
                charIndex++
            } else {
                clearInterval(interval)
                // Line complete, add to displayed lines and move to next
                setDisplayedLines(prev => [...prev, line.text])
                setCurrentText(``)
                setTimeout(() => setCurrentLine(prev => prev + 1), line.delay || 150)
            }
        }, 10)

        return () => clearInterval(interval)
    }, [currentLine])

    useEffect(() => {
        if (!waitingForInput) return

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key !== `Enter` && e.key !== ` `) return
            e.preventDefault()
            completeAndSave()
        }

        const handleClick = () => {
            completeAndSave()
        }

        const completeAndSave = () => {
            // Mark as seen in localStorage
            try {
                localStorage.setItem(STORAGE_KEY, `true`)
            } catch {
                // localStorage might not be available
            }
            onComplete()
        }

        // Use document instead of window for better keyboard capture
        document.addEventListener(`keydown`, handleKeydown)
        document.addEventListener(`click`, handleClick)
        document.addEventListener(`touchstart`, handleClick)

        return () => {
            document.removeEventListener(`keydown`, handleKeydown)
            document.removeEventListener(`click`, handleClick)
            document.removeEventListener(`touchstart`, handleClick)
        }
    }, [waitingForInput, onComplete])

    return (
        <div className="space-y-1 text-sm">
            {displayedLines.map((line, i) => (
                <p key={i} className={bootLines[i]?.color || `text-[#00ff41]`}>
                    {line || `\u00A0`}
                </p>
            ))}
            {currentLine < bootLines.length && (
                <p className={bootLines[currentLine]?.color || `text-[#00ff41]`}>
                    {currentText}
                    {showCursor && <span className="animate-pulse">█</span>}
                </p>
            )}
            {waitingForInput && (
                <p className="text-gray-400 mt-4 animate-pulse">
                    Press Enter or Space, tap, or click to continue...
                </p>
            )}
        </div>
    )
}

export default function TerminalDesign() {
    const [bootComplete, setBootComplete] = useState(false)
    const [showBoot, setShowBoot] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

    const activeSkill = skills.find(s => s.name === selectedSkill)

    // Check localStorage on mount to determine if boot should be skipped
    useEffect(() => {
        try {
            const hasSeenBoot = localStorage.getItem(STORAGE_KEY)
            if (hasSeenBoot === `true`) {
                setShowBoot(false)
                setBootComplete(true)
            }
        } catch {
            // localStorage might not be available
        }
        setIsLoading(false)
    }, [])

    const handleReboot = () => {
        try {
            localStorage.removeItem(STORAGE_KEY)
        } catch {
            // localStorage might not be available
        }
        setBootComplete(false)
        setShowBoot(true)
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black overflow-x-hidden">
            {/* Scanlines Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 1px,
                        rgba(0, 255, 65, 0.1) 1px,
                        rgba(0, 255, 65, 0.1) 2px
                    )`,
                }}
            />

            {/* CRT Vignette */}
            <div
                className="fixed inset-0 pointer-events-none z-40"
                style={{
                    background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)`,
                }}
            />

            {/* Phosphor Glow Effect */}
            <div
                className="fixed inset-0 pointer-events-none z-30"
                style={{
                    boxShadow: `inset 0 0 150px rgba(0, 255, 65, 0.05)`,
                }}
            />

            {/* Terminal Header */}
            {bootComplete && (
                <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 border-b border-green-900/50 backdrop-blur-sm">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="flex items-center h-10">
                            {/* <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div> */}
                            <Image
                                src="/VW_noborder.png"
                                alt="VW Logo"
                                width={32}
                                height={32}
                                className="object-contain h-6 w-auto py-0.5 mr-2"
                                priority
                            />
                            <span className="text-sm opacity-60">vwilkie@portfolio:~$</span>
                            <span className="ml-1 animate-pulse">█</span>
                        </div>
                    </div>
                </header>
            )}

            {/* Main Terminal Content */}
            <main className={`pb-16 px-4 sm:px-6 max-w-5xl mx-auto ${bootComplete ? `pt-16` : `pt-8`}`}>
                {/* Loading state to prevent flash */}
                {isLoading && (
                    <div className="text-gray-500 text-sm">
                        <span className="animate-pulse">█</span>
                    </div>
                )}

                {/* Boot Sequence */}
                {!isLoading && showBoot && !bootComplete && (
                    <BootSequence onComplete={() => setBootComplete(true)} />
                )}

                {bootComplete && (
                    <div className="space-y-6">
                        {/* Connection Status */}
                        {/* <div className="text-gray-600 text-sm">
                            <span className="animate-pulse">█</span> Connection established | Type &apos;exit&apos; to disconnect
                        </div> */}
                        {/* ASCII Art Header */}
                        {/* <section className="overflow-x-auto flex flex-col items-center">
                            <pre className="text-[8px] sm:text-xs leading-none text-green-500/80 whitespace-pre inline-block">
                                {`██╗   ██╗██╗███╗   ██╗ ██████╗███████╗███╗   ██╗████████╗
██║   ██║██║████╗  ██║██╔════╝██╔════╝████╗  ██║╚══██╔══╝
██║   ██║██║██╔██╗ ██║██║     █████╗  ██╔██╗ ██║   ██║
╚██╗ ██╔╝██║██║╚██╗██║██║     ██╔══╝  ██║╚██╗██║   ██║
 ╚████╔╝ ██║██║ ╚████║╚██████╗███████╗██║ ╚████║   ██║
  ╚═══╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   `}
                            </pre>
                            <pre className="text-[8px] sm:text-xs leading-none text-cyan-400/80 whitespace-pre inline-block mt-1">
                                {`██╗    ██╗██╗██╗     ██╗  ██╗██╗███████╗
██║    ██║██║██║     ██║ ██╔╝██║██╔════╝
██║ █╗ ██║██║██║     █████╔╝ ██║█████╗
██║███╗██║██║██║     ██╔═██╗ ██║██╔══╝
╚███╔███╔╝██║███████╗██║  ██╗██║███████╗
 ╚══╝╚══╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚══════╝`}
                            </pre>
                        </section> */}

                        {/* Profile Section */}
                        <section id="about" className="space-y-2">
                            <p className="text-gray-500">$ cat /etc/profile</p>
                            <div className="border border-green-500/50 p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                                    {/* Profile Image */}
                                    <div className="flex-shrink-0">
                                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 border-2 border-green-500/50 overflow-hidden">
                                            <Image
                                                src="/vincent-wilkie-profile-picture.png"
                                                alt="Vincent Wilkie"
                                                fill
                                                className="object-cover"
                                                style={{ filter: `grayscale(100%) brightness(1.2) contrast(1.3)` }}
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-green-500/10" />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h1 className="text-xl sm:text-2xl">
                                                <TypeWriter text="VINCENT WILKIE" delay={500} />
                                            </h1>
                                            <p className="text-cyan-400">
                                                <TypeWriter text="// Full Stack Software Developer" delay={1000} />
                                            </p>
                                        </div>

                                        <div className="text-sm space-y-2 text-gray-400">
                                            <p>
                                                <span className="text-green-500">→</span> Building <span className="text-white">delightful web experiences</span> from scratch
                                            </p>
                                            <p>
                                                <span className="text-green-500">→</span> Pragmatic solutions | Clean UX | Steady iteration
                                            </p>
                                            <p>
                                                <span className="text-green-500">→</span> Status: <span className="text-green-400 animate-pulse">AVAILABLE</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section id="skills" className="space-y-2">
                            <p className="text-gray-500">$ skills --list</p>
                            <div className="border border-green-500/50 p-4 sm:p-6">
                                <p className="text-gray-500 text-sm mb-3"># click a package for details</p>
                                <div className="space-y-1">
                                    {skills.map((skill) => (
                                        <button
                                            key={skill.name}
                                            onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                                            className={`flex items-center gap-2 text-sm w-full text-left transition-colors !min-h-0 py-0 ${selectedSkill === skill.name
                                                ? `text-white`
                                                : `text-gray-400 hover:text-white`
                                                }`}
                                        >
                                            <span className={`${selectedSkill === skill.name ? `text-green-400` : `text-green-600`}`}>
                                                {selectedSkill === skill.name ? `├── ▼` : `├──`}
                                            </span>
                                            <span className="text-cyan-400">{skill.name}</span>
                                            <span className="text-gray-600">@</span>
                                            <span className="text-yellow-500">{skill.version}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Skill Output */}
                                {activeSkill && (
                                    <div className="mt-4 pt-4 border-t border-green-900/50">
                                        <p className="text-gray-500 text-sm mb-2">$ man {activeSkill.name}</p>
                                        <div className="text-sm text-gray-300 leading-relaxed">
                                            <SkillOutput
                                                text={activeSkill.description}
                                                skillKey={activeSkill.name}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Links Section */}
                        <section id="links" className="space-y-2">
                            <p className="text-gray-500">$ cat ./contact.json</p>
                            <div className="border border-green-500/50 p-4 sm:p-6">
                                <pre className="text-sm overflow-x-auto">
                                    <span className="text-gray-500">{`{`}</span>
                                    {links.map((link, i) => (
                                        <div key={link.label} className="ml-4">
                                            <Link
                                                href={link.href}
                                                target={link.href.startsWith(`http`) ? `_blank` : undefined}
                                                rel={link.href.startsWith(`http`) ? `noopener noreferrer` : undefined}
                                                className="group inline-flex !min-h-0 !min-w-0"
                                            >
                                                <span className="text-purple-400">&quot;{link.label}&quot;</span>
                                                <span className="text-gray-500">: </span>
                                                <span className={`${link.color} group-hover:text-white group-hover:underline transition-colors`}>
                                                    &quot;{link.value}&quot;
                                                </span>
                                                {i < links.length - 1 && <span className="text-gray-500">,</span>}
                                            </Link>
                                        </div>
                                    ))}
                                    <span className="text-gray-500">{`}`}</span>
                                </pre>
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section id="projects" className="space-y-2">
                            <p className="text-gray-500">$ ls -la ./projects/</p>
                            <div className="border border-green-500/50 p-4 sm:p-6 space-y-4">
                                {projects.map((project) => (
                                    <Link
                                        key={project.name}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block border border-green-900/50 hover:border-green-500/50 transition-colors"
                                    >
                                        <div className="flex flex-col sm:flex-row">
                                            {/* Image */}
                                            <div className="relative aspect-video sm:aspect-square sm:w-48 flex-shrink-0 bg-black/50 overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    fill
                                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                                    style={{ filter: `brightness(0.9) contrast(1.1)` }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 p-4 sm:p-6 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg text-cyan-400 group-hover:text-white transition-colors">
                                                        ./{project.name}/
                                                    </h3>
                                                    <span className="px-2 py-1 text-xs border border-yellow-500/50 text-yellow-500">
                                                        [{project.status}]
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    {project.description}
                                                </p>
                                                <div className="text-sm text-green-500 group-hover:text-green-400 transition-colors">
                                                    <span className="opacity-60">→</span> {project.url}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="border-t border-green-900/50 pt-8">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                                <p className="text-gray-500">
                                    [EOF] © {new Date().getFullYear()} Vincent Wilkie | All rights reserved
                                </p>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600">PID: {Math.floor(Math.random() * 9000) + 1000}</span>
                                    <button
                                        onClick={handleReboot}
                                        className="text-yellow-500 hover:text-yellow-400 transition-colors"
                                    >
                                        [reboot]
                                    </button>
                                </div>
                            </div>
                        </footer>
                    </div>
                )}
            </main>
        </div>
    )
}


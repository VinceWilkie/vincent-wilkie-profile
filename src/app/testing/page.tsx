import Link from "next/link"

type Design = {
    slug: string
    name: string
    description: string
    colors: string[]
    isNew?: boolean
}

const designs: Design[] = [
    {
        slug: `precision`,
        name: `Precision`,
        description: `Linear/Vercel-grade dark. Hairline borders, tight tracking, restrained indigo glow. Signals engineering excellence through craft and restraint rather than effects.`,
        colors: [`#08090A`, `#818CF8`, `#EDEDEF`],
        isNew: true,
    },
    {
        slug: `console`,
        name: `Console`,
        description: `Your dark/dev DNA rebuilt as a real product UI — sidebar nav, metric cards, expandable service rows, uptime strip. Technical credibility without the gimmick.`,
        colors: [`#0A0A0B`, `#34D399`, `#E4E4E7`],
        isNew: true,
    },
    {
        slug: `bento`,
        name: `Bento`,
        description: `Modular tile grid mixing identity, stats, skills, and projects at different densities. The current portfolio idiom — scannable, modern, easy to extend.`,
        colors: [`#0B0B0D`, `#2DD4BF`, `#141417`],
        isNew: true,
    },
    {
        slug: `spec-sheet`,
        name: `Spec Sheet`,
        description: `Light Swiss/technical editorial. Numbered sections, hairline rules, monospace metadata, paper background. Reads like a beautifully typeset engineering document.`,
        colors: [`#F7F6F3`, `#EA580C`, `#171717`],
        isNew: true,
    },
    {
        slug: `aurora`,
        name: `Aurora`,
        description: `Dark premium with drifting gradient mesh, glass panels, and gradient headlines. Product-launch polish — modern dark that isn't Matrix green.`,
        colors: [`#050510`, `#A78BFA`, `#38BDF8`],
        isNew: true,
    },
    {
        slug: `scroll-reveal`,
        name: `Scroll Reveal`,
        description: `Free-scroll layout with reversible fade/slide animations triggered by IntersectionObserver as sections enter the viewport.`,
        colors: [`#030712`, `#4ade80`, `#f9fafb`],
    },
    {
        slug: `brutalist`,
        name: `Brutalist`,
        description: `Bold, high-contrast design with stark typography, geometric shapes, and raw visual impact.`,
        colors: [`#000000`, `#FF3D00`, `#FFFFFF`],
    },
    {
        slug: `glassmorphism`,
        name: `Glassmorphism`,
        description: `Soft, dreamy aesthetic with frosted glass effects, gradient backgrounds, and subtle depth.`,
        colors: [`#667eea`, `#764ba2`, `rgba(255,255,255,0.25)`],
    },
    {
        slug: `editorial`,
        name: `Editorial`,
        description: `Clean, magazine-inspired layout with elegant serif typography and sophisticated spacing.`,
        colors: [`#1a1a1a`, `#c9a227`, `#f5f5f0`],
    },
    {
        slug: `terminal`,
        name: `Terminal`,
        description: `Retro hacker aesthetic with monospace fonts, phosphor glow, and nostalgic CRT vibes.`,
        colors: [`#0d0d0d`, `#00ff41`, `#003b00`],
    },
    {
        slug: `ide`,
        name: `IDE`,
        description: `VS Code-inspired editor layout with tabs, file explorer sidebar, line numbers, and syntax-highlighted code content.`,
        colors: [`#1e1e1e`, `#007acc`, `#d4d4d4`],
    },
    {
        slug: `cli-pipeline`,
        name: `CLI Pipeline`,
        description: `CI/CD pipeline dashboard with staged build, test, deploy, and notify phases connected by status indicators.`,
        colors: [`#0a0a0a`, `#22c55e`, `#f59e0b`],
    },
    {
        slug: `github-readme`,
        name: `GitHub README`,
        description: `GitHub profile and README.md aesthetic with repo cards, shields.io badge pills, and a contribution activity graph.`,
        colors: [`#0d1117`, `#238636`, `#58a6ff`],
    },
    {
        slug: `blueprint`,
        name: `Blueprint`,
        description: `Technical drawing aesthetic with graph-paper grid, dashed outlines, measurement annotations, and architectural diagrams.`,
        colors: [`#1a2744`, `#4a9eff`, `#ffffff`],
    },
    {
        slug: `matrix-card`,
        name: `Matrix Card`,
        description: `Floating resume card over animated Matrix rain with mouse-reactive character distortion.`,
        colors: [`#000000`, `#00ff41`, `#1a1a1a`],
    },
    {
        slug: `matrix-panels`,
        name: `Matrix Panels`,
        description: `Stacked horizontal bands with Matrix rain peeking through the gaps, clean magazine-style readability.`,
        colors: [`#000000`, `#00ff41`, `#0a0a0a`],
    },
    {
        slug: `matrix-sidebar`,
        name: `Matrix Sidebar`,
        description: `Professional two-column sidebar layout with sticky profile card, floating over interactive Matrix rain.`,
        colors: [`#000000`, `#00ff41`, `#111111`],
    },
    {
        slug: `matrix-accordion`,
        name: `Matrix Accordion`,
        description: `Large hero with collapsible accordion sections, compact layout letting the Matrix rain fill the space.`,
        colors: [`#000000`, `#00ff41`, `#050505`],
    },
]

export default function TestingIndexPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <header className="mb-16 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Design Lab
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Explore different single-page scrollable designs combining your links, about, and projects sections.
                        Each design is fully mobile-friendly and self-contained.
                    </p>
                </header>

                <div className="grid gap-6">
                    {designs.map((design, idx) => (
                        <Link
                            key={design.slug}
                            href={`/testing/${design.slug}`}
                            className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                            style={{
                                animationDelay: `${idx * 100}ms`,
                            }}
                        >
                            <div className="p-8 flex items-center gap-8">
                                {/* Color Preview */}
                                <div className="flex-shrink-0 flex gap-1">
                                    {design.colors.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-16 rounded-lg first:rounded-l-xl last:rounded-r-xl shadow-inner"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">
                                            {design.name}
                                        </h2>
                                        {design.isNew ? (
                                            <span className="px-2 py-1 text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 rounded-full text-emerald-300">
                                                NEW
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 text-xs font-medium bg-slate-700 rounded-full text-slate-300">
                                                Design #{idx + 1}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-400 leading-relaxed">
                                        {design.description}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </Link>
                    ))}
                </div>

                <footer className="mt-16 pt-8 border-t border-slate-700 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to main site
                    </Link>
                </footer>
            </div>
        </div>
    )
}


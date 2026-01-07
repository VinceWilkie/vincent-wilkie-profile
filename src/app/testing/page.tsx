import Link from "next/link"

const designs = [
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
                                        <span className="px-2 py-1 text-xs font-medium bg-slate-700 rounded-full text-slate-300">
                                            Design #{idx + 1}
                                        </span>
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


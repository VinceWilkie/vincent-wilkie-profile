"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"

const profile = {
    name: `Vincent Wilkie`,
    username: `VinceWilkie`,
    title: `Full Stack Software Developer`,
    bio: `Building delightful web experiences from scratch. 14+ years of pragmatic solutions, clean UX, and steady iteration across the full stack.`,
    location: `Canada`,
    avatar: `/vincent-wilkie-profile-picture.png`,
    followers: 42,
    following: 18,
}

const skillCategories = [
    {
        title: `Frontend`,
        skills: [
            { name: `React`, color: `#61DAFB`, textColor: `#000` },
            { name: `Vue`, color: `#4FC08D`, textColor: `#000` },
            { name: `Angular`, color: `#DD0031`, textColor: `#fff` },
            { name: `TypeScript`, color: `#3178C6`, textColor: `#fff` },
            { name: `SCSS`, color: `#CC6699`, textColor: `#fff` },
            { name: `Tailwind CSS`, color: `#06B6D4`, textColor: `#000` },
            { name: `Ionic`, color: `#3880FF`, textColor: `#fff` },
        ],
    },
    {
        title: `Backend & Data`,
        skills: [
            { name: `Node.js`, color: `#339933`, textColor: `#fff` },
            { name: `Express`, color: `#000000`, textColor: `#fff` },
            { name: `PHP`, color: `#777BB4`, textColor: `#fff` },
            { name: `Python`, color: `#3776AB`, textColor: `#fff` },
            { name: `MySQL`, color: `#4479A1`, textColor: `#fff` },
            { name: `NoSQL`, color: `#4DB33D`, textColor: `#fff` },
            { name: `REST APIs`, color: `#FF6C37`, textColor: `#fff` },
        ],
    },
    {
        title: `Cloud & Infrastructure`,
        skills: [
            { name: `AWS EC2`, color: `#FF9900`, textColor: `#000` },
            { name: `Lambda`, color: `#FF9900`, textColor: `#000` },
            { name: `S3`, color: `#569A31`, textColor: `#fff` },
            { name: `RDS`, color: `#527FFF`, textColor: `#fff` },
            { name: `CloudFormation`, color: `#FF4F8B`, textColor: `#fff` },
            { name: `SQS/SNS`, color: `#FF4F8B`, textColor: `#fff` },
            { name: `CI/CD`, color: `#2088FF`, textColor: `#fff` },
        ],
    },
    {
        title: `Full Stack Leadership`,
        skills: [
            { name: `Architecture`, color: `#6e5494`, textColor: `#fff` },
            { name: `Legacy Modernization`, color: `#8B5CF6`, textColor: `#fff` },
            { name: `Cross-Platform`, color: `#0EA5E9`, textColor: `#fff` },
            { name: `Mentoring`, color: `#F59E0B`, textColor: `#000` },
        ],
    },
]

const projects = [
    {
        name: `liati`,
        url: `https://liati.ca`,
        description: `Digital narrative + fashion brand`,
        language: `TypeScript`,
        languageColor: `#3178C6`,
        stars: 12,
        forks: 3,
        status: `IN_DEV`,
        image: `/projects/liati.png`,
    },
    {
        name: `ctrlaltrandom`,
        url: `https://ctrlaltrandom.com`,
        description: `Tech podcast`,
        language: `TypeScript`,
        languageColor: `#3178C6`,
        stars: 8,
        forks: 1,
        status: `IN_DEV`,
        image: `/projects/ctrlaltrandom.png`,
    },
]

const contacts = [
    { icon: `📞`, label: `+1-289-698-4004`, href: `tel:+12896984004` },
    { icon: `✉️`, label: `vincentwilkie@hotmail.com`, href: `mailto:vincentwilkie@hotmail.com` },
    { icon: `💼`, label: `/in/vdubworkshop`, href: `https://www.linkedin.com/in/vdubworkshop` },
    { icon: `🐙`, label: `VinceWilkie`, href: `https://github.com/VinceWilkie` },
    { icon: `🐦`, label: `@vincentwilkie`, href: `https://x.com/vincentwilkie` },
]

interface ThemeColors {
    bg: string
    surface: string
    border: string
    text: string
    textSecondary: string
    green: string
    link: string
    headerBg: string
}

const darkTheme: ThemeColors = {
    bg: `#0d1117`,
    surface: `#161b22`,
    border: `#30363d`,
    text: `#f0f6fc`,
    textSecondary: `#8b949e`,
    green: `#238636`,
    link: `#58a6ff`,
    headerBg: `#161b22`,
}

const lightTheme: ThemeColors = {
    bg: `#ffffff`,
    surface: `#f6f8fa`,
    border: `#d0d7de`,
    text: `#1f2328`,
    textSecondary: `#656d76`,
    green: `#1a7f37`,
    link: `#0969da`,
    headerBg: `#f6f8fa`,
}

const CONTRIBUTION_GREENS_DARK = [`#161b22`, `#0e4429`, `#006d32`, `#26a641`, `#39d353`]
const CONTRIBUTION_GREENS_LIGHT = [`#ebedf0`, `#9be9a8`, `#40c463`, `#30a14e`, `#216e39`]

function generateContributionData(): number[][] {
    const rows = 7
    const cols = 52
    const grid: number[][] = []
    for (let r = 0; r < rows; r++) {
        const row: number[] = []
        for (let c = 0; c < cols; c++) {
            const rand = Math.random()
            if (rand < 0.3) row.push(0)
            else if (rand < 0.5) row.push(1)
            else if (rand < 0.7) row.push(2)
            else if (rand < 0.85) row.push(3)
            else row.push(4)
        }
        grid.push(row)
    }
    return grid
}

function ContributionGraph({ theme, isDark }: { theme: ThemeColors; isDark: boolean }) {
    const greens = isDark ? CONTRIBUTION_GREENS_DARK : CONTRIBUTION_GREENS_LIGHT
    const grid = useMemo(() => generateContributionData(), [])

    return (
        <div>
            <h3
                style={{ color: theme.text, fontSize: `16px`, fontWeight: 600, marginBottom: `8px` }}
            >
                Contribution Activity
            </h3>
            <div
                style={{
                    overflowX: `auto`,
                    padding: `16px`,
                    border: `1px solid ${theme.border}`,
                    borderRadius: `6px`,
                    backgroundColor: theme.surface,
                }}
            >
                <div style={{ display: `flex`, gap: `3px` }}>
                    {Array.from({ length: grid[0].length }).map((_, colIdx) => (
                        <div key={colIdx} style={{ display: `flex`, flexDirection: `column`, gap: `3px` }}>
                            {grid.map((row, rowIdx) => (
                                <div
                                    key={`${colIdx}-${rowIdx}`}
                                    style={{
                                        width: `11px`,
                                        height: `11px`,
                                        borderRadius: `2px`,
                                        backgroundColor: greens[row[colIdx]],
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div
                    style={{
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `flex-end`,
                        gap: `4px`,
                        marginTop: `8px`,
                        fontSize: `11px`,
                        color: theme.textSecondary,
                    }}
                >
                    <span>Less</span>
                    {greens.map((color, i) => (
                        <div
                            key={i}
                            style={{
                                width: `11px`,
                                height: `11px`,
                                borderRadius: `2px`,
                                backgroundColor: color,
                            }}
                        />
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}

export default function GithubReadmePage() {
    const [isDark, setIsDark] = useState(true)
    const theme = isDark ? darkTheme : lightTheme

    return (
        <div
            style={{
                minHeight: `100vh`,
                backgroundColor: theme.bg,
                color: theme.text,
                fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif`,
                transition: `background-color 0.3s, color 0.3s`,
            }}
        >
            {/* Top nav bar */}
            <header
                style={{
                    backgroundColor: theme.headerBg,
                    borderBottom: `1px solid ${theme.border}`,
                    padding: `16px 24px`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `space-between`,
                }}
            >
                <div style={{ display: `flex`, alignItems: `center`, gap: `16px` }}>
                    <svg
                        height="32"
                        viewBox="0 0 16 16"
                        width="32"
                        fill={theme.text}
                    >
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                    </svg>
                    <span style={{ fontSize: `14px`, color: theme.textSecondary }}>
                        {profile.username}
                    </span>
                </div>
                <button
                    onClick={() => setIsDark(!isDark)}
                    style={{
                        background: `none`,
                        border: `1px solid ${theme.border}`,
                        borderRadius: `6px`,
                        padding: `6px 12px`,
                        color: theme.text,
                        cursor: `pointer`,
                        fontSize: `14px`,
                        display: `flex`,
                        alignItems: `center`,
                        gap: `6px`,
                    }}
                >
                    {isDark ? `☀️` : `🌙`}
                    <span>{isDark ? `Light` : `Dark`}</span>
                </button>
            </header>

            {/* Main content */}
            <div
                style={{
                    maxWidth: `1280px`,
                    margin: `0 auto`,
                    padding: `24px`,
                    display: `flex`,
                    gap: `24px`,
                    flexWrap: `wrap`,
                }}
            >
                {/* Left sidebar */}
                <aside
                    style={{
                        width: `296px`,
                        flexShrink: 0,
                    }}
                    className="gh-sidebar"
                >
                    <div style={{ position: `sticky`, top: `24px` }}>
                        <div
                            style={{
                                width: `296px`,
                                height: `296px`,
                                borderRadius: `50%`,
                                overflow: `hidden`,
                                border: `1px solid ${theme.border}`,
                                marginBottom: `16px`,
                            }}
                        >
                            <Image
                                src={profile.avatar}
                                alt={profile.name}
                                width={296}
                                height={296}
                                style={{ objectFit: `cover`, width: `100%`, height: `100%` }}
                                priority
                            />
                        </div>

                        <h1
                            style={{
                                fontSize: `24px`,
                                fontWeight: 600,
                                lineHeight: 1.25,
                                color: theme.text,
                                margin: 0,
                            }}
                        >
                            {profile.name}
                        </h1>
                        <p
                            style={{
                                fontSize: `20px`,
                                fontWeight: 300,
                                color: theme.textSecondary,
                                margin: `0 0 16px`,
                                lineHeight: 1.25,
                            }}
                        >
                            {profile.username}
                        </p>

                        <p
                            style={{
                                fontSize: `14px`,
                                color: theme.text,
                                marginBottom: `16px`,
                                lineHeight: 1.5,
                            }}
                        >
                            {profile.bio}
                        </p>

                        <button
                            style={{
                                width: `100%`,
                                padding: `5px 16px`,
                                fontSize: `14px`,
                                fontWeight: 500,
                                lineHeight: `20px`,
                                cursor: `pointer`,
                                borderRadius: `6px`,
                                border: `1px solid ${theme.border}`,
                                backgroundColor: theme.surface,
                                color: theme.text,
                                marginBottom: `16px`,
                            }}
                        >
                            Follow
                        </button>

                        <div
                            style={{
                                display: `flex`,
                                gap: `8px`,
                                fontSize: `14px`,
                                color: theme.textSecondary,
                                marginBottom: `16px`,
                                alignItems: `center`,
                            }}
                        >
                            <svg
                                height="16"
                                width="16"
                                viewBox="0 0 16 16"
                                fill={theme.textSecondary}
                            >
                                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4.001 4.001 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a.75.75 0 1 0 0 1.5 1.5 1.5 0 0 1 .666 2.844.75.75 0 0 0-.416.672v.352a.75.75 0 0 0 .574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 1 0 1.434-.44 5.01 5.01 0 0 0-2.56-3.012A3 3 0 0 0 11 4Z" />
                            </svg>
                            <span>
                                <strong style={{ color: theme.text }}>{profile.followers}</strong>{` followers`}
                            </span>
                            <span>·</span>
                            <span>
                                <strong style={{ color: theme.text }}>{profile.following}</strong>{` following`}
                            </span>
                        </div>

                        <div
                            style={{
                                display: `flex`,
                                alignItems: `center`,
                                gap: `6px`,
                                fontSize: `14px`,
                                color: theme.textSecondary,
                                marginBottom: `4px`,
                            }}
                        >
                            <svg
                                height="16"
                                width="16"
                                viewBox="0 0 16 16"
                                fill={theme.textSecondary}
                            >
                                <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" />
                            </svg>
                            <span>{profile.location}</span>
                        </div>

                        <div
                            style={{
                                display: `flex`,
                                alignItems: `center`,
                                gap: `6px`,
                                fontSize: `14px`,
                                color: theme.textSecondary,
                            }}
                        >
                            <svg
                                height="16"
                                width="16"
                                viewBox="0 0 16 16"
                                fill={theme.textSecondary}
                            >
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z" />
                                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                            <span>{profile.title}</span>
                        </div>
                    </div>
                </aside>

                {/* Right main content */}
                <main style={{ flex: 1, minWidth: 0 }}>
                    {/* README.md */}
                    <section
                        style={{
                            border: `1px solid ${theme.border}`,
                            borderRadius: `6px`,
                            marginBottom: `24px`,
                            overflow: `hidden`,
                        }}
                    >
                        <div
                            style={{
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                padding: `8px 16px`,
                                backgroundColor: theme.surface,
                                borderBottom: `1px solid ${theme.border}`,
                                fontSize: `14px`,
                                fontWeight: 600,
                                color: theme.text,
                            }}
                        >
                            <svg
                                height="16"
                                width="16"
                                viewBox="0 0 16 16"
                                fill={theme.textSecondary}
                            >
                                <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
                            </svg>
                            <span>README.md</span>
                        </div>

                        <div style={{ padding: `24px 32px` }}>
                            <h1
                                style={{
                                    fontSize: `32px`,
                                    fontWeight: 600,
                                    borderBottom: `1px solid ${theme.border}`,
                                    paddingBottom: `8px`,
                                    marginBottom: `16px`,
                                    color: theme.text,
                                }}
                            >
                                {`👋 Hi there, I'm Vincent Wilkie`}
                            </h1>

                            <p
                                style={{
                                    fontSize: `16px`,
                                    lineHeight: 1.6,
                                    color: theme.text,
                                    marginBottom: `24px`,
                                }}
                            >
                                {`Full Stack Software Developer with 14+ years of experience building delightful web experiences from scratch. I focus on pragmatic solutions, clean UX, and steady iteration across the full stack.`}
                            </p>

                            {/* Tech Stack */}
                            <h2
                                style={{
                                    fontSize: `24px`,
                                    fontWeight: 600,
                                    borderBottom: `1px solid ${theme.border}`,
                                    paddingBottom: `8px`,
                                    marginBottom: `16px`,
                                    color: theme.text,
                                }}
                            >
                                {`🛠️ Tech Stack`}
                            </h2>

                            {skillCategories.map((category) => (
                                <div key={category.title} style={{ marginBottom: `16px` }}>
                                    <h3
                                        style={{
                                            fontSize: `16px`,
                                            fontWeight: 600,
                                            color: theme.text,
                                            marginBottom: `8px`,
                                        }}
                                    >
                                        {category.title}
                                    </h3>
                                    <div
                                        style={{
                                            display: `flex`,
                                            flexWrap: `wrap`,
                                            gap: `6px`,
                                        }}
                                    >
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill.name}
                                                style={{
                                                    display: `inline-block`,
                                                    padding: `4px 10px`,
                                                    borderRadius: `9999px`,
                                                    fontSize: `12px`,
                                                    fontWeight: 600,
                                                    backgroundColor: skill.color,
                                                    color: skill.textColor,
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Contribution Activity */}
                            <div style={{ marginTop: `24px` }}>
                                <h2
                                    style={{
                                        fontSize: `24px`,
                                        fontWeight: 600,
                                        borderBottom: `1px solid ${theme.border}`,
                                        paddingBottom: `8px`,
                                        marginBottom: `16px`,
                                        color: theme.text,
                                    }}
                                >
                                    {`📊 Contribution Activity`}
                                </h2>
                                <ContributionGraph theme={theme} isDark={isDark} />
                            </div>
                        </div>
                    </section>

                    {/* Pinned Repositories */}
                    <section style={{ marginBottom: `24px` }}>
                        <h2
                            style={{
                                fontSize: `16px`,
                                fontWeight: 400,
                                color: theme.text,
                                marginBottom: `8px`,
                            }}
                        >
                            {`Pinned`}
                        </h2>
                        <div
                            style={{
                                display: `grid`,
                                gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 340px), 1fr))`,
                                gap: `16px`,
                            }}
                        >
                            {projects.map((project) => (
                                <div
                                    key={project.name}
                                    style={{
                                        border: `1px solid ${theme.border}`,
                                        borderRadius: `6px`,
                                        padding: `16px`,
                                        backgroundColor: theme.surface,
                                        display: `flex`,
                                        flexDirection: `column`,
                                        justifyContent: `space-between`,
                                    }}
                                >
                                    <div>
                                        <div
                                            style={{
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `8px`,
                                                marginBottom: `8px`,
                                            }}
                                        >
                                            <svg
                                                height="16"
                                                width="16"
                                                viewBox="0 0 16 16"
                                                fill={theme.textSecondary}
                                            >
                                                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                                            </svg>
                                            <Link
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    fontSize: `14px`,
                                                    fontWeight: 600,
                                                    color: theme.link,
                                                    textDecoration: `none`,
                                                }}
                                            >
                                                {project.name}
                                            </Link>
                                            <span
                                                style={{
                                                    fontSize: `12px`,
                                                    padding: `0 7px`,
                                                    border: `1px solid ${theme.border}`,
                                                    borderRadius: `9999px`,
                                                    color: theme.textSecondary,
                                                    lineHeight: 1.8,
                                                }}
                                            >
                                                {`Public`}
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: `12px`,
                                                color: theme.textSecondary,
                                                marginBottom: `16px`,
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {project.description}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: `flex`,
                                            alignItems: `center`,
                                            gap: `16px`,
                                            fontSize: `12px`,
                                            color: theme.textSecondary,
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `4px`,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: `12px`,
                                                    height: `12px`,
                                                    borderRadius: `50%`,
                                                    backgroundColor: project.languageColor,
                                                    display: `inline-block`,
                                                }}
                                            />
                                            {project.language}
                                        </span>
                                        <span
                                            style={{
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `4px`,
                                            }}
                                        >
                                            <svg
                                                height="16"
                                                width="16"
                                                viewBox="0 0 16 16"
                                                fill={theme.textSecondary}
                                            >
                                                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                                            </svg>
                                            {project.stars}
                                        </span>
                                        <span
                                            style={{
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `4px`,
                                            }}
                                        >
                                            <svg
                                                height="16"
                                                width="16"
                                                viewBox="0 0 16 16"
                                                fill={theme.textSecondary}
                                            >
                                                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                                            </svg>
                                            {project.forks}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact */}
                    <section
                        style={{
                            border: `1px solid ${theme.border}`,
                            borderRadius: `6px`,
                            overflow: `hidden`,
                        }}
                    >
                        <div
                            style={{
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                padding: `8px 16px`,
                                backgroundColor: theme.surface,
                                borderBottom: `1px solid ${theme.border}`,
                                fontSize: `14px`,
                                fontWeight: 600,
                                color: theme.text,
                            }}
                        >
                            <svg
                                height="16"
                                width="16"
                                viewBox="0 0 16 16"
                                fill={theme.textSecondary}
                            >
                                <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
                            </svg>
                            <span>{`CONTACT.md`}</span>
                        </div>
                        <div style={{ padding: `24px 32px` }}>
                            <h2
                                style={{
                                    fontSize: `24px`,
                                    fontWeight: 600,
                                    borderBottom: `1px solid ${theme.border}`,
                                    paddingBottom: `8px`,
                                    marginBottom: `16px`,
                                    color: theme.text,
                                }}
                            >
                                {`📬 Get in Touch`}
                            </h2>
                            <ul
                                style={{
                                    listStyle: `none`,
                                    padding: 0,
                                    margin: 0,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `12px`,
                                }}
                            >
                                {contacts.map((contact) => (
                                    <li
                                        key={contact.label}
                                        style={{
                                            fontSize: `14px`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            gap: `8px`,
                                        }}
                                    >
                                        <span style={{ fontSize: `18px`, width: `24px`, textAlign: `center` }}>
                                            {contact.icon}
                                        </span>
                                        <Link
                                            href={contact.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: theme.link,
                                                textDecoration: `none`,
                                            }}
                                        >
                                            {contact.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 768px) {
                    .gh-sidebar {
                        width: 100% !important;
                    }
                    .gh-sidebar > div > div:first-child {
                        width: 200px !important;
                        height: 200px !important;
                        margin: 0 auto 16px !important;
                    }
                }
            `}</style>
        </div>
    )
}

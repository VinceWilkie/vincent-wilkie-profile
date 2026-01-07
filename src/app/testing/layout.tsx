import type { Metadata } from "next"

export const metadata: Metadata = {
    title: `Testing Designs | Vincent Wilkie`,
    description: `Design experiments for vincentwilkie.ca`,
}

export default function TestingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // This layout is intentionally minimal - no wrapper
    // Each design controls its own full-page styling
    return <>{children}</>
}

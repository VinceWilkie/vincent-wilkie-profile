import Link from "next/link"

export default function RootIndexPage() {
    return (
        <div className="space-y-4 px-4 sm:px-0">
            <h1 className="text-2xl sm:text-3xl font-semibold">Preview</h1>
            <p className="text-sm sm:text-base text-gray-600">Explore the redesigned pages here:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li><Link className="underline hover:text-blue-600 transition-colors" href="/preview/links">Links</Link></li>
                <li><Link className="underline hover:text-blue-600 transition-colors" href="/preview/about">About</Link></li>
                <li><Link className="underline hover:text-blue-600 transition-colors" href="/preview/projects">Projects</Link></li>
            </ul>
            <div className="mt-8 pt-4 border-t">
                <h2 className="text-xl font-semibold mb-2">Design Testing</h2>
                <Link className="underline hover:text-blue-600 transition-colors" href="/testing">
                    View design experiments →
                </Link>
            </div>
        </div>
    )
}


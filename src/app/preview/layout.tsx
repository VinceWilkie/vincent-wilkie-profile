import Link from "next/link";

export default function PreviewLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur z-10">
        <nav className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">← Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/preview" className="font-medium hover:underline">Preview</Link>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            <Link href="/preview/links" className="hover:underline">Links</Link>
            <Link href="/preview/about" className="hover:underline">About</Link>
            <Link href="/preview/projects" className="hover:underline">Projects</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 grow">
        {children}
      </main>
      <footer className="border-t py-5 sm:py-6 text-center text-xs text-gray-500">
        Preview area — does not affect existing site
      </footer>
    </div>
  );
}



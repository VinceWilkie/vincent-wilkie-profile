import Link from "next/link";

export default function PreviewIndexPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Preview</h1>
      <p className="text-sm text-gray-600">Explore the redesigned pages here:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><Link className="underline" href="/preview/links">Links</Link></li>
        <li><Link className="underline" href="/preview/about">About</Link></li>
        <li><Link className="underline" href="/preview/projects">Projects</Link></li>
      </ul>
    </div>
  );
}



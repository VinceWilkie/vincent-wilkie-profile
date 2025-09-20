import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  status?: string;
};

const projects: Project[] = [
  {
    slug: "liati",
    title: "LIATI",
    description: "A digital narrative weaving personal journey with fashion brand storytelling.",
    image: "/projects/liati.png",
    href: "https://liati.ca",
    status: "In Development",
  },
  {
    slug: "ctrlaltrandom",
    title: "CtrlAltRandom",
    description: "The Ctrl Alt Random Podcast is a place where we dive into random tech topics—from groundbreaking innovations to quirky gadgets. Expect fun, candid chats and surprising discoveries in every episode. Tech has never been this unpredictable—Click here to join the randomness!",
    image: "/projects/ctrlaltrandom.png",
    href: "https://ctrlaltrandom.com",
    status: "In Development",
  },
];

export default function ProjectsPreviewPage() {
  return (
    <section className="space-y-6">
      <FadeIn className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm sm:text-base text-gray-600">Creative experiments and side projects I'm working on.</p>
      </FadeIn>
      <ul className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <li key={p.slug} className="rounded-lg border overflow-hidden bg-white">
            <FadeIn delayMs={60 + idx * 100}>
              <Link
                href={p.href ?? "#"}
                className="block group"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="aspect-[16/10] sm:aspect-video relative bg-gray-100">
                  <Image src={p.image} alt={p.title} fill className="object-contain" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="p-4 sm:p-5 space-y-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base sm:text-lg font-medium group-hover:underline">{p.title}</h2>
                    {p.status && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-[0.95rem] text-gray-600">{p.description}</p>
                </div>
              </Link>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}



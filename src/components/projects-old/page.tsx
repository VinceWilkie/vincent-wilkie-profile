"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="project-list grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4 place-items-center">
      <div className="h-[300px] w-[300px] sm:h-[225px] sm:w-[225px]">
        <Link href="./projects/ctrl-alt-random" className="relative block h-full rounded-xl">
          <Image
            className="rounded-xl"
            src="/projects/ctrlaltrandom.png"
            alt="Ctrl Alt Random Podcast"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
      <div className="h-[300px] w-[300px] sm:h-[225px] sm:w-[225px]">
        <Link href="./projects/liati" className="relative block h-full rounded-xl">
          <Image
            className="rounded-xl shadow-xl"
            src="/projects/liati.png"
            alt="Liati.ca"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </div>
  );
}
"use client";
import VWLink from "@/components/VWLink";
import Image from "next/image";

export default function Page() {
  return (
    <div className="project flex flex-col items-center gap-4">
      <Image
        className="visible rounded-xl"
        src="/projects/liati.png"
        alt="Liati.ca"
        width={300}
        height={300}
      />
      <p className="text-justify">A work-in-progress website for a fashion and accessory brand founded by my mom Lise!</p>
      <VWLink href="https://liati.ca" classes={`w-full`}>
        <div className="flex justify-between w-full">
          <span>View Website</span>
          <span>&rarr;</span>
        </div>
      </VWLink>
    </div>
  );
}

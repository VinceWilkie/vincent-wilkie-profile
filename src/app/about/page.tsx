"use client";
import Image from "next/image";
import { LinkedinIcon, LinkedinShareButton } from "next-share";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="VW Logo"
        priority
      />
      <h1 className="text-2xl mb-4">Welcome!</h1>
      <Link href="https://www.linkedin.com/in/vdubworkshop/" target="_blank" className="pushable">
        <span className="pushable-shadow"></span>
        <span className="edge"></span>
        <span className="front">
          <span className="flex items-center gap-2">
            <LinkedinIcon size={32} className="rounded" />
            LinkedIn
          </span>
        </span>
      </Link>
    </div>
  );
}

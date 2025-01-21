"use client";
import Image from "next/image";
import { FacebookIcon, LinkedinIcon } from "next-share";
import Link from "../../components/Link";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen overflow-y-hidden">
      <Image
        className="mb-8"
        src="/VW.png"
        width={300}
        height={300}
        alt="VW Logo"
        priority
      />
      <Link href="https://www.linkedin.com/in/vdubworkshop/" classes="mb-4">
        <LinkedinIcon size={32} className="rounded" />
        LinkedIn
      </Link>
      <Link href="https://www.facebook.com/vincewilkie1">
        <FacebookIcon size={32} className="rounded" />
        Facebook
      </Link>
    </div>
  );
}

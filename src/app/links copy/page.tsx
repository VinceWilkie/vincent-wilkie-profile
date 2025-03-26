"use client";
import Image from "next/image";
import Link from "../../components/VWLink";
import { FacebookIcon, LinkedinIcon } from "next-share";

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
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <Link href="tel:+1289-698-4004" classes="phone">
            <span className="material-symbols-outlined">phone</span>
            Phone
          </Link>
        </div>
        <div className="w-1/2">
          <Link href="mailto:vincentwilkie@hotmail.com" classes="email">
            <span className="material-symbols-outlined">mail</span>
            Email
          </Link>
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <Link href="https://www.linkedin.com/in/vdubworkshop/" classes="linkedin">
            <LinkedinIcon size={24} />
            LinkedIn
          </Link>
        </div>
        <div className="w-1/2">
          <Link href="https://www.facebook.com/vincewilkie1" classes="facebook">
            <FacebookIcon size={24} />
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}

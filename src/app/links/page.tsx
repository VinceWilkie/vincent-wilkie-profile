"use client";
import Image from "next/image";
import Link from "../../components/Link";
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
      <Link href="tel:+1289-698-4004" classes="mb-4 phone">
        <span className="material-symbols-outlined">phone</span>
        Phone
      </Link>
      <Link href="mailto:vincentwilkie@hotmail.com" classes="mb-4 email">
        <span className="material-symbols-outlined">mail</span>
        Email
      </Link>
      <Link href="https://www.linkedin.com/in/vdubworkshop/" classes="mb-4 linkedin">
        <LinkedinIcon size={24} />
        LinkedIn
      </Link>
      <Link href="https://www.facebook.com/vincewilkie1" classes="facebook">
        <FacebookIcon size={24} />
        Facebook
      </Link>
    </div>
  );
}

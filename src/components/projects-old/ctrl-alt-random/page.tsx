"use client";
import VWLink from "@/components/VWLink";
import Image from "next/image";

export default function Page() {
  return (
    <div className="project flex flex-col items-center gap-4">
      <Image
        className="visible rounded-xl"
        src="/projects/ctrlaltrandom.png"
        alt="Ctrl Alt Random Podcast"
        width={300}
        height={300}
      />
      <p className="text-justify">The Ctrl Alt Random Podcast is a place where we dive into random tech topics—from groundbreaking innovations to quirky gadgets. Expect fun, candid chats and surprising discoveries in every episode. Tech has never been this unpredictable—Click the button below to join the randomness!</p>
      <VWLink href="https://ctrlaltrandom.com" classes={`w-full`}>
        <div className="flex justify-between w-full">
          <span>View Website</span>
          <span>&rarr;</span>
        </div>
      </VWLink>
    </div>
  );
}

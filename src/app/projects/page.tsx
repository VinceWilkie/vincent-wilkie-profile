"use client";
import VWLink from "@/components/VWLink";
import Project from "@/models/Project";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // setTimeout(() => {
      // document.querySelector(`.delay-animation`)?.classList.remove('invisible');
    // }, 1000);
  }, []);

  const ctrlAltRandom = new Project();
  ctrlAltRandom.parseJson({
    name: "The Ctrl Alt Random Podcast",
    description: "Welcome to the Ctrl + Alt + Random podcast, where we dive into random tech topics—from groundbreaking innovations to quirky gadgets. Expect fun, candid chats and surprising discoveries in every episode. Tech has never been this unpredictable—hit play and join the randomness!",
    url: "https://ctrlaltrandom.com",
    urlText: "View website",
    urlClasses: "ctrlaltrandom",
    image: {
      src: "/projects/ctrlaltrandom.png",
      alt: "Ctrl Alt Random Podcast",
      width: 300,
      height: 300
    }
  });

  const projects = [ctrlAltRandom];

  return (
    <div className="container mx-auto flex flex-col items-center h-screen overflow-y-hidden">
      <Link href="/links" className="text-xl absolute left-4 top-4 hover:bg-gray-500/50 p-2 rounded-lg cursor-pointer">&larr; Back</Link>
      <div className="mb-4">
        <Image
          className="mb-4"
          src="/VW.png"
          width={300}
          height={300}
          alt="VW Logo"
          priority
        />
        <h1 className="text-3xl text-center">Projects</h1>
        <p className="text-xl text-center"></p>
      </div>
      <div className="project-list flex flex-col gap-4 mb-14 overflow-y-scrollw">
        {projects.map(({ name, description, image: { src, alt, width, height }, url, urlText, urlClasses }, index) => (
          <div
            key={`project-list-item-`+index}
            className={`project-list-item p-4 shadow rounded-xl border flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 bg-gray-100`}
          >
            <Image
              className="visible rounded-xl"
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
            <div className="info flex flex-col gap-4">
              <h1 className="text-xl font-bold">{name}</h1>
              <h1 className="text-lg text-left">About:</h1>
              <p className="text-justify">{description}</p>
              <VWLink href={url} classes={`w-full${urlClasses ? ` ` + urlClasses : ``}`}>
                <div className="flex justify-between w-full font-bold">
                  <span>{urlText}</span>
                  <span>&rarr;</span>
                </div>
              </VWLink>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center p-4">
          <h1 className="text-3xl font-bold">More Coming Soon</h1>
          <p className="text-justify">Check this page later for any new and exciting projects that I may be working on!</p>
        </div>
      </div>
    </div>
  );
}

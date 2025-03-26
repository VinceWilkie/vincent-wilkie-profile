"use client";
import Image from "next/image";
import VWLink from "../../components/VWLink";
import { FacebookIcon, LinkedinIcon } from "next-share";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const elements = document.querySelectorAll('.anim');
    // elements.forEach(el => el.classList.add('invisible'));
    elements.forEach((el, idx) => {
      setTimeout(() => {
        el.classList.remove('invisible');
        el.classList.add('animate-fadeUp');
      }, 200 + (100 * idx));
    });
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen overflow-y-hidden">
      <div style={{"width":"300px","maxWidth":"300px"}}>
        <Image
          className="invisible anim anim-a mb-8"
          src="/VW.png"
          width={300}
          height={300}
          alt="VW Logo"
          priority
        />
        <div className="flex gap-4 mb-4">
          <VWLink href="tel:+1289-698-4004" classes="invisible anim anim-b phone w-1/2">
            <span className="material-symbols-outlined">phone</span>
            Phone
          </VWLink>
          <VWLink href="mailto:vincentwilkie@hotmail.com" classes="invisible anim anim-c email w-1/2">
            <span className="material-symbols-outlined">mail</span>
            Email
          </VWLink>
        </div>
        <div className="flex gap-4 mb-4">
          <VWLink href="https://www.linkedin.com/in/vdubworkshop/" classes="invisible anim anim-d linkedin w-1/2">
            <LinkedinIcon size={24} />
            LinkedIn
          </VWLink>
          <VWLink href="https://www.facebook.com/vincewilkie1" classes="invisible anim anim-e facebook w-1/2">
            <FacebookIcon size={24} />
            Facebook
          </VWLink>
        </div>
        <div className="flex">
          <VWLink href="./projects" classes="w-full invisible anim anim-f" target="_self">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-2">
                <svg className="fill-black-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"/></svg>
                <span>Projects</span>
              </div>
              <span>&rarr;</span>
            </div>
          </VWLink>
        </div>
      </div>
    </div>
  );
}

"use client";
import VWLink from "@/components/VWLink";
import { FacebookIcon, LinkedinIcon } from "next-share";
import Image from "next/image";
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
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="landing flex-auto flex flex-col justify-center" style={{"width":"300px","maxWidth":"300px"}}>
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
            <span className="material-symbols">phone</span>
            Phone
          </VWLink>
          <VWLink href="mailto:vincentwilkie@hotmail.com" classes="invisible anim anim-c email w-1/2">
            <span className="material-symbols">mail</span>
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
        <div className="flex gap-4 mb-4">
          <VWLink href="./projects" classes="w-full invisible anim anim-f" target="_self">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="material-symbols">folder_open</span>
                <span>Projects</span>
              </div>
              <span>&rarr;</span>
            </div>
          </VWLink>
        </div>
        <div className="flex">
          <VWLink href="./about" classes="w-full invisible anim anim-g" target="_self">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="material-symbols">face</span>
                <span>About Me</span>
              </div>
              <span>&rarr;</span>
            </div>
          </VWLink>
        </div>
      </div>
      <div className="footer text-center p-4">
        &copy; Copyright {new Date().getFullYear()} - Vincent Wilkie
      </div>
    </div>
  );
}

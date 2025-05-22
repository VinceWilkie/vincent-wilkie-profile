"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="about flex justify-center gap-4 p-4 h-screen w-screen">
      <div className="flex flex-col items-center max-w-[75vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw] h-full">
        <Image
          className="hover:opacity-50 cursor-pointer"
          src="/VW.png"
          width={50}
          height={50}
          alt="VW Logo"
          priority
          onClick={() => window.open(`/`, `_self`)}
        />
        <span className="material-symbols text-9xl">face</span>
        <p className="text-justify grow">Hi, my name is Vince. I am a Full Stack Software Engineer with a rich background. I have spent my career contributing to the printing, marketing, and web industries. My technical toolkit includes proficiency in various programming languages, alongside strong capabilities in computer repair, maintenance, and system/database administration. My journey began with a robust engineering education at Mohawk College, and I'm dedicated to leveraging my skills to build impactful technology.</p>
        <div className="footer text-center p-4">
          &copy; Copyright {new Date().getFullYear()} - Vincent Wilkie
        </div>
      </div>
    </div>
  );
}

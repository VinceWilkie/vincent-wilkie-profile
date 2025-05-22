"use client";
import VWLink from "@/components/VWLink";
import ProjectModel from "@/models/Project";
import Image from "next/image";

export default function Project({
  project
}: Readonly<{
  project: ProjectModel
}>) {
  return (
    <div className="project-list-item p-4 flex flex-col items-center md:flex-row md:items-start text-center md:text-left gap-4">
      <Image
        className="visible rounded-xl"
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
      />
      <div className="info flex flex-col h-full justify-between">
        <div className="about">
          <h1 className="text-xl font-bold mb-2">{project.name}</h1>
          <h1 className="text-lg text-left mb-1">About:</h1>
          <p className="text-justify mb-4">{project.description}</p>
        </div>
        <VWLink href={project.url} classes={`w-full${project.urlClasses ? ` ` + project.urlClasses : ``}`}>
          <div className="flex justify-between w-full font-bold">
            <span>{project.urlText}</span>
            <span>&rarr;</span>
          </div>
        </VWLink>
      </div>
    </div>
  );
}
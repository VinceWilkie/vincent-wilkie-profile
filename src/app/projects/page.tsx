"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Page() {
  const top = useRef<null | HTMLDivElement>(null);
  const projects = [
    {
      ref: useRef<null | HTMLDivElement>(null),
      title: ``,
      image: `/projects/ctrlaltrandom.png`,
      url: `https://ctrlaltrandom.com`,
      classes: `bg-black text-white`,
      backgroundColor: `rgba(255, 255, 255, 0.1)`
    },
    {
      ref: useRef<null | HTMLDivElement>(null),
      title: ``,
      image: `/projects/liati.png`,
      url: `https://liati.ca`,
      classes: ``,
      backgroundColor: `rgba(0, 0, 0, 0.1)`
    },
  ];

  const scrollToElement = (index: number) => {
    const project = projects[index];

    if (project && project.ref.current) {
      project.ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (index === -1) {
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    top.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToUrl = (url: string, target: string = `_blank`) => {
    window.open(url, target);
  };

  return (
    <div className="projects overflow-x-hidden" ref={top}>
      <div className="projects-slide relative h-screen w-screen flex flex-col items-center justify-center">
        <div className="relative flex w-[60vw] h-[50vw] md:w-[50vw] md:h-[40vh] lg:w-[40vw] lg:h-[30vh]">
          <Image
            className="cursor-pointer hover:opacity-75"
            src="/VW.png"
            alt="Vincent Wilkie"
            fill
            style={{ objectFit: 'contain' }}
            sizes="50vw"
            onClick={() => navigateToUrl(`/`, `_self`)}
          />
          {/* <div className="overlay absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 rounded-xl cursor-pointer" style={{ transition: `opacity 0.3s ease`, backgroundColor: `rgba(0, 0, 0, 0.1)` }}></div> */}
        </div>
        <h1 className="text-5xl">Projects</h1>
        <span className="material-symbols absolute bottom-[10px] text-6xl bounce2 cursor-pointer" onClick={() => scrollToElement(0)}>keyboard_double_arrow_down</span>
      </div>
      {projects.map(({ ref, title, url, classes, image }, index) => {
        return (
          <div className={`projects-slide relative h-screen w-screen flex flex-col items-center justify-center${classes ? ` `+classes : ``}`} ref={ref} key={index}>
            <div className="relative flex w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[60vw] md:h-[50vh]">
              <Image
                className="cursor-pointer hover:opacity-75"
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'contain' }}
                sizes="50vw"
                onClick={() => navigateToUrl(url)}
              />
              {/* <div className="overlay absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 rounded-xl cursor-pointer" style={{ transition: `opacity 0.3s ease`, backgroundColor }}></div> */}
            </div>
            {title && <h1 className="text-5xl">{title}</h1>}
            {index - 1 > -2 && <span className="material-symbols absolute top-[10px] text-6xl bounce2 cursor-pointer" onClick={() => scrollToElement(index-1)}>keyboard_double_arrow_up</span>}
            {index + 1 < projects.length && <span className="material-symbols absolute bottom-[10px] text-6xl bounce2 cursor-pointer" onClick={() => scrollToElement(index+1)}>keyboard_double_arrow_down</span>}
            <span className="material-symbols absolute bottom-[50px] right-[50px] text-3xl cursor-pointer" onClick={scrollToTop}>arrow_upward</span>
          </div>
        );
      })}
      <div className="footer text-center">
        &copy; Copyright {new Date().getFullYear()} - Vincent Wilkie
      </div>
    </div>
  );
}
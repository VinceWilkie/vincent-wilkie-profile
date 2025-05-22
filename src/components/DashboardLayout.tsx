"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import SidebarButton from "./SidebarButton";
import Link from "next/link";
import { Fragment } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    {
      title: `Home`,
      href: `/`,
      icon: `home`
    },
    {
      title: `Projects`,
      href: `/projects`,
      icon: `folder_open`
    },
    {
      title: `About Me`,
      href: `/about`,
      icon: `face`
    },
    {
      title: `Ctrl + Alt + Random`,
      href: `/projects/ctrl-alt-random`
    },
    {
      title: `LIATI`,
      href: `/projects/liati`
    }
  ];
  const pathname = usePathname();
  const pathNames = pathname.split(`/`).filter(path => path);

  return (
    <div className="dashboard-layout h-screen w-screen min-h-screen min-w-screen flex flex-col">
      <div className="navbar h-[50px] flex gap-2 border-b border-black box-content">
        <div className="logo-wrapper h-[50px] min-h-[50px] w-[50px] min-w-[50px] flex items-center justify-center box-content border-r border-black">
          <Image
            src="/VW.png"
            width={40}
            height={40}
            alt="VW Logo"
            priority
          />
        </div>
        <div className="breadcrumbs flex items-center grow">
          {
            pathNames.map((link, index) => {
              let href = `/${pathNames.slice(0, index + 1).join(`/`)}`;
              let itemLink = navLinks.find(({ href }) => href.includes(link))?.title;

              return (
                <Fragment key={index}>
                  {pathNames.length !== index + 1 ? <Link className="font-bold text-blue-500" href={href}>{itemLink}</Link> : <span>{itemLink}</span>}
                  {pathNames.length !== index + 1 && <span className="material-symbols">chevron_right</span>}
                </Fragment>
              );
            })
          }
        </div>
      </div>
      <div className="content-wrapper flex grow">
        <div className="sidebar w-[50px] min-w-[50px] box-content border-r border-black flex flex-col items-center gap-2 pt-[5px]">
          {navLinks.filter(({ icon }) => icon).map(({ href, icon }, index) => {
            return (
              <SidebarButton href={href} className={pathname.startsWith(href) && href !== `/` ? `bg-gray-300` : ``} key={index}>
                <span className="material-symbols filled">{icon}</span>
              </SidebarButton>
            );
          })}
        </div>
        <div className="content grow">
          {children}
        </div>
      </div>
    </div>
  );
}

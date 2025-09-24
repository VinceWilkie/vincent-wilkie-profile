"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const logoSize = 30;
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="sidebar rounded-xl p-2 flex flex-col gap-2 h-full border-x border-slate-500">
      <Link href="/about" className={`flex items-center gap-2 p-2 rounded-xl ${pathname === "/about" ? "bg-sky-800" : "bg-slate-500/10 hover:bg-slate-500/30"}`}>
        <Image
          src="/about.svg"
          alt="About"
          width={logoSize}
          height={logoSize}
          priority
        />
        About Me
      </Link>
      <div className="spacer flex flex-grow"></div>
      <Link href="/three" className={`flex items-center gap-2 p-2 rounded-xl ${pathname === "/three" ? "bg-sky-800" : "bg-slate-500/10 hover:bg-slate-500/30"}`}>
        <Image
          className="invert"
          src="/threejs.svg"
          alt="ThreeJS"
          width={logoSize}
          height={logoSize}
          priority
        />
        Testing ThreeJS
      </Link>
    </div>
  );
}

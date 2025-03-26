"use client";
import Link from "next/link";

export default function VWLink({
  children,
  href,
  classes,
  target
}: Readonly<{
  children: React.ReactNode,
  href: string,
  classes?: string,
  target?: string
}>) {
  return (
    <Link href={href} target={target ? target : `_blank`} className={`pushable link${classes ? ` `+classes : ``}`}>
      <span className="pushable-shadow"></span>
      <span className="edge"></span>
      <span className="front">
        <span className="flex items-center gap-2">
          {children}
        </span>
      </span>
    </Link>
  );
}

"use client";
import { default as NextLink } from "next/link";

export default function Link({
  children,
  href,
  classes
}: Readonly<{
  children: React.ReactNode,
  href: string,
  classes?: string
}>) {
  return (
    <NextLink href={href} target="_blank" className={`pushable link${classes ? ` `+classes : ``}`}>
      <span className="pushable-shadow"></span>
      <span className="edge"></span>
      <span className="front">
        <span className="flex items-center gap-2">
          {children}
        </span>
      </span>
    </NextLink>
  );
}

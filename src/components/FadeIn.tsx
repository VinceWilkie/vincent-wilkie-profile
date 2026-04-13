"use client";

import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  offsetY?: number;
};

export default function FadeIn({
  children,
  className,
  delayMs = 0,
  offsetY = 12,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transformHidden = `translateY(${offsetY}px)`;
  const transformShown = "translateY(0)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? transformShown : transformHidden,
        transitionProperty: "opacity, transform",
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}



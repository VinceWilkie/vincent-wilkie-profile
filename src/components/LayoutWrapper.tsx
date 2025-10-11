"use client";

import { useEffect, useRef } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeights = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
      }
    };

    // Update on mount
    updateHeights();

    // Update on window resize
    window.addEventListener('resize', updateHeights);

    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  return (
    <div className="min-h-dvh flex flex-col">
      <Navigation ref={headerRef} />

      {/* Main Content */}
      <main className="mx-auto w-full max-w-6xl flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10" style={{ minHeight: 'calc(100vh - var(--header-height, 80px) - var(--footer-height, 60px))' }}>
        {children}
      </main>

      <Footer ref={footerRef} />
    </div>
  );
}

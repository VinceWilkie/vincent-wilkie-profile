"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [pathname, setPathname] = useState("");
  const currentPathname = usePathname();

  useEffect(() => {
    setPathname(currentPathname);
  }, [currentPathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="fixed top-0 left-0 z-30 md:hidden text-black p-2 hover:bg-gray-100 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Vincent Wilkie</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            <Link
              href="/links"
              className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                isActive("/links")
                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="font-medium">Links</span>
              {isActive("/links") && <span className="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Current</span>}
            </Link>
            <Link
              href="/about"
              className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                isActive("/about")
                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">About</span>
              {isActive("/about") && <span className="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Current</span>}
            </Link>
            <Link
              href="/projects"
              className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                isActive("/projects")
                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="font-medium">Projects</span>
              {isActive("/projects") && <span className="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Current</span>}
            </Link>
          </nav>
        </div>
      </div>

      {/* Desktop Header */}
      <header className="hidden md:block border-b bg-white shadow-sm">
        <nav className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <h1 className="text-lg font-semibold text-gray-900">Vincent Wilkie</h1>
            <span className="text-gray-400 text-sm">Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/links"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/links")
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Links
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/about")
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/projects")
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Projects
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

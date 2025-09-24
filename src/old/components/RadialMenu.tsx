"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";

type LinkItem = {
  label: string;
  href: string;
  theme: string;
  icon: React.ReactNode;
};

type RadialMenuProps = {
  links: LinkItem[];
};

const getThemeClasses = (theme: string) => {
  const themes = {
    green: {
      bg: "bg-green-500",
      hoverBg: "hover:bg-green-600",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-green-100"
    },
    blue: {
      bg: "bg-blue-500",
      hoverBg: "hover:bg-blue-600",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-blue-100"
    },
    facebook: {
      bg: "bg-blue-600",
      hoverBg: "hover:bg-blue-700",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-blue-100"
    },
    linkedin: {
      bg: "bg-blue-700",
      hoverBg: "hover:bg-blue-800",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-blue-100"
    },
    twitter: {
      bg: "bg-gray-800",
      hoverBg: "hover:bg-gray-900",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-gray-100"
    },
    github: {
      bg: "bg-gray-800",
      hoverBg: "hover:bg-gray-900",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-gray-100"
    },
    purple: {
      bg: "bg-purple-500",
      hoverBg: "hover:bg-purple-600",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-purple-100"
    },
    orange: {
      bg: "bg-orange-500",
      hoverBg: "hover:bg-orange-600",
      shadow: "shadow-md",
      hoverShadow: "hover:shadow-lg",
      text: "text-white",
      hoverText: "group-hover:text-orange-100"
    }
  };

  return themes[theme as keyof typeof themes] || themes.green;
};

const getThemeColor = (theme: string): string => {
  const colorMap: { [key: string]: string } = {
    'bg-green-500': '#10b981',
    'bg-blue-500': '#3b82f6',
    'bg-blue-600': '#2563eb',
    'bg-blue-700': '#1d4ed8',
    'bg-gray-800': '#1f2937',
    'bg-purple-500': '#8b5cf6',
    'bg-orange-500': '#f97316'
  };

  const themeClasses = getThemeClasses(theme);
  return colorMap[themeClasses.bg] || '#10b981'; // Default to green
};

export default function RadialMenu({ links }: RadialMenuProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation on mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); // Small delay to ensure smooth animation
    return () => clearTimeout(timer);
  }, []);

  const typeText = (text: string, onComplete?: () => void) => {
    // Clear any existing typing animation
    if (typingTimeout) {
      clearInterval(typingTimeout);
    }

    setIsTyping(true);
    setDisplayedText("");
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        onComplete?.();
      }
    }, 80); // Adjust speed here (lower = faster)

    // Store the interval ID for cancellation
    setTypingTimeout(typeInterval);
  };

  const cancelTyping = () => {
    if (typingTimeout) {
      clearInterval(typingTimeout);
      setTypingTimeout(null);
    }
    setIsTyping(false);
    setDisplayedText("");
  };

  const handleMouseEnter = (label: string, index: number) => {
    setHoveredIndex(index);
    typeText(label);
  };

  const handleMouseLeave = () => {
    // Cancel typing animation and clear text immediately when leaving
    cancelTyping();
    setHoveredIndex(null);
  };

  return (
    <div className="mt-12">
      <div className="relative w-80 h-80 mx-auto">
        {/* Center rectangular box */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            className={`w-24 h-8 bg-gray-100 flex items-center justify-center backdrop-blur-sm px-2 border-2 transition-all duration-300 ${
              hoveredIndex !== null
                ? 'shadow-lg'
                : ''
            }`}
            style={{
              borderColor: hoveredIndex !== null
                ? getThemeColor(links[hoveredIndex].theme)
                : 'rgb(229 231 235 / 0.5)' // gray-200/50
            }}
          >
            <span className="text-base font-serif text-gray-700 text-center leading-tight min-h-[1.25rem]">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
        </div>

        {/* Connecting arrows */}
        {links.map((link, index) => {
          const angle = (index * 360) / links.length;
          const radius = 120;
          const theme = getThemeClasses(link.theme);

          // Calculate positions
          const iconX = Math.cos((angle - 90) * Math.PI / 180) * radius;
          const iconY = Math.sin((angle - 90) * Math.PI / 180) * radius;

          // Arrow starts from center and points toward icon center
          const arrowLength = Math.sqrt(iconX * iconX + iconY * iconY);
          const arrowAngle = Math.atan2(iconY, iconX) * 180 / Math.PI;

          // Determine if this line should be highlighted
          const isHighlighted = hoveredIndex === index;

          return (
            <div
              key={`arrow-${link.label}`}
              className={`absolute h-0.5 z-5 ${
                isHighlighted
                  ? `${theme.bg} shadow-lg`
                  : 'bg-gray-300/60'
              } ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
              style={{
                left: '50%',
                top: '50%',
                width: `${isAnimated ? arrowLength : 0}px`,
                transform: `rotate(${arrowAngle}deg)`,
                transformOrigin: 'left center',
                transition: isAnimated
                  ? `width 700ms ease-out ${index * 100}ms, opacity 700ms ease-out ${index * 100}ms`
                  : 'background-color 200ms ease-out, box-shadow 200ms ease-out',
              }}
            >
              {/* Arrow head */}
              <div
                className="absolute right-0 top-1/2 w-0 h-0 border-l-4 border-t-2 border-t-transparent border-b-2 border-b-transparent"
                style={{
                  transform: 'translateY(-50%)',
                  borderLeftColor: isHighlighted ? getThemeColor(link.theme) : 'rgb(156 163 175 / 0.6)'
                }}
              />
            </div>
          );
        })}

        {/* Radial menu items */}
        {links.map((link, index) => {
          const angle = (index * 360) / links.length;
          const radius = 120;
          const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
          const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
          const theme = getThemeClasses(link.theme);

          return (
            <div
              key={`radial-${link.label}`}
              className={`absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 group z-20 transition-all duration-700 ease-out ${
                isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{
                left: `calc(50% + ${isAnimated ? x : 0}px)`,
                top: `calc(50% + ${isAnimated ? y : 0}px)`,
                transitionDelay: `${index * 100}ms`, // Stagger the animation
              }}
              onMouseEnter={() => handleMouseEnter(link.label, index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className={`block w-full h-full rounded-full ${theme.bg} ${theme.hoverBg} ${theme.shadow} ${theme.hoverShadow} flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer`}
              >
                <div className={`${theme.text} ${theme.hoverText} transition-colors duration-200`}>
                  {link.icon}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

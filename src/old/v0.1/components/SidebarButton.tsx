import Link from "next/link";

export default function SidebarButton({
  children,
  className,
  href,
  rippleEffect = false
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  href: string;
  rippleEffect?: boolean
}>) {
  function createRipple(event: React.MouseEvent<HTMLAnchorElement>) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  return (
    <Link href={href} className={`sidebar-button h-[40px] w-[40px] rounded flex items-center justify-center ${className}`} onClick={rippleEffect ? createRipple : undefined}>{children}</Link>
  );
}

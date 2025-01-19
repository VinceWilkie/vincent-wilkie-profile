import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div>
        <h1 className="text-6xl">404</h1>
        <h2 className="text-2xl">Not Found</h2>
      </div>
      <Link href="/" className="pushable">
        <span className="pushable-shadow"></span>
        <span className="edge"></span>
        <span className="front">Return Home</span>
      </Link>
    </div>
  );
}

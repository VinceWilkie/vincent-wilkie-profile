import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 h-screen">
      <div>
        <h1 className="text-8xl text-center">404</h1>
        <h2 className="text-2xl text-center">How did you get here?</h2>
        <h2 className="text-lg text-center">Just stay away from the coffee machine...</h2>
      </div>
      <Link href="/" className="pushable">
        <span className="pushable-shadow"></span>
        <span className="edge"></span>
        <span className="front">Return Home</span>
      </Link>
    </div>
  );
}

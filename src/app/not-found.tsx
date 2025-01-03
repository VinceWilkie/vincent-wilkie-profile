import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">404</h1>
        <h2 className="text-2xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}

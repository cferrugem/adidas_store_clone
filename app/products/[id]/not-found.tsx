import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        <Image 
          src="/images/not-found.svg" 
          alt="Not Found" 
          width={200} 
          height={200} 
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <a className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
            Go Back Home
          </a>
        </Link>
      </div>
    </main>
  );
}

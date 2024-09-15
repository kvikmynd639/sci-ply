"use client";
import Link from 'next/link';

export default function Home() {
  

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 flex flex-col items-center font-sans">
      {/* Navigation Bar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">SciPly</span>
        </div>
        <div className="flex gap-4">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup">Sign up</Link>
        </div>
      </nav>

      {/* Jumbotron */}
      <header className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to SciPly</h1>
        <p className="text-lg sm:text-2xl max-w-2xl">
          A platform where scientists, researchers, and enthusiasts share their work and inspire the world.
        </p>
        <div className="flex gap-4 mt-8">
          <Link href="/auth/signup">Get Started</Link>
          <Link href="/about">Learn More</Link>
        </div>
      </header>

      {/* Footer */}
      <footer className="mt-auto w-full max-w-6xl flex justify-center items-center gap-6 py-4">
        footer space
      </footer>
    </div>
  );
}

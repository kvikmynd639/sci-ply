"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Select all sections for scroll-triggered animations
    const sections = gsap.utils.toArray<HTMLElement>("section");

    sections.forEach((section) => {
      // Simple fade and slide-up entrance animation
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Start effect when section top reaches 80% of the viewport height
          end: "bottom center",
          toggleActions: "play none none reverse", // Play when entering, reverse on leaving
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 flex flex-col items-center font-sans text-[#1C2541] bg-[#ffff]">
      {/* Navigation Bar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-[#1C2541]">SciPly</span>
        </div>
        <div className="flex gap-6">
          <Link href="/auth/login" className="text-[#1C2541] hover:text-[#3A506B] transition-colors duration-200">
            Login
          </Link>
          <Link href="/auth/signup" className="text-[#1C2541] hover:text-[#3A506B] transition-colors duration-200">
            Signup
          </Link>
        </div>
      </nav>

      {/* Jumbotron */}
      <header className="flex flex-col items-center text-center mb-16">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-[#1C2541]">
          Welcome to <span className="text-[#3A506B]">SciPly</span>
        </h1>
        <p className="text-xl sm:text-2xl max-w-3xl text-[#3A506B] mb-10">
          A platform for scientists, researchers, and enthusiasts to share their work, connect, and inspire the world.
        </p>
        <div className="flex gap-4">
          <Link
            href="/auth/signup"
            className="bg-[#1C2541] text-white py-3 px-8 rounded-full transition duration-300 hover:bg-[#3A506B] shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="border-[1px] border-[#1C2541] text-[#1C2541] py-3 px-8 rounded-full transition duration-300 hover:bg-[#1C2541] hover:text-white shadow-lg hover:shadow-xl"
          >
            Book a Demo
          </Link>
        </div>
      </header>

      {/* Sections */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center py-24  mb-12">
        <h2 className="text-4xl font-bold mb-6 text-[#1C2541]">What is SciPly?</h2>
        <p className="text-lg max-w-2xl text-[#3A506B]">
          SciPly is an innovative platform designed for scientists, researchers, and enthusiasts. Our mission is to foster collaboration and knowledge sharing within the scientific community, enabling connections and inspiring advancements.
        </p>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center text-center py-24 mb-12">
        <h2 className="text-4xl font-bold mb-6 text-[#1C2541]">Advantages of Using SciPly</h2>
        <ul className="list-none text-lg max-w-2xl text-[#3A506B] space-y-4">
          <li>🌐 <b>Global Network:</b> Connect with scientists and enthusiasts worldwide to exchange ideas and foster collaborations.</li>
          <li>🔍 <b>Share and Discover:</b> Share your research findings, browse articles from other members, and engage in meaningful discussions.</li>
          <li>📚 <b>Access Resources:</b> Access a library of resources tailored for your field, including papers, presentations, and tools to enhance your research.</li>
          <li>🤝 <b>Collaborate and Innovate:</b> Engage in projects with like-minded individuals, or start your own initiatives to drive scientific innovation forward.</li>
        </ul>
      </section>
      
      <section className="min-h-screen flex flex-col items-center justify-center text-center py-24 mb-12">
        <h2 className="text-4xl font-bold mb-6 text-[#1C2541]">Engage and Inspire</h2>
        <p className="text-lg max-w-2xl text-[#3A506B]">
          At SciPly, we believe that knowledge should be shared to inspire future generations. We aim to cultivate an inclusive space where science isn't just about data—it's about stories, experiences, and the thrill of discovery.
        </p>
      </section>
      
      <section className="min-h-screen flex flex-col items-center justify-center text-center py-24">
        <h2 className="text-4xl font-bold mb-6 text-[#1C2541]">Get Started Today!</h2>
        <p className="text-lg max-w-2xl text-[#3A506B] mb-10">
          Joining SciPly is more than signing up—it's becoming part of a dynamic community shaping the future of science. Start your journey, build your network, and contribute to a platform where every idea matters.
        </p>
        <div className="flex gap-4">
          <Link
            href="/auth/signup"
            className="bg-[#1C2541] text-white py-3 px-8 rounded-full transition duration-300 hover:bg-[#3A506B] hover:shadow-xl"
          >
            Join SciPly
          </Link>
          <Link
            href="/auth/login"
            className="border-[1px] border-[#1C2541] text-[#1C2541] py-3 px-8 rounded-full transition duration-300 hover:bg-[#1C2541] hover:text-white shadow-lg hover:shadow-xl"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto w-full max-w-6xl flex justify-center items-center gap-6 py-6 text-[#1C2541]">
        <span>© {new Date().getFullYear()} SciPly - All Rights Reserved</span>
      </footer>
    </div>
  );
}

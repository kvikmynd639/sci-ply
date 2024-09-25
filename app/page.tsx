"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // GSAP ScrollTrigger for background color change
    const sections = gsap.utils.toArray<HTMLElement>("section");
    
    sections.forEach((section, index) => {
      const colors = ["#2B3752", "#2E6E65", "#86EE60", "#F4F7ED"]; // Your color palette
      gsap.to("body", {
        backgroundColor: colors[index % colors.length],
        duration: 1.5, // Smooth transition duration (in seconds)
        ease: "power1.inOut", // Easing function for smoothness
        scrollTrigger: {
          trigger: section,
          start: "top center",  // Trigger when section enters the center of the viewport
          end: "bottom center",
          scrub: true, // Scrub makes the transition smoother by linking it to scroll speed
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 flex flex-col items-center font-sans text-[#2B3752]">
      {/* Navigation Bar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold font-conthrax">SciPly</span>
        </div>
        <div className="flex gap-4">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup">Signup</Link>
        </div>
      </nav>

      {/* Jumbotron */}
      <header className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 font-conthrax">Welcome to SciPly</h1>
        <p className="text-lg sm:text-2xl max-w-2xl">
          A sci-place for scientists, researchers, and enthusiasts sharing their work and inspiring the world.
        </p>
        <div className="flex gap-4 mt-8">
          <Link href="/auth/signup" className="bg-[#2B3752] py-3 px-6 rounded-lg text-white">Get Started</Link>
          <Link href="/about" className="border-[1px] border-[#2B3752] py-3 px-6 rounded-lg">Book a demo</Link>
        </div>
      </header>

      {/* Sections */}
      <section className="min-h-screen flex flex-col items-center justify-center text-[#2B3752]">
        <h2 className="text-3xl font-bold mb-4">What is SciPly?</h2>
        <p className="text-lg text-center max-w-2xl">
          SciPly is an innovative platform designed for scientists, researchers, and enthusiasts. Our mission is to foster collaboration and knowledge sharing in the scientific community. 
        </p>
      </section>
      
      <section className="min-h-screen flex flex-col items-center justify-center text-[#2B3752]">
        <h2 className="text-3xl font-bold mb-4">Advantages of Using SciPly</h2>
        <ul className="list-disc list-inside text-lg text-center max-w-2xl">
          <li>🌐 Connect with like-minded peers in your field.</li>
          <li>🔍 Share your research and receive feedback.</li>
          <li>📚 Access a wealth of knowledge and resources.</li>
          <li>🤝 Collaborate on projects and ideas.</li>
        </ul>
      </section>
      
      <section className="min-h-screen flex flex-col items-center justify-center text-[#2B3752]">
        <h2 className="text-3xl font-bold mb-4">Engage and Inspire</h2>
        <p className="text-lg text-center max-w-2xl">
          At SciPly, we believe that sharing knowledge is essential for scientific progress. Our platform encourages open discussions, idea exchange, and collaborative learning.
        </p>
      </section>
      
      <section className="min-h-screen flex flex-col items-center justify-center text-[#2B3752]">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg text-center max-w-2xl">
          Sign up for free and start sharing your work, connecting with peers, and making a difference in the scientific community.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-auto w-full max-w-6xl flex justify-center items-center gap-6 py-4">
        <span>footer space</span>
      </footer>
    </div>
  );
}

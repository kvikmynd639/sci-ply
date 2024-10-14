"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f1f5f9] text-[#1C2541]">
      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-[#1C2541]">SciPly</span>
        </div>
        <div className="flex gap-8">
          <Link href="/auth/login" className="text-[#1C2541] hover:text-[#3A506B] transition-colors duration-200">
            Login
          </Link>
          <Link href="/auth/signup" className="bg-[#1C2541] text-white py-2 px-6 rounded-full hover:bg-[#3A506B] transition-colors duration-300">
            Signup
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24">
        <div className="text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1C2541] leading-tight">
            Connect. Collaborate. <br className="hidden md:block" /> Innovate on{" "}
            <span className="text-[#3A506B]">SciPly</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#3A506B]">
            The ultimate platform for scientists and researchers to share insights, connect globally, and push the boundaries of science together.
          </p>
          <div className="flex gap-6">
            <Link
              href="/auth/signup"
              className="bg-[#1C2541] text-white py-3 px-6 rounded-full hover:bg-[#3A506B] shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="border-2 border-[#1C2541] text-[#1C2541] py-3 px-6 rounded-full hover:bg-[#1C2541] hover:text-white transition-all duration-300"
            >
              Book a Demo
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/cylinder.png" alt="3D Cylinder" className="max-w-full object-cover transform hover:scale-105 transition duration-300" />
        </div>
      </header>

      {/* Feature Section - Alternating Layout */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#1C2541]">Global Network</h2>
            <p className="text-lg text-[#3A506B]">
              Connect with scientists and enthusiasts worldwide to exchange ideas and foster collaborations that drive innovation forward.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/mobius.png" alt="Global Network" className="max-w-full object-cover" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="flex justify-center order-last md:order-first">
            <img src="/mobius.png" alt="Share & Discover" className="max-w-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#1C2541]">Share & Discover</h2>
            <p className="text-lg text-[#3A506B]">
              Share your research, browse articles, and engage in meaningful discussions with like-minded individuals from around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Engage Section with Parallax Effect */}
      <section className="relative bg-fixed bg-cover bg-center py-24 text-center text-black" style={{ backgroundImage: "url('/engage-background.jpg')" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl font-bold mb-6">Engage and Inspire</h2>
          <p className="text-lg sm:text-xl">
            At SciPly, we believe that knowledge should be shared to inspire future generations. We're creating a space where science isn't just about data—it's about stories, experiences, and the thrill of discovery.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#3A506B] to-[#1C2541] py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl font-bold mb-8">Get Started Today!</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Joining SciPly is more than signing up—it's becoming part of a dynamic community shaping the future of science. Start your journey, build your network, and contribute to a platform where every idea matters.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/auth/signup"
              className="bg-white text-[#1C2541] py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-[#f9fafb] transition duration-300"
            >
              Join SciPly
            </Link>
            <Link
              href="/auth/login"
              className="border-2 border-white py-3 px-8 rounded-full hover:bg-white hover:text-[#1C2541] transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C2541] text-white py-6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <span>© {new Date().getFullYear()} SciPly - All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

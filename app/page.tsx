"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FiEye, FiActivity, FiShield, FiAward, FiMenu, FiX, FiHome, FiUser, FiMessageSquare, FiSettings } from "react-icons/fi";
import { useState, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Navigation */}
      <nav className="w-full max-w-8xl mx-auto py-4 px-4 sm:px-8 flex justify-between items-center bg-opacity-90 backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50">
        <span className="text-3xl font-bold tracking-wider text-gray-100">SciPly</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/dashboard" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 tracking-wider">
            Dashboard
          </Link>
          <Link href="/profile" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 tracking-wider">
             Profile
          </Link>
          <Link href="/chat" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 tracking-wider">
             GPT
          </Link>
         
          <Link
            href="/auth/login"
            className="text-gray-300 hover:text-gray-100 transition-colors duration-200 tracking-wider"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-gray-100 text-black py-2 px-6 rounded-full hover:bg-gray-200 transition-colors duration-300 tracking-wider shadow-lg"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 p-6 flex flex-col gap-4 fixed top-16 left-0 right-0 z-40">
          <Link href="/dashboard" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
            <FiHome className="inline mr-2" /> Dashboard
          </Link>
          <Link href="/profile" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
            <FiUser className="inline mr-2" /> Profile
          </Link>
          <Link href="/chat" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
            <FiMessageSquare className="inline mr-2" /> GPT Assistance
          </Link>
         
          
        </div>
      )}

      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center text-center w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 relative">
        <div className="floating-image mb-8">
          <Image src="/img.png" alt="Hero Image" width={300} height={300} className="" />
        </div>
        <h1 className="text-5xl font-bold text-white leading-tight mb-6">
          Welcome to <span className="text-gray-100">SciPly</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-8">
          A platform where scientists connect, collaborate, and validate scientific discoveries.
        </p>
        <Link href="/auth/signup" className="bg-gray-100 text-black py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300">
          Get Started
        </Link>
      </header>

      {/* Top Scientific Disciplines Section */}
      <section className="relative py-40 px-4 sm:px-8 bg-black text-white">
        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-100 mb-12">Top Scientific Disciplines on SciPly</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Discipline Cards */}
            <div className="bg-slate-600 hover:bg-gray-700 transition-all duration-300 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Quantum Physics</h3>
              <p className="text-sm text-gray-400">Exploring the quantum realm to understand the smallest particles and their behaviors.</p>
            </div>
            <div className="bg-slate-600 hover:bg-gray-700 transition-all duration-300 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Artificial Intelligence</h3>
              <p className="text-sm text-gray-400">Advancing machine learning and intelligent algorithms for diverse applications.</p>
            </div>
            <div className="bg-slate-600 hover:bg-gray-700 transition-all duration-300 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Genomics</h3>
              <p className="text-sm text-gray-400">Decoding the human genome to unlock the secrets of life and genetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-black text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center flex flex-col">
          <div className="mb-12">
            <span className="inline-block bg-gray-800 text-white px-4 py-1 rounded-md uppercase text-sm tracking-wide mb-4">Our Core Values</span>
            <h2 className="text-4xl font-bold text-white" data-aos="fade-up">What We Believe</h2>
          </div>

          {/* Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
            <div className="bg-[#1C2541] rounded-lg p-8 shadow-lg flex items-center">
              <div className="flex-shrink-0 bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center mr-6 text-white">
                <FiAward size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Scientific Excellence</h3>
                <p className="text-sm text-gray-400">We prioritize rigorous standards and evidence-based practices in every aspect of our work.</p>
              </div>
            </div>
            <div className="bg-[#1C2541] rounded-lg p-8 shadow-lg flex items-center">
              <div className="flex-shrink-0 bg-[#3A506B] rounded-lg w-12 h-12 flex items-center justify-center mr-6 text-[#48CFCB]">
                <FiShield size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Ethical and Responsible Practices</h3>
                <p className="text-sm text-[#E0FFFF]">We place ethics and responsibility at the forefront of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Validation Section */}
<section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
    <h2 className="text-4xl font-extrabold text-white mb-12" data-aos="fade-down">Ensuring Scientific Integrity</h2>
    
    <div className="flex flex-col md:flex-row gap-8 items-center justify-between" data-aos="fade-up">
      {/* Central Illustration */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <div className="w-3/4 h-3/4 bg-gradient-to-r from-teal-400 to-blue-600 p-1 rounded-full shadow-lg relative">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3" data-aos="fade-up">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold text-teal-300 mb-2">Verified Science</h3>
          <p className="text-gray-400">Only peer-reviewed, validated research makes it to the forefront. We uphold high standards to ensure trustworthy sources.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold text-teal-300 mb-2">Innovation at Its Core</h3>
          <p className="text-gray-400">Our platform brings groundbreaking discoveries directly to you, streamlined and verified for maximum impact and clarity.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold text-teal-300 mb-2">Transparency & Access</h3>
          <p className="text-gray-400">Explore cutting-edge science without barriers. Transparent processes ensure you’re informed every step of the way.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold text-teal-300 mb-2">Community-Curated</h3>
          <p className="text-gray-400">Join a community where scientists evaluate and support each other’s work, fostering trust and collaboration in every discovery.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* GPT Assistant Section */}
{/* GPT Assistant Section */}
<section className="py-24 bg-gradient-to-b from-gray-800 to-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center" data-aos="fade-down">
    <h2 className="text-4xl font-extrabold text-white mb-12">Meet Your SciPly GPT Assistant</h2>
    <p className="text-lg text-gray-400 mb-16">Discover the most relevant research articles tailored to your needs, powered by a custom-trained AI on a vast library of scientific knowledge.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
      {/* Illustration & Assistant's Avatar */}
      <div className="relative">
        <div className="w-full h-full bg-gradient-to-r from-teal-500 to-blue-600 p-1 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300">
          <div className="w-full h-full bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" alt="GPT Assistant Logo" className="w-36 h-36 rounded-full mb-6" />
            <p className="text-2xl font-semibold text-teal-300">"How can I assist your research today?"</p>
          </div>
        </div>
      </div>

      {/* Features of the Assistant */}
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold text-teal-300 mb-2">Smart Article Finder</h3>
          <p className="text-gray-400">Leverage the AI to retrieve articles tailored to your specific research topic, saving you time and delivering top results.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold text-teal-300 mb-2">Custom Queries</h3>
          <p className="text-gray-400">Ask detailed questions, and the assistant analyzes extensive scientific sources to provide comprehensive answers.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold text-teal-300 mb-2">Adaptive Search Recommendations</h3>
          <p className="text-gray-400">Get personalized recommendations based on your research history and latest scientific trends, powered by OpenAI's model.</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Networking & SciPeer Teams Section */}
<section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
    <h2 className="text-4xl font-extrabold text-white mb-12" data-aos="fade-down">Networking & SciPeer Teams</h2>
    <p className="text-lg text-gray-400 mb-16" data-aos="fade-down">Create your dream team, find scientific partners, and collaborate on exciting projects. The gateway to impactful research and opportunity is here.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start" data-aos="fade-up">
      {/* Team Building Card */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <div className="flex justify-center mb-6">
          <span className="bg-teal-600 p-4 rounded-full text-white text-3xl">&#128101;</span>
        </div>
        <h3 className="text-2xl font-semibold text-teal-300 mb-4">Build Your SciPeer Team</h3>
        <p className="text-gray-400">Assemble a team of experts across fields to bring your project ideas to life. Finding the perfect partners has never been easier.</p>
      </div>

      {/* Find Collaborators Card */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <div className="flex justify-center mb-6">
          <span className="bg-purple-600 p-4 rounded-full text-white text-3xl">&#128196;</span>
        </div>
        <h3 className="text-2xl font-semibold text-purple-300 mb-4">Discover Collaborators</h3>
        <p className="text-gray-400">Looking for a partner for your passion project or research? Connect with like-minded scientists in your field.</p>
      </div>

      {/* Opportunity Finder Card */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <div className="flex justify-center mb-6">
          <span className="bg-blue-600 p-4 rounded-full text-white text-3xl">&#127758;</span>
        </div>
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">Access New Opportunities</h3>
        <p className="text-gray-400">Explore projects and research labs seeking team members. Your path to the next big breakthrough is just a few clicks away.</p>
      </div>
    </div>
  </div>
</section>

{/* Personalized Research Insights Section */}
<section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
    <h2 className="text-4xl font-extrabold text-white mb-12">Personalized Research Insights</h2>
    <p className="text-lg text-gray-400 mb-16">Get real-time analysis on your research profile. GPT evaluates your data, highlights key trends, and offers suggestions for accelerating your progress.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Insight and Suggestion Image */}
      <div className="flex justify-center" data-aos="fade-up">
        <img src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-great-thinker-diagram-png-image_11986163.png" alt="GPT Insights" className="w-3/4 shadow-lg" />
      </div>

      {/* Right: Feature Highlights */}
      <div className="space-y-8" data-aos="fade-down">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
          <span className="bg-teal-500 p-3 rounded-full text-white text-2xl">&#9881;</span>
          <div>
            <h3 className="text-2xl font-semibold text-teal-300">Identify Weak Spots</h3>
            <p className="text-gray-400">GPT pinpoints areas in your research that need improvement, helping you focus on key elements holding back your progress.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
          <span className="bg-purple-500 p-3 rounded-full text-white text-2xl">&#128202;</span>
          <div>
            <h3 className="text-2xl font-semibold text-purple-300">Graph-Based Insights</h3>
            <p className="text-gray-400">Analyze your activity, trends, and citations over time, with GPT offering tailored insights based on your profile's data.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
          <span className="bg-blue-500 p-3 rounded-full text-white text-2xl">&#128218;</span>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300">Suggested Improvements</h3>
            <p className="text-gray-400">Receive practical suggestions for refining your methods, exploring new topics, and boosting your research impact.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Hilbert's Hotel Section */}
<section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
    <h2 className="text-4xl font-extrabold text-white mb-8" data-aos="fade-down">SciPly is Hilbert's Hotel</h2>
    <p className="text-lg text-gray-400 mb-16">Our doors are open to everyone, from hobbyists to seasoned professionals. Embrace the infinite possibilities of science while respecting our community's ethics and core values.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Inclusivity Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="zoom-in">
        <div className="text-5xl text-teal-400 mb-4">&#128101;</div>
        <h3 className="text-2xl font-semibold text-white mb-2">Inclusive Community</h3>
        <p className="text-gray-400">Join a diverse group of passionate individuals eager to share knowledge, regardless of experience level.</p>
      </div>

      {/* Ethics & Integrity Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="zoom-in">
        <div className="text-5xl text-purple-400 mb-4">&#9878;</div>
        <h3 className="text-2xl font-semibold text-white mb-2">Ethics & Integrity</h3>
        <p className="text-gray-400">Respect our ethical standards, maintain integrity in your work, and contribute responsibly to the scientific community.</p>
      </div>

      {/* Collaboration & Respect Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="zoom-in">
        <div className="text-5xl text-blue-400 mb-4">&#128588;</div>
        <h3 className="text-2xl font-semibold text-white mb-2">Collaboration & Respect</h3>
        <p className="text-gray-400">Engage with others respectfully, foster productive collaborations, and celebrate the diversity of thought that drives innovation.</p>
      </div>
    </div>
  </div>
</section>







      {/* Footer */}
      <Footer />
    </div>
  );
}

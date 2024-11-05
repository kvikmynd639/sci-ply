// pages/peers.tsx
"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { FiSearch, FiUserPlus } from "react-icons/fi";

export default function Peers() {
  // Dummy data for peers
  const [peers, setPeers] = useState([
    { id: 1, name: "Dr. Alice Smith", field: "Astrophysics", location: "Germany" },
    { id: 2, name: "Dr. John Doe", field: "Quantum Computing", location: "USA" },
    { id: 3, name: "Prof. Anna Brown", field: "Genomics", location: "UK" },
    { id: 4, name: "Dr. Mark Thompson", field: "AI in Healthcare", location: "Canada" },
  ]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Peers</h1>
          <p className="text-lg text-gray-600">Find your partner for scientific collaboration</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative max-w-lg w-full">
            <input
              type="text"
              placeholder="Search for peers by field, name, or location..."
              className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 outline-none shadow-md"
            />
            <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Peers List */}
        <section className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {peers.map((peer) => (
            <div
              key={peer.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-2xl mb-4">
                {peer.name[0]}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{peer.name}</h2>
              <p className="text-sm text-gray-600">{peer.field}</p>
              <p className="text-sm text-gray-500">{peer.location}</p>
              <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition flex items-center gap-2">
                <FiUserPlus /> Connect
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

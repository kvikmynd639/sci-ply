// pages/citation-panel.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiHome, FiUser, FiMessageSquare, FiSettings, FiUsers, FiBookOpen } from "react-icons/fi";
import Sidebar from "@/components/Sidebar";

export default function CitationPanel() {
  const [papersToCite, setPapersToCite] = useState([
    { id: 1, title: "Deep Learning in Genomics", author: "Dr. Alice Smith", year: 2023 },
    { id: 2, title: "Quantum Computing Advances", author: "Dr. John Doe", year: 2021 },
  ]);

  const [citedBy, setCitedBy] = useState([
    { id: 1, title: "AI in Astrophysics", citedBy: "Anna Brown", year: 2024 },
    { id: 2, title: "Data-Driven Chemistry", citedBy: "Mark Thompson", year: 2023 },
  ]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">My Citation Panel</h1>
        </div>

        {/* Papers to Cite Section */}
        <section className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Papers to Cite</h2>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
              Add Paper
            </button>
          </div>

          {papersToCite.length > 0 ? (
            <ul className="space-y-4">
              {papersToCite.map((paper) => (
                <li key={paper.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div>
                    <h3 className="font-semibold text-gray-800">{paper.title}</h3>
                    <p className="text-gray-600">Author: {paper.author} • {paper.year}</p>
                  </div>
                  <button className="text-red-500 hover:text-red-600 font-semibold">Remove</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No papers to cite.</p>
          )}
        </section>

        {/* Cited By Section */}
        <section className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cited By</h2>
          {citedBy.length > 0 ? (
            <ul className="space-y-4">
              {citedBy.map((citation) => (
                <li key={citation.id} className="bg-gray-100 p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">{citation.title}</h3>
                    <p className="text-gray-600">Cited by: {citation.citedBy} • {citation.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No citations found.</p>
          )}
        </section>
      </main>
    </div>
  );
}

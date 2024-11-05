// pages/chat.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiHome, FiUser, FiMessageSquare, FiSettings, FiUsers, FiBookOpen } from "react-icons/fi";
import Sidebar from "@/components/Sidebar";

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([
    "Hi there! How can I help you?",
    "Feel free to ask any questions about SciPly.",
  ]);
  const [input, setInput] = useState("");

  const [citations] = useState([
    { title: "Quantum Computing Advances", author: "Dr. Alice Smith", citedBy: "John Doe" },
    { title: "AI and Healthcare", author: "Dr. Jane Doe", citedBy: "Anna Brown" },
  ]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 flex flex-col space-y-6 p-6 md:p-8">
        {/* Chat Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Chat</h1>

          <div className="overflow-y-auto h-96 space-y-4 mb-4">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`p-3 rounded-lg ${
                  index % 2 === 0
                    ? "bg-gray-100 text-left text-gray-700"
                    : "bg-teal-100 text-left text-teal-700 self-end"
                }`}
              >
                {msg}
              </p>
            ))}
          </div>

          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border border-gray-300 rounded-l-lg p-3 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-teal-500 text-white rounded-r-lg px-4 hover:bg-teal-600 transition"
            >
              Send
            </button>
          </div>
        </div>      
      </main>
    </div>
  );
}

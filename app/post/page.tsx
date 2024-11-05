// pages/posts.tsx
"use client";
import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handlePost = () => {
    if (input.trim()) {
      setPosts((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <div className="space-y-4 mb-4">
          {posts.length ? posts.map((post, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">{post}</div>
          )) : <p>No posts yet.</p>}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border rounded-l-md p-2 focus:outline-none"
            placeholder="What's on your mind?"
          />
          <button
            onClick={handlePost}
            className="bg-blue-500 text-white rounded-r-md px-4"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

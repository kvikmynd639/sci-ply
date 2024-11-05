// pages/dashboard.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchRecentPapers } from "@/app/api/fetchRecentPapers/route";
import { fetchScienceNews } from "@/app/api/fetchScienceNews/route";
import {
  FiHome,
  FiUser,
  FiMessageSquare,
  FiSettings,
  FiUsers,
  FiThumbsUp,
  FiMessageCircle,
  FiShare2,
} from "react-icons/fi";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [mlPapers, setMlPapers] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [selectedTopic, setSelectedTopic] = useState("machine learning");

  const topics = [
    "machine learning",
    "quantum computing",
    "genomics",
    "environmental science",
    "biotechnology",
  ];

  const samplePosts = [
    {
      id: 1,
      user: { name: "Dr. Alice Johnson", avatar: "/avatar1.jpg" },
      content: "Discovered a new molecule with unique properties for sustainable energy solutions!",
      date: "2 hours ago",
    },
    {
      id: 2,
      user: { name: "Prof. Bob Smith", avatar: "/avatar2.jpg" },
      content: "AI-driven algorithm identifies 10,000 new gene expressions linked to rare diseases.",
      date: "5 hours ago",
    },
    {
      id: 3,
      user: { name: "Dr. Carol White", avatar: "/avatar3.jpg" },
      content: "Scientists find a molecule that may self-repair under extreme conditions. Huge potential!",
      date: "1 day ago",
    },
    {
      id: 4,
      user: { name: "Dr. Daniel Kim", avatar: "/avatar4.jpg" },
      content: "Improved photosynthesis efficiency by 30%. This breakthrough could change agriculture.",
      date: "3 days ago",
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      setUser({ name: "Jane Doe", email: "user@example.com", avatar: "/user-avatar.jpg" });
    };

    const loadAPIData = async () => {
      const mlPapersData = await fetchRecentPapers(selectedTopic);
      const newsData = await fetchScienceNews();
      setMlPapers(mlPapersData);
      setNews(newsData);
    };

    fetchUserData();
    loadAPIData();
  }, [selectedTopic]);

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800">
      {/* Left Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 flex flex-col space-y-6 p-6 md:p-8">
        {/* Top Section with Topic Filter */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Featured Research</h2>
            <div>
              <label className="mr-2 font-semibold text-gray-600">Topic:</label>
              <select
                className="p-2 rounded border border-gray-300"
                value={selectedTopic}
                onChange={handleTopicChange}
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic.charAt(0).toUpperCase() + topic.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {mlPapers.length > 0 ? (
              mlPapers.map((paper, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200 transition hover:shadow-lg"
                >
                  <h3 className="font-semibold text-lg text-gray-700">{paper.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    By: {paper.authors.map((author: any) => author.name).join(", ")}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No recent papers available.</p>
            )}
          </div>
        </div>

        {/* Feed Section with Social Media Style Posts */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 overflow-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Posts</h2>
          <div className="space-y-4">
          {samplePosts.map((post) => (
              <div key={post.id} className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                {/* User Avatar */}
                <img src={post.user.avatar} alt="User Avatar" className="w-12 h-12 rounded-full" />

                {/* Post Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{post.content}</p>

                  {/* Interaction Buttons */}
                  <div className="flex mt-4 space-x-6 text-gray-600 text-sm">
                    <button className="flex items-center gap-1 hover:text-teal-600">
                      <FiThumbsUp /> Like
                    </button>
                    <button className="flex items-center gap-1 hover:text-teal-600">
                      <FiMessageCircle /> Comment
                    </button>
                    <button className="flex items-center gap-1 hover:text-teal-600">
                      <FiShare2 /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-full md:w-64 lg:w-80 bg-white shadow-lg p-6 space-y-8">
        {/* Latest Science News */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Latest News</h2>
          <div className="space-y-4">
            {news.length > 0 ? (
              news.map((article, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition border border-gray-200"
                  onClick={() => window.open(article.url, "_blank")}
                >
                  <h3 className="font-semibold text-gray-700">{article.title}</h3>
                  <p className="text-sm text-gray-500">{article.source}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No news available.</p>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recommendations</h2>
          <div className="space-y-2">
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 rounded-lg w-full">
              Follow Quantum Physics
            </button>
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 rounded-lg w-full">
              Follow AI Research
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

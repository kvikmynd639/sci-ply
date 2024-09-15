"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/supabase/supabaseClient';
import { fetchScienceNews } from '@/supabase/api/fetchNews'; // Import the API function

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [peers, setPeers] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]); // For storing GDELT news articles

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    const fetchPosts = async () => {
      const dummyPosts = [
        { id: 1, content: "This is the first post!" },
        { id: 2, content: "Here's another interesting post." },
        { id: 3, content: "Check out this awesome discovery!" },
      ];
      setPosts(dummyPosts);
    };

    const fetchPeers = async () => {
      const dummyPeers = [
        { id: 1, name: "Dr. Jane Doe", field: "Astrophysics" },
        { id: 2, name: "Prof. John Smith", field: "Quantum Mechanics" },
      ];
      setPeers(dummyPeers);
    };

    const loadNews = async () => {
      const newsData = await fetchScienceNews(); // Call the API function
      setNews(newsData);
    };

    fetchUserData();
    fetchPosts();
    fetchPeers();
    loadNews(); // Fetch the news
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SciPly</div>
        <div className="text-lg">{user ? `Welcome, ${user.email}` : "Welcome, Guest"}</div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-8 mt-4">
        {/* Left Side: Posts */}
        <main className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <p>{post.content}</p>
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </main>

        {/* Right Side: Recommendations and News */}
        <aside className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md flex flex-col gap-8">
          {/* Sci-Peer Recommendations */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Sci-Peer Recommendations</h2>
            <div className="space-y-4">
              {peers.length > 0 ? (
                peers.map((peer) => (
                  <div key={peer.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <p className="font-semibold">{peer.name}</p>
                    <p className="text-sm text-gray-600">{peer.field}</p>
                  </div>
                ))
              ) : (
                <p>No recommendations available.</p>
              )}
            </div>
          </div>

          {/* Science News */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Latest Science News</h2>
            <div className="space-y-4">
              {news.length > 0 ? (
                news.map((article, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition"
                    onClick={() => window.open(article.url, '_blank')}
                  >
                    <h3 className="font-semibold">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.source}</p>
                  </div>
                ))
              ) : (
                <p>No news available.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

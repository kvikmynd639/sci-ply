// pages/profile.tsx
"use client";
import { useState } from "react";
import ReactECharts from "echarts-for-react";
import Sidebar from "@/components/Sidebar";

export default function Profile() {
  const [user] = useState({
    name: "Jane Doe",
    email: "user@example.com",
    field: "Astrophysics",
    avatar: "https://images4.alphacoders.com/192/thumb-1920-192708.jpg",
    bio: "Astrophysicist with a passion for understanding the universe and contributing to scientific advancements. Specializing in cosmic evolution, black holes, and interstellar phenomena.",
  });

  const interestsOption = {
    title: { text: "Interests Breakdown", left: "center" },
    tooltip: { trigger: "item" },
    legend: { orient: "vertical", left: "left" },
    series: [
      {
        name: "Interest Level",
        type: "pie",
        radius: "50%",
        data: [
          { value: 85, name: "QPH" },
          { value: 90, name: "AI" },
          { value: 60, name: "GNM" },
          { value: 70, name: "ES" },
          { value: 95, name: "APH" },
        ],
        emphasis: {
          itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)" },
        },
      },
    ],
  };

  const contributionsOption = {
    title: { text: "Contributions Overview", left: "center" },
    xAxis: { type: "category", data: ["Publications", "Citations", "Collaborations", "Projects", "Presentations"] },
    yAxis: { type: "value" },
    series: [
      {
        data: [25, 150, 10, 8, 20],
        type: "bar",
        itemStyle: { color: "#229799" },
        barWidth: "50%",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Profile Content */}
      <main className="flex-1 flex flex-col space-y-6 p-6 md:p-8 max-w-full">
        {/* Profile Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
          <div className="flex flex-col items-center text-center">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-teal-300 mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 mb-2">{user.field}</p>
            <p className="text-lg text-gray-700 mb-4"><strong>Email:</strong> {user.email}</p>
            <p className="text-sm text-gray-600">{user.bio}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-full">
          {/* Interests Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <ReactECharts option={interestsOption} style={{ height: "300px", width: "100%" }} />
          </div>

          {/* Contributions Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <ReactECharts option={contributionsOption} style={{ height: "300px", width: "100%" }} />
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-full">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="text-gray-700">
              <span className="font-semibold">Published:</span> Paper on "The Effects of Quantum Tunneling in Stellar Collapse."
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Collaborated:</span> Research project on AI applications in genomics.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Presented:</span> Findings at the International Astrophysics Conference 2023.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

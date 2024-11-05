// components/Sidebar.tsx
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiMessageSquare, FiSettings, FiUsers, FiBookOpen } from "react-icons/fi";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const user = {
    name: "Jane Doe",
    email: "user@example.com",
    avatar: "https://images4.alphacoders.com/192/thumb-1920-192708.jpg",
  };

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <FiHome size={22} /> },
    { href: "/profile", label: "Profile", icon: <FiUser size={22} /> },
    { href: "/chat", label: "GPT Assistant", icon: <FiMessageSquare size={22} /> },
    { href: "/peers", label: "Peers", icon: <FiUsers size={22} /> },
    { href: "/citation-panel", label: "My Citation Panel", icon: <FiBookOpen size={22} /> },
  ];

  return (
    <aside className="w-full md:w-64 lg:w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 space-y-8">
      <div className="text-3xl font-extrabold text-white tracking-wider">SciPly</div>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center space-y-2 mb-4">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-2 border-teal-300"
        />
        <h3 className="text-lg font-semibold text-white">{user.name}</h3>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
              pathname === link.href ? "bg-teal-500 text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

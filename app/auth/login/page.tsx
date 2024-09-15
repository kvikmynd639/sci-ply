"use client";
import { useState } from 'react';
import { supabase } from '@/supabase/supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    setError(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Check your email for the confirmation link.');
    }
  };

  const handleLogin = async () => {
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Logged in successfully!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent text-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome to SciPly</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-between">
          <button
            onClick={handleSignup}
            className="w-full mr-2 p-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            className="w-full ml-2 p-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

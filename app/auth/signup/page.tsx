"use client";
import { useState } from "react";
import { supabase } from "@/supabase/supabaseClient";
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scienceField, setScienceField] = useState("");
  const [interests, setInterests] = useState("");
  const [purpose, setPurpose] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSignup = async () => {
    setError(null);
    
    // Sign up the user with email and password
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Save the additional user details to the database
      const { data, error: dbError } = await supabase.from("User").insert([
        { email, password, scienceField, interests, purpose },
      ]);

      if (dbError) {
        setError(dbError.message);
      } else {
        alert("Account created successfully!");
        router.push('/dashboard'); // Redirect to dashboard after successful signup
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Step 1: Account Information</h2>
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
            <button
              onClick={handleNext}
              className="w-full p-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Step 2: Science Field</h2>
            <div className="mb-4">
              <select
                value={scienceField}
                onChange={(e) => setScienceField(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="" disabled>Select your field</option>
                <option value="maths">Maths</option>
                <option value="engineering">Engineering</option>
                <option value="electrodynamics">Electrodynamics</option>
                <option value="physics">Physics</option>
                <option value="geography">Geography</option>
                <option value="history">History</option>
              </select>
            </div>
            <button
              onClick={handleNext}
              className="w-full p-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Step 3: Interests</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your interests (e.g., quantum physics, geology)"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              onClick={handleNext}
              className="w-full p-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Next
            </button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Step 4: Purpose</h2>
            <div className="mb-4">
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="" disabled>Select your purpose</option>
                <option value="looking for peers">Looking for peers</option>
                <option value="exploring">Exploring</option>
                <option value="research collaboration">Research Collaboration</option>
              </select>
            </div>
            <button
              onClick={handleSignup}
              className="w-full p-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        )}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
}

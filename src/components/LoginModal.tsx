import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function LoginModal() {
  const { role, loginAdmin, loginGuest } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (role) return null; // Hide if already logged in

  const submitAdmin = () => {
    const ok = loginAdmin(email, password);
    if (!ok) setError("Invalid admin credentials");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md text-center shadow-xl space-y-6">
        <h2 className="text-3xl font-bold text-[#253c80]">Welcome</h2>
        <p className="text-gray-600">Login as Admin or continue as Guest</p>

        <input
          className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-[#3fbd9e] outline-none"
          placeholder="Admin Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-[#3fbd9e] outline-none"
          placeholder="Admin Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={submitAdmin}
          className="w-full py-3 rounded-lg text-white font-semibold shadow-md"
          style={{ background: "#3fbd9e" }}
        >
          Login as Admin
        </button>
        <button
          onClick={loginGuest}
          className="w-full py-3 rounded-lg border border-gray-300 font-semibold text-gray-700 shadow-sm"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}

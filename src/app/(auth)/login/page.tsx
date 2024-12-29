import React from "react";

const LoginPage = () => {
  return (
    <div className="relative flex items-center justify-center bg-gradient-bg min-h-screen">
      <div className="backdrop-blur-md bg-gray-400 bg-opacity-5 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
        {/* {error && <p style={{ color: "red" }}>Error: {error}</p>} */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 text-sm text-gray-300 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-_purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-sm text-gray-300 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-_purple-400"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-_purple-600 text-white rounded-md hover:bg-_purple-500 focus:outline-none focus:ring-4 focus:ring-_purple-400"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-_purple-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

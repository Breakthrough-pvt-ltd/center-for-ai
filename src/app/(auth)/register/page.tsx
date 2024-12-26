import React from "react";

const RegistrationPage = () => {
  return (
    <div className="relative flex items-center justify-center bg-gradient-bg min-h-screen">
      <div className="backdrop-blur-md bg-gray-400 bg-opacity-5 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Register</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 text-sm text-gray-300 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 text-sm text-gray-300 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-sm text-gray-300 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-blue-300 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;

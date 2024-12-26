"use client";
export default function NotFound() {
  return (
    <div className="text-white flex flex-col items-center justify-center bg-gradient-bg min-h-screen">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-text-gradient mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-_purple-500 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 bg-_purple-600 hover:bg-_purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Go Back
      </button>
    </div>
  );
}

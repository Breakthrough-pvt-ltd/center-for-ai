import React from "react";
import { PiFaders } from "react-icons/pi";

export default function Research() {
  // Sample research data
  const researchData = [
    {
      title: "Research Title 1",
      description:
        "This is a short description of research 1. It focuses on innovative solutions in the field of technology.",
      publishedDate: "January 10, 2024",
      publishedSite: "https://www.example.com/research1",
    },
    {
      title: "Research Title 2",
      description:
        "This research explores the intersection of AI and sustainability. It proposes eco-friendly models.",
      publishedDate: "March 22, 2023",
      publishedSite: "https://www.example.com/research2",
    },
    {
      title: "Research Title 3",
      description:
        "A deep dive into quantum computing and its future impact on data security.",
      publishedDate: "August 15, 2022",
      publishedSite: "https://www.example.com/research3",
    },
    {
      title: "Research Title 4",
      description:
        "This is a short description of research 4. It focuses on innovative solutions in the field of technology.",
      publishedDate: "January 10, 2024",
      publishedSite: "https://www.example.com/research4",
    },
    {
      title: "Research Title 5",
      description:
        "This research explores the intersection of AI and sustainability. It proposes eco-friendly models.",
      publishedDate: "March 22, 2023",
      publishedSite: "https://www.example.com/research5",
    },
  ];
  return (
    <>
      <div className="relative bg-gradient-bg min-h-screen">
        {/* Title Section */}
        <div className="flex items-center justify-start px-8 pt-36 pl-36">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-text-gradient-sub max-w-lg">
            | Research Hub
          </h1>
        </div>

        {/* Filter Section */}
        <div className="flex justify-end gap-2 px-8 mt-8 text-white items-center">
          <label htmlFor="filter" className="text-lg">
            Filter
          </label>
          <PiFaders />
        </div>

        {/* Research Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-5 px-4">
          {researchData.map((research, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-gradient-to-t from-black to-_purple-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {research.title}
              </h2>
              <p className="text-gray-500 mb-4">{research.description}</p>
              <p className="text-sm text-gray-300 mb-4">
                Published on: {research.publishedDate}
              </p>
              <a
                href={research.publishedSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-_purple-500 hover:text-_purple-600 font-semibold"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

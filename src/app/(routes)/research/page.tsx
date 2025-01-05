import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

{
  /* Metadata for SEO */
}
export const metadata: Metadata = {
  title: "Research Hub - Innovative Research and Solutions",
  description:
    "Discover groundbreaking research in technology, AI, sustainability, and quantum computing. Stay updated with the latest trends and advancements.",
  keywords: "Research, Technology, AI, Sustainability, Quantum Computing",
};

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-text-gradient-sub max-w-lg pb-4">
            | Research Hub
          </h1>
        </div>

        {/* Filter Section */}
        <div className="flex justify-end gap-2 px-24 mt-8 text-white items-center">
          <label htmlFor="filter" className="text-lg">
            Filter
          </label>
          <Image src="/filter.svg" alt="Filter Icon" width={28} height={28} />
        </div>

        {/* Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5 px-24 pb-16">
          {researchData.map((research, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 bg-_purple-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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

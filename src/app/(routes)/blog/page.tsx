"use client";
import React, { useState, useEffect } from "react";
import { PiFaders } from "react-icons/pi";
import { NextSeo } from "next-seo";

interface Article {
  urlToImage?: string;
  title: string;
  description?: string;
  publishedAt: string;
  url: string;
}

async function fetchNews() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`
    );
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Invalid JSON response");
    }
  } catch (error) {
    console.error("Failed to fetch news:", error.message);
    return []; // Return an empty array as a fallback
  }
}

export default function Blog() {
  const [news, setNews] = useState<Article[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const initialNews = await fetchNews();
        setNews(initialNews);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  return (
    <>
      <NextSeo
        title="AI News Blog | Stay Updated with the Latest News"
        description="Discover the latest trends and updates in the world of AI with our curated news articles. Stay informed and ahead of the curve."
        openGraph={{
          type: "website",
          url: "https://yourwebsite.com/blog",
          title: "AI News Blog",
          description:
            "Discover the latest trends and updates in the world of AI with our curated news articles.",
          images: [
            {
              url: "/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "AI News Blog",
            },
          ],
        }}
        twitter={{
          handle: "@yourtwitterhandle",
          site: "@yoursite",
          cardType: "summary_large_image",
        }}
      />
      <div className="relative bg-gradient-bg min-h-screen">
        {/* Title Section */}
        <div className="flex items-center justify-start px-8 pt-36 pl-36">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-text-gradient-sub max-w-lg pb-4">
            | Blog
          </h1>
        </div>

        {/* Filter Section */}
        <div className="flex justify-end gap-2 px-8 mt-8 text-white items-center">
          <label htmlFor="filter" className="text-lg">
            Filter
          </label>
          <PiFaders />
        </div>

        {/* News Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-5 px-4 pb-8">
          {loading ? (
            // Skeleton Loader
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="max-w-sm w-full bg-_purple-700 p-6 rounded-lg shadow-lg animate-pulse"
              >
                <div className="w-full h-48 object-cover rounded-md mb-4"></div>
                <div className="h-6 bg-gray-500 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-_purple-500 rounded mb-4"></div>
              </div>
            ))
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : news && news.length > 0 ? (
            news.map((article, index) => (
              <div
                key={index}
                className="max-w-sm w-full bg-_purple-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-500 mb-4">
                  {article.description || "No description available."}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Published on:{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-_purple-500 hover:text-_purple-600 font-semibold"
                >
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p className="text-white">No news articles found.</p>
          )}
        </div>
      </div>
    </>
  );
}

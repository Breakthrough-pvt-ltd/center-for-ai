import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export async function GET() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=AI&sortBy=publishedAt&language=en&apiKey=${apiKey}`
    );
    if (!response.ok) {
      console.error("External API error:", await response.text());
      throw new Error("Failed to fetch data from the News API");
    }
    const data = await response.json();
    return NextResponse.json(data.articles || []);
  } catch (error) {
    console.error("Error in API route:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch news articles" },
      { status: 500 }
    );
  }
}

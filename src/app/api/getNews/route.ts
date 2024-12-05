import { NextResponse } from "next/server";

// Backend API (/api/getNews) to fetch news data
const fetchNews = async () => {
  const newsApiKey = process.env.NEWS_API_KEY;
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;
  const newsResponse = await fetch(newsUrl);
  const newsData = await newsResponse.json();
  const filteredNewsData = {
    ...newsData,
    articles: newsData.articles.slice(0, 5),
  };
  if (!newsResponse.ok) {
    throw new Error("Failed to fetch news data");
  }
  return filteredNewsData;
};

export async function GET() {
  const newsData = await fetchNews();
  return NextResponse.json(newsData);
}

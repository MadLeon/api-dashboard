import Image from "next/image";
import { NewsData } from "@/lib/types";

export default function NewsPanel({ newsData }: { newsData: NewsData }) {
  return (
    newsData && (
      <div className="w-1/3 h-fit px-4 py-2 bg-blue-400/20 backdrop-blur-xl border">
        <div className="py-2 flex gap-4">
          <div className="w-[600px]">
            <div className="relative aspect-square">
              <Image
                src={newsData.articles[0].urlToImage}
                alt="Top news image"
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <a href={newsData.articles[0].url} target="_blank">
              <div className="font-bold text-sm">
                {newsData.articles[0].title}
              </div>
            </a>
            <div className="text-neutral-300 font-light text-sm">
              {newsData.articles[0].description}
            </div>
          </div>
        </div>

        {newsData.articles.slice(1, 5).map((article, index) => (
          <div
            key={index}
            className="py-2 flex justify-between items-center border-t"
          >
            <div style={{ flexBasis: "75%" }}>
              <a href={article.url} target="_blank">
                <div className="text-sm">{article.title}</div>
              </a>
            </div>
            <div
              style={{ flexBasis: "25%" }}
              className="w-32 relative aspect-square"
            >
              <Image
                src={article.urlToImage}
                alt={`News image ${index + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    )
  );
}

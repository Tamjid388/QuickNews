"use client"
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TArticles } from "@/lib/articleTypes";
import Link from "next/link";

export default function CardDetails({ article }: { article: TArticles }) {
const date = article.publishedAt ? article.publishedAt.split("T")[0] : "Unknown";
console.log("myd",date);
    return (
<Link  href={article.url}
            target="_blank"
            rel="noopener noreferrer">
    <Card>
      <CardHeader>
   <div className="relative h-48 w-full my-2 overflow-hidden rounded-lg group">
  <Image
    fill
    src={article.urlToImage || "/article.jpg"}
    alt="cardImage"
    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="bg-red-600 absolute text-white top-1 left-1 
  p-2
  rounded-xl text-sm">
{article.source.name}
  </div>
</div>


        <CardTitle>
            <h1 className="line-clamp-2">{article.title}</h1>
        </CardTitle>
   
        <CardDescription>
          <p className="line-clamp-2">{article.description}</p>
        </CardDescription>
        <CardDescription>
          <p className="text-black font-semibold">{date}</p>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      
    </Card>
</Link>
  );
}

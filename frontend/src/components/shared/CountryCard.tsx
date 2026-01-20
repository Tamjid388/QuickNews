"use client"
import React from "react";
import CardDetails from "./CardDetails";
import { TArticles } from "@/lib/articleTypes";


type CountryCardProps = {
  articles: TArticles[]
}

export default function CountryCard({ articles }:CountryCardProps) {
  return <div className="my-8">
         <div className="mb-4 text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold">Top Headlines</h2>
        <p className="text-gray-600 text-sm mt-1">Latest news from your selected country</p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 my-8">
    {
        articles.map((article,id)=><CardDetails key={id} article={article}/>)
    }
  </div>;
  </div>
}

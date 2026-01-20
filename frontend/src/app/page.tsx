import CountryCard from "@/components/shared/CountryCard";
import { MenuBar } from "@/components/shared/MenuBar";


export default async function Home() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`)
  const data=await res.json()
  const articles=data.articles
  
  return (
    <div
      className="
    max-w-7xl mx-auto"
    >
      <MenuBar />
     
      <CountryCard articles={articles}/>
    </div>
  );
}

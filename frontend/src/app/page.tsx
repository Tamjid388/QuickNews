import CountryCard from "@/components/shared/CountryCard";
import { FilterBySource } from "@/components/shared/FilterBySource";
import { MenuBar } from "@/components/shared/MenuBar";


export default async function Home() {
  const res = await fetch(`http://localhost:5000/articles`)

  const alldata=await res.json()
   
  const articles=alldata.data
  
  return (
    <div
      className="
    max-w-7xl mx-auto"
    >
     <div className="flex gap-4 my-4">
       <MenuBar />
      <FilterBySource articles={articles}/>
     </div>
      <CountryCard articles={articles}/>
    </div>
  );
}

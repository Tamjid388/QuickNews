"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TArticles } from "@/lib/articleTypes";

type MenuBarProps = {
  onSelectSource: (source: string) => void;
};

const sources = ["Bloomberg", "TechCrunch", "Gizmodo.com", "InsideEVs", "TheStreet"];

export function FilterBySource(articles:{articles:TArticles}) {
    console.log("asdsd",articles);
  const [selected, setSelected] = React.useState("");
console.log(selected);
  const handleChange = (value: string) => {
    setSelected(value);
    
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Source</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sources</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selected} onValueChange={handleChange}>
          {sources.map((src, idx) => (
            <DropdownMenuRadioItem key={idx} value={src}>
              {src}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { newsApiCountries } from "@/lib/countrylist"

export function MenuBar() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Countries</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-60">
        <DropdownMenuLabel>Countries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

       
       {
        newsApiCountries.map((country,idx)=>
        <DropdownMenuRadioItem key={idx} value={country.code}>
           {country.name}</DropdownMenuRadioItem>)
       }
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

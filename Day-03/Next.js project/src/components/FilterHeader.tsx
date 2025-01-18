// src\components\FilterHeader.tsx
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersHorizontal } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-12">
      <div className="flex items-center justify-between max-w-[1344px] mx-auto">
        <h1 className="text-2xl font-medium text-[#111111] font-helvetica">New (500)</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="font-abeezee text-base font-normal text-[#111111] hover:bg-gray-100">
            <span>Hide Filters</span>
            <SlidersHorizontal className="ml-2 h-5 w-5" />
          </Button>
          <Select>
            <SelectTrigger className="w-[120px] border-none font-abeezee text-[15px] font-normal hover:bg-gray-100">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}


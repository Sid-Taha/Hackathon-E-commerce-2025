// src\components\ProductsCards.tsx
"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { searchName } from "@/globalState/globalState"


export interface Card {
  image: string,
  colors: string,
  productName: string,
  _id: string,
  category:string,
  status: string,
  description: string,
  inventory: number
  price: number
}

export default function ProductsCards({selectedCategory, price}: {
  selectedCategory: string | null, 
  price: number
}) 

{  
  const [search, setSearch] = useAtom(searchName)

  const [data, setData] = useState<Card[]>([])

  useEffect(()=>{
    async function getData(){
      let query = '*[_type == "product"]';
      
      if(search){
        query = `*[_type == "product" && productName match "${search}*"]`
      }
      else if(price){
        query = `*[_type == 'product' && price < ${price}]`
      }
      else if (selectedCategory) {
        query = `*[_type == 'product' && category == "${selectedCategory}"]`;
      }

      const res: Card[] = await client.fetch(`${query}{
        'image': image.asset->url,
        colors,
        productName,
        _id,
        category,
        status,
        description,
        inventory,
        price
      }`);

      setData(res);
    }

    getData();
  }, [selectedCategory, price, search]);
  
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item: Card, index: number) => {
        return (
          <Card className="relative w-full max-w-[348px] overflow-hidden border-none shadow-none hover:scale-[1.02]" key={index}>
            <Link href={`/products/ProductDetail?image=${item.image}&colors=${item.colors}&productName=${item.productName}&_id=${item._id}&category=${item.category}&description=${item.description}&inventory=${item.inventory}&price=${item.price}`}>

            <div className="relative h-[348px] w-full bg-[#F5F5F5]">
              <Image
                src={item.image ?? '/default-image.png'}
                alt="card Image"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
            </Link>
            <div className="p-4 space-y-2">
              {true && (
                <span className="text-[#9E3500] text-[15px] font-medium font-['Helvetica_Neue']">
                  {item.status}
                </span>
              )}
              <div className="space-y-1">
                <h3 className="text-[15px] font-medium leading-6 text-[#111111] font-['Helvetica_Neue']">
                  {item.productName}
                </h3>
                <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                  {item.category}
                </p>
              </div>
              <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                {(item.colors).length} Colour
              </p>
              <p className="text-[15px] font-medium leading-7 text-[#111111] font-['Helvetica_Neue']">
                MRP : ₹ {(item.price).toFixed(2)}
              </p>
            </div>
          </Card>
        )
      })}
    </div>)
}


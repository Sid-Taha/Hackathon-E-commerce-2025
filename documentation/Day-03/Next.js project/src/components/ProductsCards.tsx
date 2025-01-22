// src\components\ProductsCards.tsx
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"


export default function ProductsCards() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(91)].map((item, index) => {
        return (
          <Card className="relative w-full max-w-[348px] overflow-hidden border-none shadow-none hover:scale-[1.02]" key={index}>
            <Link href={`/products/${index + 1}`}>
            <div className="relative h-[348px] w-full bg-[#F5F5F5]">
              <Image
                src={`/products/card${index + 1}.png`}
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
                  Just In
                </span>
              )}
              <div className="space-y-1">
                <h3 className="text-[15px] font-medium leading-6 text-[#111111] font-['Helvetica_Neue']">
                  {"Nike Air Force 1 Mid '07"}
                </h3>
                <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                  {"Men's Shoes"}
                </p>
              </div>
              <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                {1} Colour
              </p>
              <p className="text-[15px] font-medium leading-7 text-[#111111] font-['Helvetica_Neue']">
                MRP : ₹ 10 795.00
              </p>
            </div>
          </Card>
        )
      })}
    </div>)
}


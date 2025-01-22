// src\components\CardSection.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { products } from "@/constant/productCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image'

export default function ProductShowcase() {
  return (
    <div className="w-full bg-white px-4 py-8 md:px-6 lg:px-8 mb-[84px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-gray-900">Best of Air Max</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Shop</span>

          {/* Left Chevron */}
          <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5]">
            <ChevronLeft size={24} className="text-gray-900" />
          </div>

          {/* Right Chevron */}
          <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5]">
            <ChevronRight size={24} className="text-gray-900" />
          </div>
        </div>

      </div>

      <Link href={"/products"}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="group relative flex flex-col">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
      </Link>
    </div>
  )
}


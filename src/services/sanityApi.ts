"use server"

import { client } from "@/sanity/lib/client"


interface Card {
  image: string;
  colors: string;
  productName: string;
  _id: string;
  category: string;
  status: string;
  description: string;
  inventory: number;
  price: number;
}

export async function sanityFetch(query: string) {
  const res: Card[] =  await client.fetch(`${query}{
          'image': image.asset->url,
          colors,
          productName,
          _id,
          category,
          status,
          description,
          inventory,
          price
        }`)

  return res;
}
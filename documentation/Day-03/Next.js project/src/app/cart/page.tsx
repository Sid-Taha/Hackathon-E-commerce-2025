// src\app\cart\page.tsx
import Image from "next/image"
import { Heart, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ShoppingCart() {
  return (
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">Applies to orders of ₹ 14,000.00 or more.</p>
          <Button variant="link" className="text-sm">
            View details
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-medium mb-6">Bag</h1>

          {/* Cart Items */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-md">
                    <Image
                      src="/cart/pic1.png"
                      alt="Nike Dri-FIT"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                        <p className="text-sm text-gray-600">Men&apos;s Short-Sleeve Running Top</p>
                        <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm">Size: L</p>
                          <p className="text-sm">Quantity: 1</p>
                        </div>
                      </div>
                      <p className="text-sm">MRP: ₹ 3,895.00</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-md">
                    <Image
                      src="/cart/pic2.png"
                      alt="Nike Air Max"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Nike Air Max 97 SE</h3>
                        <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                        <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm">Size: 8</p>
                          <p className="text-sm">Quantity: 1</p>
                        </div>
                      </div>
                      <p className="text-sm">MRP: ₹ 16,995.00</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Favorites */}
          <div className="mt-12">
            <h2 className="text-xl font-medium mb-4">Favourites</h2>
            <p className="text-sm text-gray-600">There are no items saved to your favourites.</p>
          </div>

          {/* You Might Also Like */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">You Might Also Like</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100">
                    <Image
                      src="/cart/pic2.png"
                      alt="Air Jordan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Air Jordan 1 Mid SE Craft</h3>
                    <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                    <p className="text-sm font-medium mt-2">MRP: ₹ 12,295.00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">₹ 20,890.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Estimated Delivery & Handling</span>
                  <span className="text-sm">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ 20,890.00</span>
                </div>
                <Link href={"/checkout"}><Button className="w-full">Member Checkout</Button></Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


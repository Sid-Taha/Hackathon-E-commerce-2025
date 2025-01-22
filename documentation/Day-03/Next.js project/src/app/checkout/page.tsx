// src\app\checkout\page.tsx
import * as React from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'

export default function CheckoutForm() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-[99px]">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">How would you like to get your order?</h2>
            <p className="text-sm text-gray-500">
              Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the
              shipping address.
            </p>
            <Button variant="outline" className="w-full justify-start gap-4 rounded-xl border-2 py-6">
              <div className="h-6 w-6 rounded-full border-2" />
              Deliver It
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium">Enter your name and address:</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="First Name" />
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Last Name" />
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Address Line 1" />
                <p className="text-xs text-gray-500">We do not ship to P.O. boxes</p>
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Address Line 2" />
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Address Line 3" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input className="rounded-md py-6" placeholder="Postal Code" />
                <Input className="rounded-md py-6" placeholder="Locality" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="rounded-md py-6">
                    <SelectValue placeholder="State/Territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                  </SelectContent>
                </Select>
                <Input className="rounded-md py-6" placeholder="India" disabled />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="save-address" />
                <Label htmlFor="save-address">Save this address to my profile</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="preferred-address" />
                <Label htmlFor="preferred-address">Make this my preferred address</Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium">What&apos;s your contact information?</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Email" type="email" />
                <p className="text-xs text-gray-500">A confirmation email will be sent after checkout.</p>
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Phone Number" type="tel" />
                <p className="text-xs text-gray-500">A carrier might contact you to confirm delivery.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium">What&apos;s your PAN?</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="PAN" />
                <p className="text-xs text-gray-500">
                  Enter your PAN to enable payment with UPI, Net Banking or local card methods
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="save-pan" />
                <Label htmlFor="save-pan" className="text-sm text-gray-500">
                  Save PAN details to Nike Profile
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm text-gray-500">
                I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and
                Cookie Policy. eShopWorld is a trusted Nike partner.
              </Label>
            </div>
            <Button className="w-full rounded-full py-6" disabled>
              Continue
            </Button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <Card className="h-fit p-6">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery/Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                (The total reflects the price of your order, including all duties and taxes)
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
              <div className="flex gap-4 relative">
                <Image
                  src="/cart/pic1.png"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  width={208}
                  height={208}
                />
                <div className="w-full space-y-1">
                  <p className="text-sm">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                  <p className="text-sm text-gray-500">Qty 1</p>
                  <p className="text-sm text-gray-500">Size L</p>
                  <p className="text-sm text-gray-500">₹ 3,895.00</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <Image
                  src="/cart/pic3.png"
                  alt="Nike Air Max 97 SE"
                  width={208}
                  height={208}
                />
                <div className="space-y-1">
                  <p className="text-sm">Nike Air Max 97 SE Men&apos;s Shoes</p>
                  <p className="text-sm text-gray-500">Qty 1</p>
                  <p className="text-sm text-gray-500">Size UK 8</p>
                  <p className="text-sm text-gray-500">₹ 16,995.00</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}


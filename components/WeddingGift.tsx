"use client"

import { Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const bankInfo = {
  name: "Adhika Gunadarma",
  account: "1234567890",
  bank: "BCA"
}

export default function WeddingGift() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(bankInfo.account)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="wedding-gift" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#44322a] mb-12">
        Wedding Gift
      </h2>
      <p className="mb-4 max-w-lg mx-auto text-gray-700">
        Your presence is the most meaningful gift, but if you wish to bless us with a token of love, here's our bank information:
      </p>

      <div className="inline-block bg-white p-6 rounded-2xl shadow-md text-left max-w-md mx-auto">
        <p className="font-semibold">Bank: {bankInfo.bank}</p>
        <p className="font-semibold">Name: {bankInfo.name}</p>
        <div className="flex items-center gap-2 mt-2">
          <p className="font-semibold">Account: {bankInfo.account}</p>
          <Button size="icon" variant="ghost" onClick={handleCopy}>
            <Copy className="w-4 h-4" />
          </Button>
          {copied && <span className="text-green-600 text-sm">Copied!</span>}
        </div>
      </div>
    </section>
  )
}

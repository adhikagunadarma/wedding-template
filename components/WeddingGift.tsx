"use client"

import { Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image";


const bankInfos = [
  { name: "Elizabeth Hestia", account: "7310401425", bank: "BCA" },
  { name: "Reinaldhy Arya Prawira", account: "3452633628", bank: "BCA" }
]
// info detail

export default function WeddingGift() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const [copied, setCopied] = useState<string | null>(null)

    const handleCopy = (account: string) => {
      navigator.clipboard.writeText(account)
      setCopied(account) // this works now
      setTimeout(() => setCopied(null), 2000)
    }

  return (
    <motion.section
      id="wedding-gift"
      className="py-16 px-6  bg-[#fefbf6]  text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.h2
        className="font-script text-5xl sm:text-6xl md:text-7xl text-[#44322a] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Wedding Gift
      </motion.h2>

      <motion.p
        className="mb-4 max-w-lg mx-auto text-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Your presence is the most meaningful gift, but if you wish to bless us with a token of love, here's our bank information:
      </motion.p>

      {bankInfos.map((bankInfo, i) => (
      <motion.div
        className="inline-block bg-white p-6 rounded-2xl shadow-md text-left w-80 h-40 mx-6 my-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-semibold">Bank: {bankInfo.bank}</p>
        <p className="font-semibold">Name: {bankInfo.name}</p>
        <div className="flex items-center gap-2 mt-2">
          <p className="font-semibold">Account: {bankInfo.account}</p>
          <Button size="icon" variant="ghost" onClick={() => handleCopy(bankInfo.account)}>
            <Copy className="w-4 h-4" />
          </Button>
          {copied === bankInfo.account && <span className="text-green-600 text-sm">Copied!</span>}
        </div>
      </motion.div>

      ))}

      {/* Big Image with Thank You */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={`${basePath}/images/party.png`}
          alt="Thank you"
          width={800} // set your actual width
          height={400} // set your actual height
          className="mx-auto rounded-2xl shadow-lg max-w-2xl w-full"
        />
        <p className="my-18 text-large sm:text-xl md:text-2xl font-light text-[#44322a]">
          Thank you for your love & blessings
        </p>
      </motion.div>
    </motion.section>
  )
}

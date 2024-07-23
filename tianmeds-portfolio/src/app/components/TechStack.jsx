'use client'
import {motion } from "framer-motion"
import { useRef } from "react"


export default function TechStack() {

  
  const ref = useRef(null)
    
  const imageLinks = [
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/62a74dd1223343fbc2207d00.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/5848152fcef1014c0b5e4967.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_014652406.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_015140724-removebg-preview.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_015557807.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_015843894.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_020139004.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_020741219.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_020757471.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-03-29_021857071.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/ClerkLogo.jpeg'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/GraphQL_Logo.svg.png'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Hygraph_Logo.jpg'
    },
    {
      url: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/PostgreSQL.png'
    },

  ]


  return (
    <div className="w-full mt-4">
        <h1 className="font-semibold text-lg mb-4">Technology Stacks</h1>
        <div class="flex flex-wrap">
        {imageLinks.map((link, index) => ( // Add key prop
            <div key={index} ref={ref} className="w-auto py-1">
            <motion.div 
             initial={{y:50}}
             whileInView={{y:0}}
             transition={{duration: 0.5, type:"spring"}}
              class="w-24 h-24 border-2 border-white rounded-md bg-black dark:bg-white m-1 flex justify-center items-center">
                <img src={link.url} alt="Sample Image" class="p-3 invert transform transition-transform dark:filter-none  "/>
            </motion.div>
            </div>
        ))}
        </div>
    </div>
  )
}

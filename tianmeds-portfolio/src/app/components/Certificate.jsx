'use client'
import {motion } from "framer-motion"
import { useRef } from "react"


const Certificate = () => {
    const certificates = [
        {
            name: 'AWS Cloud Practitioner',
            provider: 'AWS',
            url: 'https://drive.google.com/file/d/1BImge0QFX1uQM5_uk_XoHVgQYJDk0984/view?usp=sharing'

        },
        {
            name: 'AWS Cloud Solutions Architect',
            provider: 'AWS',
            url: 'hhttps://drive.google.com/file/d/1r2g6Ro83g-M6TtrCr-XhROHikERX8kbV/view?usp=sharing'
        },
        {
            name: 'Google UX Design',
            provider: 'Google',
            url: 'https://drive.google.com/file/d/1j-dsmSA9kwdWImHKRwuY-ScrpwlfaDW5/view?usp=sharing'
        },
        {
            name: 'Google IT Support',
            provider: 'Google',
            url: 'https://drive.google.com/file/d/1HzJGABgpCJVr0hdstiLN9eIoQtEywoL3/view?usp=sharing'
        },
        {
            name: 'Meta Frontend Developer',
            provider: 'Meta',
            url: 'https://drive.google.com/file/d/134wDHdztSam1Chr3K897GvLHMrjowq-6/view?usp=sharing'
        },
        {
            name: 'Alibaba Cloud Associate',
            provider: 'Alibaba Cloud',
            url: 'https://drive.google.com/file/d/1DhicQM2jZd2WeomvOMZMK98oLUVpp1uo/view'
        },
        {
            name: 'Cybersecurity Analyst',
            provider: 'Cisco Networking Academy',
            url: 'https://www.credly.com/badges/371190e1-387b-4bde-bd71-3c7ba078cf04/linked_in_profile'
        },
        {
            name: 'Scrum Foundation Professional',
            provider: 'CertiProf',
            url: 'https://drive.google.com/file/d/12sRQPLVk2HzIqNvjrRDSi7vtNxudvNEI/view'
        },
        {
            name: 'AWS Academy Graduate',
            provider: 'AWS Academy',
            url: 'https://www.credly.com/badges/1ca3cb00-f27a-485c-be65-3884f2f4991b/public_url'
        },
        {
            name: 'Foundational C# with Microsoft',
            provider: 'Microsoft',
            url: 'https://www.freecodecamp.org/certification/TianMeds/foundational-c-sharp-with-microsoft'
        },
        {
            name: 'Data Structures and Algorithms',
            provider: 'FreeCodeCamp',
            url: 'https://www.freecodecamp.org/certification/TianMeds/javascript-algorithms-and-data-structures'
        },
        {
            name: 'Backend Development and APIs',
            provider: 'FreeCodeCamp',
            url: 'https://www.freecodecamp.org/certification/TianMeds/back-end-development-and-apis'
        },
    ]

    const ref = useRef(null)

  return (
    <div className="w-full mt-4">
    <h1 className="font-semibold text-lg mb-4">Certificate</h1>

    <div className='flex flex-wrap'>
    {certificates.map((certificate, index) => (
        <div key={index} className='w-auto py-1'>
            <motion.div 
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type:"spring"}}
                className='w-60 h-28 border-2 border-white rounded-md bg-black dark:bg-white m-1 p-3 space-y-1.5'
            >
                <div className='text-white dark:text-black text-sm font-bold'>{certificate.name}</div>
                <div className='text-white dark:text-gray-600 text-xs font-medium'>{certificate.provider}</div>
                <div className='text-white dark:text-black text-xs flex items-center'> 
                    <a href={certificate.url} target='_blank' className='text-white dark:text-black flex items-center transition-transform hover:translate-x-1 font-semibold '>View Certificate                    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-4 ml-2 transition-transform hover:translate-x-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </div>
    ))}
</div>

        
    </div>
  )
}

export default Certificate
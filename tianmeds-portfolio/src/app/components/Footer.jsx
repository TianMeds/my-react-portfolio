import React from 'react'
import Container from './Container'
import Image from 'next/image';

const Footer = () => {
  return (
<Container className="flex flex-col gap-3">
    <footer className="flex flex-col items-center">
        <div className="flex space-x-4">
          <a href="https://github.com/TianMeds" target="_blank" rel="noopener noreferrer">
            <Image src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/4e3c205524bf6188a19f4264705906fac42756da/github-mark.svg" alt="GitHub" width={24} height={24} className="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>

          <a href="https://www.linkedin.com/in/tianmeds/" target="_blank" rel="noopener noreferrer">
            <Image src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/7c40e80f97928c4ae31e6a38d096c0bc805486a0/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>

          <a href="https://www.instagram.com/engr_tianmeds/" target="_blank" rel="noopener noreferrer">
            <Image src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/7c40e80f97928c4ae31e6a38d096c0bc805486a0/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>

          <a href="https://dribbble.com/TianMeds" target="_blank" rel="noopener noreferrer">
            <Image src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/7c40e80f97928c4ae31e6a38d096c0bc805486a0/dribbble.svg" alt="Dribbble" width={24} height={24} className="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-500">2024 © All Rights Reserved</div>
          <div className="text-sm text-gray-500 ml-4">Developed by Tianmeds</div>
        </div>
    </footer>
</Container>
  )
}

export default Footer

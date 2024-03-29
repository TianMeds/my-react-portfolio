import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <Container className="flex flex-col gap-3">
    <footer class="flex flex-col items-center">
        <div class="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/4e3c205524bf6188a19f4264705906fac42756da/github-mark.svg" alt="GitHub" class="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/7c40e80f97928c4ae31e6a38d096c0bc805486a0/linkedin.svg" alt="LinkedIn" class="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/7c40e80f97928c4ae31e6a38d096c0bc805486a0/instagram.svg" alt="Instagram" class="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>

          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/7c40e80f97928c4ae31e6a38d096c0bc805486a0/dribbble.svg" alt="Dribbble" class="w-6 h-6 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
          </a>
        </div>
        <div class="mt-4">
          <div class="text-sm text-gray-500">2024 © All Rights Reserved</div>
          <div class="text-sm text-gray-500 ml-4">Developed by Tianmeds</div>
        </div>
    </footer>
  </Container>
  )
}

export default Footer
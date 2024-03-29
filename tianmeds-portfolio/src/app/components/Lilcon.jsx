'use client'
import { useRef } from 'react';
import {motion, useScroll } from 'framer-motion';

export default function Lilcon({reference}) {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
          target: reference,
          offset: ["center end", "center center"]
        }
      )

  return (
    <figure className='absolute left-0 stroke-black dark:stroke-white'>
        <svg className="-rotate-90" width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-sky-600 stroke-1 fill-none dark:stroke-stone-400' />
            <motion.circle 
            cx="75" cy="50" r="20" className='stroke-[5px] fill-white dark:fill-[#1b1b1b]'
            style={{
                pathLength: scrollYProgress
            }}
            
            />
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-sky-600 dark:fill-stone-400'/>
        </svg>
    </figure>
  )
}

'use client'

import {motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Lilcon from "../components/Lilcon"


const Details = ({position, company, companyLink, time, address, work}) => {

    const ref = useRef(null)
    return (
      <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-center justify-between">
        <Lilcon reference={ref} />
        <motion.div
          initial={{y:50}}
          whileInView={{y:0}}
          transition={{duration: 0.5, type:"spring"}}
        >
          <h3 className="capitalize font-bold text-xl">
            {position}&nbsp;
            {company && <a href={companyLink} target="_blank" className="text-sky-600 capitalize dark:text-stone-400 text-xl">@{company}</a>}
          </h3>
          <span className="capitalize font-medium text-gray-500 dark:text-white/75">
            {time} | {address}
          </span>
  
          <p className="font-medium w-full">
            {work}
          </p>
  
        </motion.div>
      </li>
    )
    
  }


const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
          target: ref,
          offset: ["start end", "center start"]
        }
      )

  return (
    
<div className="w-full mt-4">
  <h1 className="font-semibold text-lg mb-4">Experience</h1>

  <div ref={ref} className="w-full mx-auto mt-16 relative">
    <motion.div 
      style={{ scaleY: scrollYProgress }}
      className="absolute left-9 top-0 w-1 h-full bg-black origin-top dark:bg-white" 
    />
    <ul className="w-full flex flex-col items-start justify-between">

      <Details
        position="Full Stack Developer Intern"
        company="Wizard Group"
        companyLink="https://wizard.group"
        time="Nov 2024 - Present"
        address="Taguig, PH"
        work="Will work on Front-end and Backend Development it will also apply DevOps in this Internship"
      />

      <Details
        position="Developer Intern"
        company="Andio IT Solution"
        companyLink="https://www.andiosolutions.com/"
        time="May 2024 - September 2024"
        address="Makati, PH"
        work="Collaborated with IT Team to develop and maintain the company's project. Developed a mobile application using PowerApps and Power BI for analytics."
      />

      <Details
        position="BS in Information Technology"
        company="Asia Pacific College"
        companyLink=""
        time="2021-2025"
        address="Asia Pacific College, Makati, PH"
        work="Relevant Coursework: Data Structures and Algorithms, Web Development, Network Administration, Database Management, and Project Management."
      />

      <Details
        position="Marketing Committee"
        company="JPCS"
        companyLink="https://www.facebook.com/JPCSAPC"
        time="2023 - Present"
        address="Makati, PH"
        work="Collaborated with team members to develop visually compelling graphics and designs to promote JPCS events, initiatives, and activities. Actively participated in brainstorming sessions to generate innovative ideas for marketing campaigns and strategies."
      />
    </ul>
  </div>
</div>

  )
}

export default Experience

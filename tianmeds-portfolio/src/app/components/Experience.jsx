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

                  <div ref={ref} class="w-[100%] mx-auto mt-16 relative">

                    <motion.div 
                      style={{scaleY: scrollYProgress}}
                      className="absolute left-9 top-0 w-1 h-full bg-black origin-top dark:bg-white" 
                    />
                     <ul className="w-full flex flex-col items-start justify-between ml-4">


                     <Details
                        position="BS in Information Technology"
                        company=""
                        companyLink=""
                        time="2021-2025"
                        address="Asia Pacific College"
                        work="Relevant Coursework: Data Structures and Algorithms, Web Development, Network Administration, Database Management, and Projec
                        Management."
                      />

                     <Details
                        position="Developer"
                        company="JPCS"
                        companyLink="https://www.facebook.com/JPCSAPC"
                        time="Ongoing"
                        address="Makati, PH"
                        work="I have worked on a variety of projects, including websites, web apps, and software development projects."
                      />

                     <Details
                        position="Full Stack Developer"
                        company="Gado and Jess Jalandoni"
                        companyLink=""
                        time="Ongoing"
                        address="Mandaluyong, PH"
                        work="I have worked on a variety of projects, including websites, web apps, and software development projects."
                      />

                     <Details
                        position="Marketing Committee"
                        company="JPCS"
                        companyLink="https://www.facebook.com/JPCSAPC"
                        time="2023 - Present"
                        address="Makati, PH"
                        work="Collaborated with team members to develop visually compelling graphics and designs to promote JPCS
                        events, initiatives, and activities.Actively participated in brainstorming sessions to generate innovative ideas for marketing campaigns
                        and strategies."
                      />

                      <Details
                        position="HR Assistant"
                        company="SM Supermalls"
                        companyLink="https://www.smsupermalls.com/mall-directory/sm-makati/information/"
                        time="2022 - 2022 "
                        address="Makati, PH"
                        work="Conducted document scanning with meticulous attention to detail to ensure accuracy and organization. 
                        Managed communication with applicants via SMS, conveying important information and updates
                        promptly and professionally."
                      />

                      <Details
                        position="Graphic Designer"
                        company="Fiverr"
                        companyLink=""
                        time="2020 - 2021"
                        address="Makati, PH"
                        work="Demonstrated creativity and expertise in logo design, especially in the gaming and business industries,
                        assisting numerous businesses with their branding initiatives."
                      />
                     </ul>
                  </div>
            </div>
  )
}

export default Experience
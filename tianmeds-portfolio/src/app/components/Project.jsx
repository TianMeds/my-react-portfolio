'use client'
import Link from 'next/link'
import Image from 'next/image'
import project1 from '../../../public/Portfolio-Mockup.png'
import project2 from '../../../public/MockPrepMockup.png';
import project4 from '../../../public/Weather-Mockup.png';
import project5 from '../../../public/Homecity-Mockup.png';
import project7 from '../../../public/FoodMockup.png';
import project9 from '../../../public/Scholarlink-Mockup.png';
import {motion } from "framer-motion"
import { useRef } from "react"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    
    const ref  = useRef(null)
    return (

        <div ref={ref}>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type:"spring"}}
            >
        <article

        className='w-full flex flex-col lg:flex-row items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-black dark:border-white bg-white dark:bg-black shadow-2xl p-6 lg:p-12 mb-10 '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-black dark:bg-white rounded-[2.5rem] rounded-br-3xl hidden md:block' />


            <Link href={link} target='_blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg mb-4 lg:mb-0 lg:mr-6'>
                <Image src={img} alt={title} className='w-full h-auto rounded-lg border-black dark:border-white border-2  transition-transform transform-gpu hover:scale-105 duration-300 ease-in-out'  />
            </Link>

            <div className='w-full lg:w-1/2 flex flex-col items-start justify-between'>
                <span className='text-sky-600 font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h3 className='my-2 w-full text-left text-2xl lg:text-4xl font-bold'>{title}</h3>
                </Link>
                <p className='my-2 font-medium text-black dark:text-white'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <Image src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/4e3c205524bf6188a19f4264705906fac42756da/github-mark.svg" alt="GitHub" width={32} height={32} className="dark:filter dark:invert transform transition-transform hover:-translate-y-1" />
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold dark:bg-white dark:text-black transition-colors duration-300 hover:scale-105'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>

        </motion.div>
        </div>
    );

}

const NotFeaturedProject = ({title, type, img, link, github}) => {

    const ref = useRef(null)

    return (
        <div ref={ref}>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type:"spring"}}
            >
        <article 
        className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white dark:bg-black dark:border-white p-6 relative xs:p-4 mb-10 '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-black dark:bg-white rounded-[2.5rem] rounded-br-3xl hidden md:block' />

                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-96 border-black dark:border-white border-2 rounded-lg transition-transform transform-gpu hover:scale-105 duration-300 ease-in-out' />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-sky-600 font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h3 className='my-2 w-full text-left text-4xl font-bold'>{title}</h3>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='ml-4 text-lg font-semibold underline'>
                            Visit
                        </Link>
                        <Link href={github} target='_blank' className='w-8'>
                            <Image src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/4e3c205524bf6188a19f4264705906fac42756da/github-mark.svg" alt="GitHub" width={32} height={32} className="dark:filter dark:invert transform transition-transform hover:-translate-y-1" />
                        </Link>
                    </div>
                </div>
        </article>
        </motion.div>
        </div>
    )
}

const Project = () => {

    const ref = useRef(null)
  return (    
    
        <div  ref={ref} className="w-auto mb-16 flex flex-col items-center justify-center dark:text-light">
            <motion.h1
                            initial={{y:50}}
                            whileInView={{y:0}}
                            transition={{duration: 0.5, type:"spring"}}
            className="text-5xl font-black sm:text-8xl m-4 mb-10">Projects</motion.h1> 

            <div className='flex flex-col gap-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-8 sm:gap-y-8'>
                <div className='col-span-12'>
                    <FeaturedProject
                        type='Featured Website'
                        title='Scholarship Management System'
                        summary="Scholarlink is a proposed system developed by the See Solutions Team aimed at supporting the Gado and Jess Jalandoni Scholarship Project (GJJSP) Team, under the Assisi Development Foundation, Inc. The system is designed to address the challenges of managing scholar information and streamlining submission processes, thereby enhancing the GJJSP's capacity to make significant human capital investments by offering deserving Filipino students the opportunity to pursue college education."
                        img={project9}
                        link='https://gadojessjalandoni-client.pages.dev/login'
                        github='https://gadojessjalandoni-client.pages.dev/login'
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='flex-1'>
                        <NotFeaturedProject
                            type='Website'
                            title='Food Ordering System'
                            img={project7}
                            link='https://rene-grace-sizzlingg.vercel.app/'
                            github='https://github.com/TianMeds/food-ordering.git'
                        />
                    </div>
                    <div className='flex-1'>
                        <NotFeaturedProject
                            type='Website'
                            title='Full Stack Portfolio'
                            img={project1}
                            link='https://react-portfolio-dro.pages.dev/'
                            github='https://github.com/TianMeds/my-Official-Portfolio'
                        />
                    </div>
                </div>
                <div className='col-span-12'>
                    <FeaturedProject
                        type='Featured Website'
                        title='SAAS: MockPrep AI'
                        summary='MockPrep AI is a Software as a Service (SAAS) platform that offers a wide range of features for students and professionals to prepare for their interviews. The Platform offers questions and answers, feedback to your answers.'
                        img={project2}
                        link='https://mockprep-ai-three.vercel.app/'
                        github='https://github.com/TianMeds/gemini-mockupint.git'
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='flex-1'>
                        <NotFeaturedProject
                            type='Website'
                            title='Real Estate Website'
                            img={project5}
                            link='https://homecity.pages.dev'
                            github='https://homecity.pages.dev'
                        />
                    </div>
                    <div className='flex-1'>
                        <NotFeaturedProject
                            type='Website'
                            title='Global Weather App'
                            img={project4}
                            link='https://tianmeds.github.io/weather-web-api/'
                            github='https://github.com/TianMeds/weather-web-api.git'
                        />
                    </div>

                </div>
            </div>
        </div>

        
    )
}

export default Project;

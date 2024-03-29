import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import project1 from '../../../public/ReactPortfolio.jpg'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 relative rounded-br-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-black rounded-[2.5rem] rounded-br-3xl'/>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-sky-600 font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h3 className='my-2 w-full text-left text-4xl font-bold'>{title}</h3>
                </Link>
                <p className='my-2 font-medium text-black'>{summary}</p>

                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'>
                    <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/4e3c205524bf6188a19f4264705906fac42756da/github-mark.svg" alt="GitHub" class="w-8 h-8 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
                </Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold'>
                    Visit Project
                </Link>
               
            </div>
            </div>

        </article>
    )

}

const NotFeaturedProject = ({title, type, img, link, github}) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-black rounded-[2rem] rounded-br-3xl'/>
                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto' />
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
                            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/4e3c205524bf6188a19f4264705906fac42756da/github-mark.svg" alt="GitHub" class="w-8 h-8 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
                        </Link>
                    </div>
                </div>
        </article>
    )
}

const Project = () => {
  return (    
        <div className="w-full mt-4">
            <h1 className="text-5xl font-black sm:text-8xl m-4">Projects</h1> 

            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                    <FeaturedProject
                        type='Featured Project'
                        title='Project 1'
                        summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
                        img={project1}
                        link='https://www.google.com'
                        github='https://www.google.com'
                    />
                </div>
                <div className='col-span-6'>
                <NotFeaturedProject
                        type='Featured Project'
                        title='Project 1'
                        img={project1}
                        link='https://www.google.com'
                        github='https://www.google.com'
                    />
                </div>
                <div className='col-span-6'>
                    Project 2
                </div>

                <div className='col-span-12'>
                    Featured Project
                </div>

            </div>

        </div>
    )
}

export default Project;
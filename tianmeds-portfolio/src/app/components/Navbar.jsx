'use client'
import Link from 'next/link'
import ThemeButton from './ThemeButton'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {

    const navigation = [
        {
            title: 'About',
            link: '/about'  
        },
        {
            title: 'Projects',
            link: '/project'  
        },
        {
            title: 'Contact',
            link: '/contact'  
        },
    ]

    const pathName = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
    <div>
        <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between'>
            <div className='mx-4'>
                <Link href="/" className='uppercase font-semibold decoration-[1px] underline-offset-2 hover:text-blue-600 '>Christian</Link>
                <p className="text-xs">Full Stack Developer</p>
            </div>
            {/* Render hamburger menu button only for mobile and tablet views */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className="focus:outline-none">
                {!isOpen && (
                    <button onClick={toggleMenu} className="focus:outline-none mx-4">
                        {/* Hamburger icon when menu is closed */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                )}
                </button>
            </div>
            {/* Render regular navigation for laptop view */}
            <div className="hidden md:flex items-center gap-7">
                {navigation.map((item) => (
                    <Link key={item.title} href={item.link} className={`relative group overflow-hidden ${pathName === item?.link && "text-blue-700"}`}>
                        {item.title}
                        <span className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] group-hover:translate-x-0 duration-300 ${pathName ===  item?.link ? "bg-blue-600 dark:bg-blue-600 translate-x-0" : "bg-black dark:bg-white"}`}/>
                    </Link>
                ))}
                <ThemeButton/>
            </div>
        </div>
        {/* Render the mobile menu if isOpen is true */}
        {isOpen && (
    <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50">
<div className="flex flex-col justify-center items-center h-full w-full">
            <div className="absolute top-4 right-4">
                <button onClick={closeMenu} className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            {navigation.map((item) => (
    <Link key={item.title} href={item.link} className={`relative group overflow-hidden ${pathName === item?.link && "text-blue-700"} text-4xl mb-2 text-white`}>
        {item.title}
        <span className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] group-hover:translate-x-0 duration-300 ${pathName ===  item?.link ? "bg-blue-600 dark:bg-blue-600 translate-x-0" : "bg-black dark:bg-white"}`}/>
    </Link>
))}

            <ThemeButton/>
        </div>
    </div>
)}


    </div>

    )
}

export default Navbar

'use client'
import Link from 'next/link'
import ThemeButton from './ThemeButton'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const navigation = 
    [
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


  return (
    <div>
        <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between'>
        <Link href="/" className='uppercase font-semibold underline decoration-[1px] underline-offset-2 hover:text-blue-600'>Christian</Link>
        <div className='hidden md:inline-flex items-center gap-7'>
            {navigation.map((item) => (
                <Link key={item.title} href={item.link} className={`relative group overflow-hidden ${pathName === item?.link && "text-blue-700"}`}>
                    {item.title}
                    <span className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] group-hover:translate-x-0 duration-300 ${pathName ===  item?.link ? "bg-blue-600 dark:bg-blue-600 translate-x-0" : "bg-black dark:bg-white"}`}/>
                </Link>
            ))}
        <ThemeButton/>
        </div>
        </div>
    </div>
  )
}

export default Navbar
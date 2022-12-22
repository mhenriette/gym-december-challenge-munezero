import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    
    <div className='bg-primary flex px-6  top-0 z-[500] w-full fixed '>
        <div className='flex items-center justify-between w-full'>
            {/* logos */}
                <div className='flex items-center justify-between gap-2'>
                    <Link href='/#' className='flex p-[6px]'>
                    <Image
                    className="invert"
                    src="/logos/logo1.svg"
                    priority
                    width={33}
                    height={33}
                    alt='logo'
                    />
                    </Link>
                    <Link className='flex py-5 gap-3' href='/#'>
                    <Image
                    className="invert"
                    src="/logos/tum.svg"
                    priority
                    width={80}
                    height={42}
                    alt='logo'
                    />
                    <span className="font-normal text-xs  text-white lg:block hidden  ">
                    Technical <br></br>
                    University <br></br>
                    of Munich
                </span>
                </Link>
            </div>
            {/* links */}
            <div className='flex justify-between  items-center'>
            <nav className='lg:block mr-[54px] hidden '>
            <ul className='flex gap-[1.5rem]'>
                <li className='mylinks'><Link href='/NewsAndEvents'>NEWS AND EVENTS</Link></li>
                <li className='mylinks'><Link href='/Studies'>STUDIES</Link></li>
                <li className='mylinks'><Link href='/LifeLong'>LIFE LONG LEARNING</Link></li>
                <li className='mylinks'><Link href='/Research'>RESEARCH</Link></li>
                <li className='mylinks'><Link href='/Innovation'>INNOVATION
</Link></li>
                <li className='mylinks'><Link href='/Community'>COMMUNITY</Link></li>
                <li className='mylinks'><Link href='/About'>ABOUT TUM</Link></li>
            </ul>
            </nav>
            <ul className='flex mr-[10px] uppercase font-medium text-white'>
                <li className='opacity-50'><Link href='/#'>DE</Link></li>
                <li className=' border-l-2 ml-2 pl-2 border-solid'><Link href='/#'>EN</Link></li>
            </ul>
            <div className='p-[10px]'>
                <Image 
                className="invert"
                src="/logos/search.svg"
                priority
                width={24}
                height={24}
                alt='search'/>
            </div>
            <div className='block lg:hidden'>
            <Image 
                className="invert"
                src="/logos/burger.svg"
                priority
                width={24}
                height={24}
                alt='burger'/>
            </div>
            </div>
           

        </div>

    </div>
  )
}

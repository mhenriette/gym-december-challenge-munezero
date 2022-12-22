import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import presisential from '../../public/images/presidential.webp'
import presidential from '../../public/images/presidential.webp'
import Button from '../ui/Button'


export default function Presidential() {
  return (
    <div className='mt-24 mx-auto container'>
        <div className='px-6 mx-6'>
    <div className='m-4  px-6 lg:flex items-center'>
    <div className='-z-50  flex-[3]'>
<Image priority src={presidential}  className='' width={750} height={422} alt='presidential'  /></div>
<div className='flex flex-col  gap-3 p-10 text-white bg-secondary  flex-[2] lg:-ml-36  md:-mt-20 z-50 md:mx-20 lg:mx-0 lg:mt-0 lg:h-fit  relative '>
<h1 className='font-bold text-[28px]'>What drives us: President Thomas F. Hofmann about TUM</h1>
<p className='font-normal text-base'>Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.</p>
<Button text='READ MORE' link='/#' styles='bg-white text-secondary self-start hover:bg-[#14519a] hover:text-white' />
</div>
</div>
</div>
</div>
  )
}

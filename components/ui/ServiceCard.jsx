import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceCard({image,title, subtitle, btn , link, styles}) {
  return (
    <div className={`flex gap-5 flex-col ${styles} group-hover:text-secondary`}>
        <div className='group-hover:text-secondary'><Image src={image} alt='image' priority className='w-full h-full object-cover lg:h-[256px]'/></div>
        <div className='mt-6 group-hover:text-secondary'>
            <h1 className='font-bold text-2xl text-primary group-hover:text-secondary'>{title}</h1>
            <p className='font-medium text-base text-primary mt-4 group-hover:text-secondary'>{subtitle}</p>
            <button className='py-4 px-5 font-bold border border-secondary text-secondary mt-6'><Link href={link}>{btn}</Link></button>
        </div>
    </div>
  )
}

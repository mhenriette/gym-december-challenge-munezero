import React from 'react'
import Image from 'next/image'

export default function NewsCard({image, pictitle, subtitle, title, paragraph, date, time}) {
    return (
        <div>
            <div className='relative'>
                <Image src={image} priority className='object-cover w-full h-full -z-20' alt='image'/>
                <p className=' z-30 absolute bottom-0 self-start left-0 bg-gray-200 text-blue-600 px-2'>{pictitle}</p>
            </div>
            <div className='mt-3 '>
            <h2 className='font-bold text-base'>{subtitle}</h2>
            <h1 className='text-xl font-bold mt-3'>{title}</h1>
            <p className='text-sm font-medium mt-5'>{paragraph}</p>
       
          <div className='flex items-center justify-between mt-3'>
            <span >{date}</span>
            <span >{time}</span>
          </div>
            </div>
    
        </div>
      )
}

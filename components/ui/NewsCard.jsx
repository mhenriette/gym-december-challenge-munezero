import React from 'react'
import Image from 'next/image'

export default function NewsCard({image, pictitle, subtitle, title, paragraph, date, time}) {
    return (
        <div className='group'>
            <div className='relative group-hover'>
                <Image src={image} priority className='object-cover w-full h-full -z-20' alt='image'/>
                <p className=' z-30 absolute bottom-0 text-[13.33px] font-medium self-start left-0 bg-gray-200 text-black group-hover:text-secondary px-2'>{pictitle}</p>
            </div>
            <div className='mt-3 group-hover:text-secondary '>
              <p className='text-[1rem] font-bold'>{subtitle}</p>
            <h1 className='text-xl font-bold mt-3 group-hover:text-secondary'>{title}</h1>
            <p className='text-sm font-medium mt-5 group-hover:text-secondary'>{paragraph}</p>
       
          <div className='flex items-center text-[13.33px] justify-between mt-3 group-hover:text-secondary'>
            <span >{date}</span>
            <span >{time}</span>
          </div>
            </div>
    
        </div>
      )
}

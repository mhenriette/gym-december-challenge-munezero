import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../ui/Button'
import Philip from '../../public/images/philip.webp'

export default function Alumni() {
 

return (
    <div className='mt-28 mx-auto container'>
    <div className='px-6 mx-6'>
    <div className='px-6 mt-11 lg:flex items-center flex-row-reverse '>
    <div className='relative -z-30 flex-[3] '>
        <Image src={Philip} priority className='w-full h-full lg:h-[447px] al object-cover' alt='csmimage'/>
    </div>
    <div className='bg-[#ea7237] text-white flex-[2] lg:mx-0 lg:mt-0 lg:-mr-16  p-10 mt-[72px] md:mx-16 md:-mt-10 z-40 '>
        <h1 className='font-bold text-3xl text-primary'>"Here I have met a lot of people who are breaking new ground"</h1>
        <div className='mt-5'><p className='text-base text-primary'>Philip Häusser, alumnus </p></div>
       
      <div className='mt-8'> <Button text='
								Read the alumni story
							' link='/#'/></div>
    </div>
</div>
</div>
</div>
  )
  
  
}

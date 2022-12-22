import React from 'react'
import Image from 'next/image'
import csmimag from '../../public/images/csm.webp'
import Link from 'next/link'
import Button from './Button'

export default function Advert() {
  return (
    <div className='lg:px-6 px-0  mt-11 lg:flex items-center '>
    <div className='relative -z-30 flex-[3] '>
        <Image src={csmimag} priority className='w-full h-full lg:h-[447px] al object-cover' alt='csmimage'/>
    </div>
    <div className='bg-[#8f81ea] text-white flex-[2] lg:mx-0 mt-0 lg:-ml-16  p-10 lg:mt-[72px] md:mx-16 md:-mt-10 z-40 '>
        <h1 className='font-bold text-[28px] text-primary'>Schools and Research Centers</h1>
        <div className='mt-5'><p className='text-base font-normal text-primary'>They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation.</p>
        </div>
      <div className='mt-8'> <Button text='organization' link='/#'/></div>
    </div>
</div>
  )
}

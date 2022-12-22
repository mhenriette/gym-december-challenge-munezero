import React from 'react'
import Image from 'next/image'
export default function Degrees() {
  return (
    <div className='mt-12'>
        <div className='mx-6 py-6  '>
            <div className='border-b border-secondary flex justify-between items-center  hover:bg-opacity-30 border-solid  bg-[#E8ECEF]'>
                <p className='py-5 pl-5 text-[#727272] font-bold text-2xl '>Select Degree Program or Select Keyword</p>
                <div className='pr-3'><Image src='/logos/down.svg'
                width={24}
                height={24}
                alt='arrow'
                
                />
                </div>
            </div>
            <div className='flex items-center ml-[2px] mt-5 justify-end gap-1'>
                <p className='text-secondary font-bold text-base '>Degree Programs</p>
                <Image src='/logos/rights.svg'
                width={22}
                height={22}
                alt='arrow'
                />
            </div>

        </div>

    </div>
  )
}

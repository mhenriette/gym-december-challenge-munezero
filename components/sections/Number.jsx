import React from 'react'

export default function Number() {
  return (
    <div className='mt-24 mx-auto container '>
        <div className='lg:px-6 lg:mx-6 px-0 mx-3  '>
            <div className='mb-12 text-primary font-bold text-[32px]'>
                <h2>
                TUM in numbers
            </h2>

            </div>
            <div className='sm:grid flex flex-col gap-4 grid-cols-5 grid-rows-2 '>
        <div className='bg-secondary p-10 text-7xl text-white font-bold md:text-[130px] col-start-1 col-end-4 flex row-start-1 row-end-3 flex-col lg:text-start  text-center'><span>50,000</span> 
<span className='text-[34px] font-bold mt-5'>Students</span></div>
        <div className='bg-[#f7b11e] p-5 flex-col lg:flex-row  flex items-center justify-between col-start-4 col-end-6 row-start-1 row-end-1'>
            <div className='lg:w-1/2'> <p className='text-[90px] lg:text-start  text-center font-bold text-primary '>176</p></div>
<div className=' lg:w-1/2'><p className='text-[22px] text-primary text-center  font-bold'>ERC Grants for cutting-edge research</p></div>
</div>
        <div className='bg-[#b55ca5] w-full lg:flex-row flex-col  flex items-center font-bold p-5 text-8xl col-start-4 col-end-6 row-start-row-end-3'>
            <div className='w-1/2'><p className='text-primary font-bold text-[90px]'>18</p></div>
            <div className='w-1/2 mt-5 text-[22px]'><p className='text-primary font-bold'>Nobel laureates</p></div>
            </div>
    </div>

        </div>
    </div>
  )
}

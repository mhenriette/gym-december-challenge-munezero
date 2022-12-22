import React from 'react'
import Button from '../ui/Button'

export default function Prospective() {
  return (
    <div className='mt-24 mx-auto container'>
        <div className='lg:px-6 lg:mx-6 mx-6'>
        <div className='lg:py-6 lg:mx-6  mx-0 '>
            <div className='mb-12'>
                <div className='font-bold text-primary'>
                    <p className='text-base'>Customized navigation</p>
                    <h2 className='font-bold mt-2 text-[2rem]'>
                Discover what TUM has to offer
            </h2>
                </div>
            </div>

        </div>
        <div className='flex items-start gap-14 flex-col lg:flex-row '>
            {/* form */}
            <div className='mt-8 w-1/3 hidden lg:block '>
              
                    <div className='border px-2 text-base   font-bold text-secondary -mr-32   mx-2 mb-2 border-[#cdd4db]  border-solid z-10 relative bg-white'>
                    <p className='px-5 py-3 '>For:</p>
                    <ul className=''>
                        <li className='py-3 px-5 bg-[#e8ecef] text-primary'><button >Prospective Students</button></li>
                        <li className='py-3 px-5 hover:bg-[#e8ecef] hover:text-primary'><button >Founders</button></li>
                        <li className='py-3 px-5 hover:bg-[#e8ecef] hover:text-primary'><button >Employees</button></li>
                        <li className='py-3 px-5 mt-5 border-t pt-2 hover:bg-[#e8ecef] hover:text-primary'><button >Show All</button></li>
                    </ul>

                         </div>
                       
                         </div>
                         {/* form of mobile */}
                         <div className='mt-8  lg:hidden block w-full '>
              <div className='bg-myyellow p-5 '>
              <div className='border px-2 text-base   font-bold text-secondary    mx-2 mb-2 border-[#cdd4db]  border-solid z-10 relative bg-white'>
              <p className='px-5 py-3 '>For:</p>
              <ul className=''>
                  <li className='py-3 px-5 bg-[#e8ecef] text-primary'><button >Prospective Students</button></li>
                  <li className='py-3 px-5 hover:bg-[#e8ecef] hover:text-primary'><button >Founders</button></li>
                  <li className='py-3 px-5 hover:bg-[#e8ecef] hover:text-primary'><button >Employees</button></li>
                  <li className='py-3 px-5 mt-5 border-t pt-2 hover:bg-[#e8ecef] hover:text-primary'><button >Show All</button></li>
              </ul>

                   </div>
                 
                   </div>
                   </div>
                         
            {/* tum card */}
                <div className='bg-myyellow py-28 px-32 max-w-[687px] lg:block hidden   w-full h-auto -z-10'>
                    <div className=' bg-perspective aspect-[269/140] bg-no-repeat w-full h-full bg-cover bg-center flex'>
                        <div className='ratio'></div>
                        <div className='ratiot'></div>
                        <div className='ratio'></div>
                        <div className='ratiot'></div>
                        <div className='ratiob'></div>
                        <div className='ratiot'></div>
                        <div className='ratio'></div>
                        <div className='ratiot'></div>
                        <div className='ratio'></div>
                        <div className='ratiot'></div>

                    </div>
                </div>
                {/* heading */}
                <div className='flex flex-col'>
                <div className='text-primary  '>
                    <div className='font-bold text-[2.265rem] lg:mt-[2px] mt-0'><h1>Prospective Students</h1></div>
                    <div className='text-xl font-normal mt-6'><p>Learn to bring ideas to life, discover new possibilities, work in teams and build networks.</p></div>
                </div>
                {/* button */}
                <Button text='learn more' link='/#' styles='border-secondary font-bold  bg-white self-start border text-secondary'/>
                </div>
        </div>
        </div>

    </div>
  )
}

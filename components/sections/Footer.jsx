import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Arrow from '../ui/Arrow'

export default function Footer() {
  return (
    <footer className='mt-12'>
        <div className='bg-[#0a2d57] text-white pt-14 pb-6 w-full'>
            {/* secxtion one container */}
        <div className='px-6 lg:mx-6'>
            <div className='grid lg:grid-cols-3  gap-y-5  justify-between items-start'>
                {/* section one part one */}
                <div className='px-3 flex '>
                    {/* logo */}
                    <div>
                        <div className='pt-[5px] mr-4'><Image src='/logos/tum.svg' className='invert' alt='alt' priority width='54' height='29'/></div>
                    </div>
                    {/* location */}
                    <div className=' '>
                                <p className='font-normal text-base'>
                                    Technical University of Munich<br></br>
                                    Arcisstraße 21<br></br>
                                    80333 München
                                </p>
                                
                                <p className='mt-5'>
								Phone:
							    <Link href="tel:+498928901">+49 (0)89-289-01</Link><br></br>
								Fax:
								<Link href="tel:+4928922000">+49 (0)89-289-22000</Link>
							</p>
                    </div>
                </div>
                {/*part two  */}
                <div className='px-3 flex flex-col '>
                    <h2 className='font-bold text-[1rem]'>
							Let&apos;s shape the future together.
						</h2>
                        <p className='font-normal text-base mt-3'>Support Us</p>
                </div>
                {/* part three */}
                <div className='px-3 flex flex-col'>
                <h2 className='font-bold text-[1rem]'>
                Latest news
						</h2>
                        <ul className='mt-3 flex flex-col'>
                            <li className='flex items-center'>
                                <Image src='/images/footerarrow.svg' width={24} height={24} priority alt='footer arrow'/>
                                <span className='ml-3'>
										Understanding the potentials of quantum technologies for industry
									</span>
                            </li>
                            <li className='flex items-center mt-4 '>
                                <Image src='/images/footerarrow.svg' width={24} height={24} priority alt='footer arrow'/>
                                <span className='ml-3'>
										
                                4.7 million euros in funding and 14 positions planned for the TUM Geriatronics campus
									
									</span>
                            </li>
                            <li className='flex items-center mt-4 '>
                                <Image src='/images/footerarrow.svg' width={24} height={24} priority alt='footer arrow'/>
                                <span className='ml-3'>
										
                                Germanys strongest university in business sciences
									
									</span>
                            </li>

                        </ul>

                </div>
            </div>

        </div>
        {/* section two */}
        <div className='px-6 lg:mx-6'>
            <hr className='border-t-[0.0625rem] opacity-[0.3] mt-[76px] mb-6'></hr>
            <div className='font-bold text-sm flex items-start lg:flex-row flex-col gap-y-5'>
                <div className='px-3'><h2>Schools and Departments:</h2></div>
                <div className='px-3'>
                    <ul className='flex flex-wrap gap-x-5 items-center gap-y-2'>
                        <li><Arrow title='Computation, Information and Technolog'/></li>
                        <li><Arrow title='
										Engineering and Design
									'/></li>
                        <li><Arrow title='
										Natural Sciences
									'/></li>
                        <li><Arrow title='
										Life Sciences
									'/></li>
                        <li><Arrow title='
										Management
									'/></li>
                        <li><Arrow title='
										Social Sciences and Technology
									'/></li>
                        <li><Arrow title='
										Medicine
									'/></li>
                                     <li><Arrow title='
										 Sport and Health Sciences
									'/></li>
									
                                   
									
                    </ul>
                </div>
            </div>
            <div className='mt-6 flex lg:flex-row flex-col gap-y-5'>
            <div className='px-3 mr-6'><h2 className='font-bold'>Quicklinks:</h2></div>
            <div className='px-3'>
                    <ul className='flex flex-wrap  gap-x-5 items-center gap-y-2 '>
                        <li><Arrow title='
										Persons (TUMonline)
									'/></li>
                        <li><Arrow title='
										
										IT Services
									
									'/></li>
                        <li><Arrow title='
										
										
										Calendar
									
									
									'/></li>
                        <li><Arrow title='
										
										MyTUM
									
									'/></li>
                                    <li><Arrow title='
										
										
										Rooms (TUMonline)
									
									
									'/></li>
                     
                     <li><Arrow title='
										
										
										University Library
									
									
									'/></li>
                     
                     <li><Arrow title='
										
										
										TUMshop
									
									
									'/></li>
                     
                     
									
                                   
									
                    </ul>
                </div>

            </div>

        </div>

        </div>
        {/* section two */}
        <div className='py-6 bg-primary'>
            {/* part one */}
            <div className='mx-6 lg:px-6 gap-y-5 flex md:flex-row-reverse flex-col justify-between'>
                {/* medias */}
                <div className='px-3 '>
                    <ul className='flex lg:justify-end flex-wrap gap-x-[1.5rem] gap-y-2'>
                        <li><Link href='/#'> <Image priority src='/images/fb.svg' width={20} height={20}/></Link></li>
                        <li><Link href='/#'> <Image priority src='/images/youtube.svg' width={20} height={20}/></Link></li>
                        <li><Link href='/#'> <Image priority src='/images/twitter.svg' width={20} height={20}/></Link></li>
                        <li><Link href='/#'> <Image priority src='/images/insta.svg' width={20} height={20}/></Link></li>
                        <li><Link href='/#'> <Image priority src='/images/in.svg' width={20} height={20}/></Link></li>
                        <li><Link href='/#'> <Image priority src='/images/rss.svg' width={20} height={20}/></Link></li>
                 

                    </ul>

                </div>
                {/* links */}
                <div className='px-3'>
                    <ul className='text-white text-sm flex lg:justify-end flex-wrap gap-x-3 lg:gap-x-[1.5rem] gap-y-2'>
                        <li><Link href='/#'>Jobs</Link></li>
                        <li><Link href='/#'>Feedback</Link></li>
                        <li><Link href='/#'>
										Press and Media
									</Link></li>
                        <li><Link href='/#'>
									
                        Accessibility
									
									</Link></li>
                        <li><Link href='/#'>
									
                       
										
                        Legal Notice
									
									
									
									</Link></li>
                    </ul>

                </div>
            </div>
            {/* part two */}
            <div className='lg:mx-6 mt-6 px-6'>
                <div className='flex '>
                    <div className='lg:px-3 basis-1/2 lg:basis-auto'>
                        <Image priority width={40} height={70} src='/images/flower.svg' alt='flower'/>
                    </div>
                    <div className='px-3 text-white'>
                        <h2 className='font-bold text-sm'>TUM Partners of Excellence</h2>
                        <p className='mt-6 text-[12px] '>Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW · Bosch · Busch Vacuum&nbsp;· Clariant · Dräxlmaier · Evonik Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé · Rohde&nbsp;&amp;&nbsp;Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft · Volkswagen · Wacker Chemie</p>

                    </div>
                </div>

            </div>

        </div>
        
        </footer>
  )
}

import React from 'react'
import ServiceCard from '../ui/ServiceCard'
// import ServiceCard from '../ui/ServiceCard'
// import s1 from '../../public/s1.jpg'
// import s2 from '../../public/s2.jpg'
// import s3 from '../../public/s3.jpg'
// import s4 from '../../public/s4.jpg'
// import s5 from '../../public/s5.jpg'
import s1 from '../../public/images/s1.jpg'
import s2 from '../../public/images/s2.jpg'
import s3 from '../../public/images/s3.jpg'
import s4 from '../../public/images/s4.jpg'
import s5 from '../../public/images/s5.jpg'

export default function Service() {
  return (
    <div className='lg:px-20 px-6  mx-auto  container flex flex-col gap-y-10 lg:grid lg:grid-cols-3 items-start mt-20  lg:grid-rows-2 gap-x-36'>
        <ServiceCard image={s1} 
        title='We are TUM – the podcast of our university'
         subtitle='In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the "hidden champions" behind the scenes.'
         btn='all Episodes'
         link='/#'
         styles='col-start-1 col-end-3 row-start-1 row-end-2 '
         
        />
         <ServiceCard image={s2} 
        title='lifelong learning'
         subtitle='We offer continuing education opportunities accompanying you over your whole career.
         '
         btn='all Episodes'
         link='/#'
         styles='col-start-3 col-end-4 row-start-1 row-end-2'
         
        />
         <ServiceCard image={s3} 
        title='Stay connected'
         subtitle='Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!'
         btn='
         Join the TUM Community
     '
         link='/#'
         styles='col-start-1 col-end-2 row-start-2 row-end-3'
         
        />
         <ServiceCard image={s4} 
        title='TUMint Relocation Service'
         subtitle='All-inclusive onboarding package for international students assists with accommodation and much more.'
         btn='
         See our services
     '
         link='/#'
         styles='col-start-2 col-end-3 row-start-2 row-end-3'
         
        />
         <ServiceCard image={s5} 
        title='Discover the TUMshop'
         subtitle='Merchandising items, conference materials and other products in the corporate design can be found online and on site.'
         btn='
         Shop online
     '
         link='/#'
         styles='col-start-3 col-end-4 row-start-2 row-end-3'
         
        />
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import News from '../components/sections/News'
import Prospective from '../components/sections/Prospective'
import Degrees from '../components/sections/Degrees'
import Presidential from '../components/sections/Presidential'
import Number from '../components/sections/Number'
import Advert from '../components/ui/Advert'
import School from '../components/sections/School'
import Alumni from '../components/sections/Alumni'
import Service from '../components/sections/Service'
import Support from '../components/sections/Support'
import Footer from '../components/sections/Footer'
import Wrapper from '../components/ui/Wrapper'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='relative'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     <Navbar/>
     <Hero/>
     <News/>
     <Prospective/>
     <Degrees/>
     {/* <AdvertCard/> */}
     <Presidential/>
     <Number/>
     <School/>
     <Alumni/>
     <Service/>
     <Support/>
     <Footer/>
     
     
      </div>
      
  )
}

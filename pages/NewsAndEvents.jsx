import Link from 'next/link'
import React from 'react'

export default function NewsAndEvents() {
  return (
    <div className='flex justify-center items-center flex-col gap-5 h-screen w-full'>
        <p className='font-bold text-6xl text-primary'>NEWS AND EVENTS page</p>
       <div className='text-white p-3 rounded-xl bg-secondary'> <Link href='/'>Home</Link></div>
    </div>
  )
}

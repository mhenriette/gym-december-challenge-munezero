import React from 'react'
import Link from 'next/link'

export default function Innovation() {
  return (
    <div className='flex justify-center items-center flex-col gap-5 h-screen w-full'>
    <p className='font-bold text-6xl text-primary'>Innovation page</p>
   <div className='text-white p-3 rounded-xl bg-secondary'> <Link href='/'>Home</Link></div>
</div>
  )
}

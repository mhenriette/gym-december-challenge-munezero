import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Arrow({title}) {
  return (
    <Link href='/#' className='flex items-center gap-1'>
        <p className='text-sm  font-normal pb-1'>{title}</p>
        <Image src='/images/download.svg' priority width={15} height={15} alt='footerarrow' />

    </Link>
  )
}

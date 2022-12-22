import Link from 'next/link'
import React from 'react'

export default function Button({link, text, styles}) {
  return (
   
        <Link href={link} className={` bg-secondary text-white mt-6 px-5 py-4 uppercase font-bold text-center inline-block  ${styles}`}>{text}</Link>
  
  )
}

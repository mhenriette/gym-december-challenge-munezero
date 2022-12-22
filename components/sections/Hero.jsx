import React from 'react'

export default function Hero() {
  return (
    <div className='w-full relative'>
         <div className="mx-6 px-6 absolute ">
            <div className="py-16 mr-0 ">
            <div className=" flex py-20 flex-col text-white">
                <h1 class="font-bold text-5xl">
                TUM. The Entrepreneurial<br></br>University
                </h1>
                <p className="text-xl mt-6">Innovation through talent, excellence and responsibility</p>
            </div>
            </div>
      </div>
        <video
        autoPlay="autoplay"
        src="/images/vid.mp4"
        loop="loop"
        muted="muted"
        playsInline="playsInline"
        
      ></video>
    </div>
  )
}

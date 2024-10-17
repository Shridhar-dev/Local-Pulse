import Image from 'next/image'
import React from 'react'
import RegisterImage from "@/assets/register.png"
import gsap from 'gsap'

export default function StepCard({bgColor}:{bgColor:string}) {
    
  return (
    <div className=' flex-shrink-0 border-r border-black w-[500px] overflow-hidden text-black' style={{background:bgColor}}>
        <Image 
            src={RegisterImage.src}
            height={RegisterImage.height-1700}
            width={RegisterImage.width-1700}
            alt=''
            className='mx-auto'
        />
        <div className=' text-black p-5 rounded-xl'>
            <p className=' text-3xl'>2 step registration</p>
            <p className='text-xl mt-2'>Using just your Aadhaar and PAN card you can register on Local Pulse and reach a wider audience</p>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import RegisterImage from "@/assets/register.png"
import gsap from 'gsap'


interface StepCardProps {
  bgColor: string;
  title: string;
  description: string;
}

export default function StepCard({
  bgColor,
  title,
  description
}: StepCardProps) {
  return (
    <div className='flex-shrink-0 border-r border-black w-[500px] overflow-hidden text-black' style={{background: bgColor}}>
      <Image 
        src={RegisterImage.src}
        height={RegisterImage.height-1700}
        width={RegisterImage.width-1700}
        alt={title}
        className='mx-auto'
      />
      <div className='text-black p-5 rounded-xl'>
        <p className='text-3xl'>{title}</p>
        <p className='text-xl mt-2'>{description}</p>
      </div>
    </div>
  )
}
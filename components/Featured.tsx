'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import image1 from '../public/1.webp'
import image2 from '../public/2.webp'
interface Props {}

const Featured: NextPage<Props> = ({}) => {
  return <div className='md:h-screen h-[120vh] w-full bg-[#f5f1eb] text-[#1d1d1d] font-grotesque md:px-16 px-4 py-10 flex gap-8 flex-col'>
    <div className='w-full'>
        <h2 className='text-7xl font-grotesqueBold'>Featured</h2>
    </div>
    <div className='w-full md:h-4/5 h-full flex gap-2 md:flex-row flex-col'>
    <div className='md:w-1/2 w-full md:h-full h-1/2 flex flex-col md:gap-4 gap-2'>
    <div className='w-full'>

        <Image src={image1} alt='Image' className='rounded-2xl md:w-3/4 w-full'/>
    </div>
        <div className='w-full  flex flex-col gap-4'>

        <div className='md:font-grotesqueBold font-grotesque md:text-6xl text-4xl'>Final Sale: Up to 40% Off</div>
        <div className='md:text-xl text-xs text-balance font-sans'>Don't miss the SRFACE Final Sale with discounts up to 40% on wetsuits and accessories. Shop our full suits, shorties, springsuits and neoprene tops now while stocks last!</div>
        <div className='text-[#ff7955] hover:underline hover:text-black transition duration-100 ease-in-out cursor-pointer view'>
          Shop now &rarr;
        </div>
        </div>
    </div>
    <div className='md:w-1/2 w-full md:h-full h-1/2 flex flex-col md:gap-4 gap-2'>
    <div className='w-full'>

        <Image src={image2} alt='Image' className='rounded-2xl md:w-3/4 w-full'/>
    </div>
        <div className='w-full  flex flex-col gap-4'>

        <div className='md:font-grotesqueBold font-grotesque md:text-6xl text-4xl'>Final Sale: Up to 40% Off</div>
        <div className='md:text-xl text-xs text-balance font-sans'>Don't miss the SRFACE Final Sale with discounts up to 40% on wetsuits and accessories. Shop our full suits, shorties, springsuits and neoprene tops now while stocks last!</div>
        <div className='text-[#ff7955] hover:underline hover:text-black transition duration-100 ease-in-out cursor-pointer view'>
          Shop now &rarr;
        </div>
        </div>
    </div>
    </div>

  </div>
}

export default Featured
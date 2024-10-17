import Image from 'next/image'
import React from 'react'
import CategoryCard from './CategoryCard'

function Categories() {
  return (
    <div className='min-h-screen bg-[#f5f1eb] text-black p-10 text-center'>
        <p className='text-6xl md:text-8xl'>Categories</p>
        <p className='text-xl md:text-3xl mt-5'>Explore wide range of products from your own local shopkeepers</p>
        <div className='grid grid-cols-12 gap-5 md:gap-10 mt-10'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    </div>
  )
}

export default Categories
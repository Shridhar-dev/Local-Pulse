import React from 'react'
import CategoryCard from './CategoryCard'

function Categories() {
  return (
    <div className='min-h-screen bg-[#f5f1eb] text-black p-10 text-center'>
        <p className='text-6xl md:text-8xl'>Categories</p>
        <p className='text-xl md:text-3xl mt-5'>Explore wide range of products from your own local shopkeepers</p>
        <div className='grid grid-cols-12 gap-5 md:gap-10 mt-10'>
            <CategoryCard type="Clothing" src={"https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"}/>
            <CategoryCard type="Snacks" src={"https://images.unsplash.com/photo-1512149154706-f9b30ded17ad?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <CategoryCard type="Home Essentials" src={"https://plus.unsplash.com/premium_photo-1679500354595-0feead204a28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <CategoryCard type="Plants" src={"https://plus.unsplash.com/premium_photo-1669869250186-37a3f06180ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <CategoryCard type="Home Decor" src={"https://images.unsplash.com/photo-1474128670149-7082a8d370ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <CategoryCard type="Services" src={"https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        </div>
    </div>
  )
}

export default Categories
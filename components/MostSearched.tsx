import React from 'react'
import SearchProductCard from './SearchProductCard'

function MostSearched() {
  return (
    <div className='min-h-screen text-black p-10'>
        <p className='text-6xl md:text-8xl font-grotesqueBold'>Most Searched Products</p>
        <p className='text-xl md:text-3xl mt-5'>All your essentials, </p>
        <div className='grid grid-cols-12 gap-5 md:gap-10 mt-10'>
            <SearchProductCard src={"https://m.media-amazon.com/images/I/71s0CmnLLTL.jpg"} title={"Lays Chips@₹30"} desc={"India's Magic Masala"} />
            <SearchProductCard src={"https://m.media-amazon.com/images/I/71YBmiSj-cL.jpg"} title={"Coca Cola@₹20"} desc={"Coke - Normal"} />
            <SearchProductCard src={"https://www.eatrightbasket.com/uploads/media/2021/Urad-Daal-Papad.jpg"} title={"Urad Papad@₹20"} desc={"250g traditional snack"} />
            <SearchProductCard src={"https://5.imimg.com/data5/ANDROID/Default/2022/2/ZB/HX/DK/7349419/product-jpeg-500x500.jpg"} title={"Amul milk@₹30"} desc={"Amul Taaza"} />
            <SearchProductCard src={"https://m.media-amazon.com/images/I/61DiZbwGoXL.jpg"} title={"Vim bar@₹50"} desc={"Pack of 3"} />
            <SearchProductCard src={"https://m.media-amazon.com/images/I/61I5uE4fFwL.jpg"} title={"Surf Excel@₹30"} desc={"Washing powder"} />
            <SearchProductCard src={"https://m.media-amazon.com/images/I/61rCkRHh+3L.jpg"} title={"Fevi Quick@₹5"} desc={"Super Adhesive"} />
            <SearchProductCard src={"https://m.media-amazon.com/images/I/61hjaXERodL._AC_UF1000,1000_QL80_.jpg"} title={"Tikhalal@₹30"} desc={"500g chilli powder"} />
        </div>
    </div>
  )
}

export default MostSearched
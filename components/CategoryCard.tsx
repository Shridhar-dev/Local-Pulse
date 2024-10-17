import Image from 'next/image'

function CategoryCard({src, type}:{src:string, type:string}) {
  return (
    <div className='col-span-6 md:col-span-4 group relative'>
        <Image 
            src={src}
            height={500}
            width={500}
            alt=''
            className='h-[500px] object-cover'
        />
        <div className='h-full w-full cursor-pointer top-0 text-white flex items-center duration-200 justify-center text-4xl bg-opacity-50 bg-black absolute group-hover:opacity-100 opacity-0'>
            <p>{type}</p>
        </div>
    </div>
  )
}

export default CategoryCard
import Image from 'next/image'

function CategoryCard() {
  return (
    <div className='col-span-6 md:col-span-4 group relative'>
        <Image 
            src={"https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"}
            height={500}
            width={500}
            alt=''
        />
        <div className='h-full w-full top-0 text-white flex items-center justify-center text-4xl bg-opacity-50 bg-black absolute group-hover:opacity-100 opacity-0'>
            <p>Clothing</p>
        </div>
    </div>
  )
}

export default CategoryCard
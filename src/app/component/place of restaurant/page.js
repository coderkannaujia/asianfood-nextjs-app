import React from 'react'
import Image from 'next/image'

import image42 from "/public/image/image42.png"

const Restaurant = () => {
  return (
    <div className='h-full w-[1270px] mx-auto p-4 sm:w-[1300px] md:w-[1200px] lg:w-[1300px] xl:w-[2000px] bg-indigo-600 '> 
      <h1 className='text-center font-bold text-5xl md:text-3xl xl:text-5xl '>Place of our restaurant</h1>
      <div className='flex justify-between mt-32  xl:flex xl:justify-center xl:gap-x-64 '>
      <div className='ml-64'>
       <h1 className='text-3xl font-semibold mt-8 xl:text-3xl '>Clean and comfortable</h1>
       <p className='mt-6 font-semibold xl:text-xl '>We provide the best service and good food<br/> for our lovely customers</p>
      </div>

      <div>
      <Image src={image42} alt='image42' className='mr-36 shadow-xl rounded-lg  xl:w-[400px] xl:h-[350px] shadow-rose-600 '  />
      </div>

      </div>
    </div>
  )
}

export default Restaurant

import React from 'react'
import Image from 'next/image'

import image42 from "/public/image/image42.png"

const Restaurant = () => {
  return (
    <div className='h-[480px] bg-white'> 
      <h1 className='text-center font-bold text-3xl '>Place of our restaurant</h1>
      <div className='flex justify-between mt-32'>
      <div className='ml-64'>
       <h1 className='text-3xl font-semibold mt-8'>Clean and comfortable</h1>
       <p className='mt-6 font-semibold  '>We provide the best service and good food<br/> for our lovely customers</p>
      </div>

      <div>
      <Image src={image42} alt='image42' className='mr-36 shadow-xl rounded-lg '  />
      </div>

      </div>
    </div>
  )
}

export default Restaurant

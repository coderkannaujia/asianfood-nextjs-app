import React from 'react'
import Image from 'next/image'

import image33 from "/public/image/image33.png"
import image34 from "/public/image/image34.png"
import image35 from "/public/image/image35.png"
import image36 from "/public/image/image36.png"
import image37 from "/public/image/image37.png"
import image38 from "/public/image/image38.png"

const Footer = () => {
  return (
    <div className='h-full w-[1270px] mx-auto p-4 sm:w-[1300px] md:w-[1200px] lg:w-[1300px] xl:w-[2000px]  bg-lime-400 '>

     
     <div className='flex justify-between mt-14'>

       <div>
        <a href='#' className='font-bold  md:text-xl ml-20'>Asian food</a>
       <h1 className='ml-20 mt-10 font-semibold'>Accepted Payment</h1>
       <div className='flex justify-between gap-4 ml-16 mt-4'>
        <div><Image src={image33} alt='image33' /></div>
        <div><Image src={image34} alt='image34'  /></div>
        <div><Image src={image35} alt='image35' /></div>
       </div>
       </div>

       <div >
        <a href='#' className='font-semibold text-xl'>Contact</a>
        <div className='flex justify-between gap-4 mt-4'>
        <div><Image src={image36} alt='image36' /></div>
        <div><Image src={image37} alt='image37' /></div>
        <div><Image src={image38}  alt='image38'/></div>
        </div>
        </div>

       <div>
        <h1 className='font-semibold text-xl'>Support</h1>
        <h1 href='#' className='mt-4 font-semibold'>FAQ</h1>
        <h1 href='#' className='mt-4  font-semibold '>Contact</h1>
       </div>

       <div>
        <h1 className='font-semibold text-xl mr-56  '>Location</h1>
        <h1 className='mt-4  font-semibold'>25°11'46.7"N 55°16'35.6"E <br/> (Burj Khalifa, Dubai)</h1>
        </div>

       </div>

        <div className='h-1 bg-gray-400 mt-20'>

        </div>

       <h1 className=' mt-20  text-center font-bold text-xl'>@Powered by Asianfood</h1>
    </div>
  )
}

export default Footer

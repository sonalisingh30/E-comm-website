import React from 'react'
import BannerImg from "../../assets/4547829.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
          <div data-aos="zoom-in">
            <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover' src={BannerImg} alt="Banner img" />
          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-4xl font-bold sm:text-4xl'>
              Winter Sale upto 50% off
            </h1>
            <p data-aos="fade-up" className='text-sm tracking-wide leading-5 text-gray-500'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore vel sit harum nisi quaerat odit aperiam a porro facere officiis dolorum eos blanditiis accusamus qui unde, molestiae, tempora cupiditate. Possimus.
            </p>
            <div className='flex flex-col sm:flex-row  gap-4'>
              <div data-aos="fade-up" className=' flex items-center gap-4 '>
                <GrSecure className='text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className=' flex items-center gap-4 '>
                <IoFastFood className='text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className=' flex items-center gap-4 '>
                <GiFoodTruck className='text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                <p>Easy Payment</p>
              </div>
              <div data-aos="fade-up" className=' flex items-center gap-4 '>
                <GiFoodTruck className='text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                <p>Get Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner

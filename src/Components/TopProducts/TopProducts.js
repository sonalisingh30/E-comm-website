import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa6';

const ProductData = [
    {
        id: 1,
        image: Img1,
      title:"Casual Wear",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptate.",
    },
    {
        id: 2,
        image: Img2,
      title:"Printed Shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptate.",
    },
    {
        id: 3,
        image: Img3,
      title:"Women Shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptate.",
    },
]
function TopProducts({handleOrderPopup}) {
  return (
    <div className='container'>
        <div className='text-left mg-24 '>
            <p data-aos="fade-up" className='text-sm text-primary'>
                Top Rated Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
                Best Products
            </h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime, fuga dolor, deleniti soluta, perspiciatis quod at enim exercitationem voluptate cum.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {ProductData.map((data) => (
                <div data-aos="fade-up" className='rounded-2xl text-center
                bg-white dark:bg-gray-800 hover:bg-black/80
                dark:hover:bg-primary hover:text-white relative shadow-xl duration-300
                group max-w-[300px]'>
                    <div>
                        <img src={data.image} alt="" className='max-w-[120px] block mx-auto
                        transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md ' />
                    </div>
                    <div className='w-full flex items-center justify-center gap-1'>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>


                    </div>
                    <h1 className='text-2xl font-bold'>{data.title}</h1>
                    <p className='text-gray-500 group-hover:text-white duration-300
                    text-sm line-clamp-2'>{data.description}</p>
                    <button className='bg-primary hover:scale-105
                    duration-300 text-white py-1 px-2
                    rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                    onClick={handleOrderPopup}>
                        Order Now
                    </button>

                </div>
            ))}
                

        </div>
      
    </div>
  )
}

export default TopProducts

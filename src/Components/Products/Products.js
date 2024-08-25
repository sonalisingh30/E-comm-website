import React from 'react'
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from 'react-icons/fa6';

const ProductData = [
    {
        id: 1,
        image: Img1,
        name: "Women's T-Shirt",
        color: "white",
        aosDelay: "0",
        rating: 4.5,
    },
    {
        id: 2,
        image: Img2,
        name: "Women's western",
        color: "white",
        aosDelay: "200",
        rating: 5.0,
    },
    {
        id: 3,
        image: Img3,
        name: "Goggles",
        color: "black",
        aosDelay: "400",
        rating: 4.0,
    },
    {
        id: 4,
        image: Img4,
        name: "Women's Ethnic",
        color: "red",
        aosDelay: "600",
        rating: 4.7,
    },
    {
        id: 5,
        image: Img4,
        name: "Women's T-Shirt",
        color: "yellow",
        aosDelay: "800",
        rating: 4.2,
    },
]

function Products() {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>
                        Top Selling Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio vel veritatis sunt.
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {ProductData.map((data) => (
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id}
                                className='space-y-3'>
                                <img src={data.image} alt="Cover Image" className='h-[220px] w-[150px] object-cover
                            rounded-md'/>
                                <div>
                                    <h3 className='font-semibold'>
                                        {data.name}
                                    </h3>
                                    <p className='flex-sm text-gray-600'>
                                        {data.color}
                                    </p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-center mt-20 cursor-pointer
                        bg-primary text-white py-1 px-5 rounded'>
                            View All button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;

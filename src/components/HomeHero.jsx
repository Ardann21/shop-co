import React from 'react'
import heroImg from '../assets/heroImg.png'
import versace from '../assets/versace.png'
import zara from '../assets/zara.png'
import gucci from '../assets/gucci.png'
import prada from '../assets/prada.png'
import calv from '../assets/calv.png'
const HomeHero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row text-left bg-[#F2F0F1] '>
        <div className='flex flex-col self-baseline flex-1/2 items-baseline my-auto gap-3 mx-8 md:mx-10'>

            <h1 className='text-4xl'>FIND CLOTHES THAT MATCHES <br /> YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously
            crafted garments, designed to bring out your individuality
            and cater to your sense of style.</p>
            <button className='bg-black text-white px-4 py-1 rounded-md md:w-fit w-full'>Shop Now</button>
            <div className='flex gap-3 flex-wrap md:flex-nowrap justify-center'>
                <div className=' p-3'>
                    <h1 className='text-2xl font-bold'>200+</h1>
                    <p>International Brands</p>
                </div>
                <div className='border-r border-r-black border-l border-l-black p-3'>
                    <h1 className='text-2xl font-bold'>2,000+</h1>
                    <p>High-Quality Products</p>
                </div>
                <div className=' p-3'>
                    <h1 className='text-2xl font-bold'>30,000+</h1>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
        <div className='flex flex-1/2 md:mx-10'>
            <img className='object-scale-down' src={heroImg} alt="" />
        </div>
    </div>
    <div className='bg-black flex justify-around py-14 px-8 flex-wrap gap-3'>
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={calv} alt="" />
    </div>
    </>
  )
}

export default HomeHero
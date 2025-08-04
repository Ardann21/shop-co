import React from 'react'
import blackT from '../assets/black-tshirt.png'
import star4 from '../assets/star4.5.png'
import { FaPlus,FaMinus } from "react-icons/fa6";

const Product = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row md:max-w-[1240px] md:mx-auto items-center'>
        <div className='flex flex-col md:flex-row my-12 gap-2 w-auto'>
            <div className='hidden md:flex flex-col gap-2 h-auto w-auto'>
                <img className='h-fit w-80 rounded-2xl border' src={blackT} alt="" />
                <img className='h-fit w-80 rounded-2xl' src={blackT} alt="" />
                <img className='h-fit w-80 rounded-2xl' src={blackT} alt="" />
            </div>
            <div className='flex w-auto h-auto'><img className='md:w-230 w-auto h-auto rounded-2xl' src={blackT} alt="" /></div>


            <div className='flex w-full gap-1 mt-3 justify-center md:hidden'>
                <img className='w-24 rounded-2xl' src={blackT} alt="" />
                <img className='w-24 rounded-2xl' src={blackT} alt="" />
                <img className='w-24 rounded-2xl' src={blackT} alt="" />
            </div>
        </div>
        <div className='flex flex-col text-left mx-2 p-3 gap-2 '>
            <div><h1 className='text-3xl font-bold '>ONE LIFE GRAPHIC T-SHIRT</h1></div>
            <div className='flex gap-4 w-auto items-center'><img className='w-auto h-5' src={star4} alt="" /><p className='font-bold'>4/5</p></div>
            <div className='flex gap-2 text-2xl'><p className='font-bold'>$260</p> <p className='line-through text-gray-300'>$360</p></div>
            <div className='border-b border-gray-300'><p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric,
             it offers superior comfort and style.</p></div>
             <div className='flex flex-col text-2xl'><p>Select Colors</p>
                <div className='flex gap-2 border-b border-gray-300'>
                    <button className='bg-red-500 rounded-full p-4 mb-2'></button>
                    <button className='bg-yellow-500 rounded-full p-4 mb-2'></button>
                    <button className='bg-blue-500 rounded-full p-4 mb-2'></button>
                </div>
            </div>
            <div className='flex flex-col'><p className='text-2xl'>Choose Size</p>
                <div className='flex gap-2 border-b border-gray-300'>
                    <button className='bg-gray-300 rounded-full md:px-3 md:py-1 mb-2 px-1'>Small</button>
                    <button className='bg-gray-300 rounded-full md:px-3 md:py-1 mb-2 px-1'>Large</button>
                    <button className='bg-gray-300 rounded-full md:px-3 md:py-1 mb-2 px-1'>X-Large</button>
                    <button className='bg-gray-300 rounded-full md:px-3 md:py-1 mb-2 px-1'>2X-Large</button>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <div className='flex gap-5 px-1 md:px-3 rounded-4xl bg-gray-200 items-center'>
                    <div><button className='cursor-pointer'><FaMinus size={12}/></button></div>
                    <div><button className='md:text-xl font-bold'>1</button></div>
                    <div><button className='cursor-pointer'><FaPlus size={12}/></button></div>
                </div>
                <div className='w-full'><button className='submit py-1 md:py-3 px-3 w-full bg-black text-white rounded-2xl'>Add to cart</button></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product
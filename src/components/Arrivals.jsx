import React from 'react'
import blackT from '../assets/black-tshirt.png'
import star4 from '../assets/star4.5.png'
import jean from '../assets/jean.png'
import throuser from '../assets/throuser.png'
import orangeShirt from '../assets/orangeShirt.png'
import greenTshirt from '../assets/greenTshirt.png'
import courage from '../assets/courage.png'
import bermuda from '../assets/bermuda.png'
import faded from '../assets/faded.png'

const Arrivals = () => {
  return (
    <>
    <h1 className='text-4xl font-bold mt-12'>NEW ARRIVALS</h1>

    <div className='relative overflow-y-scroll flex md:justify-center gap-6 mt-12'>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52  md:w-92'>
                <img className='rounded-2xl h-50 md:h-80' src={blackT} alt="" />
            </div>
            <div>
                <p className='font-bold'>T-shirt with Tape Details</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
                <p className='font-bold text-xl'>$120</p>
            </div>
        </div>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52 md:w-92'>
                <img className='rounded-2xl md:w-79 h-50 md:h-80' src={jean} alt="" />
            </div>
            <div>
                <p className='font-bold'>Skinny Fit Jeans</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='font-bold text-xl'>$240</p>
                    <p className='font-bold text-xl line-through text-gray-400'>$260</p>
                    <p className=' text-[#ff1818] bg-[#ff33334b] rounded-4xl text-[15px] font-bold px-2'>-20%</p>
                </div>
                
            </div>
        </div>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52 md:w-92'>
                <img className='rounded-2xl h-50 md:h-80' src={throuser} alt="" />
            </div>
            <div>
                <p className='font-bold'>Checkered Shirt</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
                <p className='font-bold text-xl '>$180</p>
            </div>
        </div>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52 md:w-92'>
                <img className='rounded-2xl h-50 md:h-80' src={orangeShirt} alt="" />
            </div>
            <div>
                <p className='font-bold'>Sleeve Striped T-shirt</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='font-bold text-xl'>$130</p>
                    <p className='font-bold text-xl line-through text-gray-400'>$160</p>
                    <p className=' text-[#ff1818] bg-[#ff33334b] rounded-4xl text-[15px] font-bold px-2'>-30%</p>
                </div>
            </div>
        </div>

    </div>
    <div className=' my-6 border-b border-b-gray-300 max-w-[1240px] mx-auto'>
        <button className='cursor-pointer shadow-[2px_2px_17px_-2px_rgba(0,_0,_0,_0.1)] rounded-4xl py-4 px-12 border border-gray-400 my-13'>View All</button>
    </div>

     <h1 className='text-4xl font-bold mt-12'>TOP SELLING</h1>

    <div className='relative overflow-y-scroll flex md:justify-center gap-6 mt-12'>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52  md:w-92'>
                <img className='rounded-2xl h-50 md:h-80' src={greenTshirt} alt="" />
            </div>
            <div>
                <p className='font-bold'>Verical Striped Shirt</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='font-bold text-xl'>$212</p>
                    <p className='font-bold text-xl line-through text-gray-400'>$232</p>
                    <p className=' text-[#ff1818] bg-[#ff33334b] rounded-4xl text-[15px] font-bold px-2'>-20%</p>
                </div>
            </div>
        </div>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52 md:w-92'>
                <img className='rounded-2xl h-50 md:h-80' src={courage} alt="" />
            </div>
            <div>
                <p className='font-bold'>Courege Graphic T-shirt</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
               
                    <p className='font-bold text-xl'>$145</p>
    
                
            </div>
        </div>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52 md:w-92'>
                <img className='rounded-2xl h-50 md:h-80' src={bermuda} alt="" />
            </div>
            <div>
                <p className='font-bold'>Loose Fit Bermuda Shorts</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
                <p className='font-bold text-xl '>$80</p>
            </div>
        </div>
        <div className='  text-left flex flex-col gap-3'>
            <div className='w-52 md:w-92'>
                <img className='rounded-2xl h-50 md:h-80' src={faded} alt="" />
            </div>
            <div>
                <p className='font-bold'>Faded Skinny Jeans</p>
                <div className='flex gap-3 h-4 items-center'>
                    <img className='h-auto w-auto' src={star4} alt="" />
                    <p>4/5</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='font-bold text-xl'>$210</p>
-
                </div>
            </div>
        </div>

    </div>
    <div className=' my-6 max-w-[1240px] mx-auto'>
        <button className='cursor-pointer shadow-[2px_2px_17px_-2px_rgba(0,_0,_0,_0.1)] rounded-4xl py-4 px-12 border border-gray-400 my-13'>View All</button>
    </div>
    </>
  )
}

export default Arrivals
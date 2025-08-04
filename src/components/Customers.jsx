import React from 'react'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useRef } from 'react';
import star from '../assets/star5.png'
import check from '../assets/check.png'

const Customers = () => {
    const slider = useRef(null);

  const slideRight = () => {
    if (slider.current) {
      slider.current.scrollLeft += 550;
    }
  };

  const slideLeft = () => {
    if (slider.current) {
      slider.current.scrollLeft -= 550;
    }
  };
  return (
    <>
    <div className='mx-3'>
        <div className='flex justify-around items-center'>
            <div><h1 className='text-4xl mt-20 md:mt-32 font-bold'>OUR HAPY CUSTOMERS</h1></div>
            <div className='flex gap-3 mt-20 md:mt-32 cursor-pointer'>
                <GoArrowLeft onClick={slideLeft} size={30}/>
                <GoArrowRight onClick={slideRight} size={30}/>
            </div>
        </div>
       <div
  ref={slider}
  className='flex overflow-x-scroll gap-4 scroll-smooth mt-8 hide-scrollbar'
>
  <div className='flex-shrink-0 md:w-[500px] w-[300px] border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
    {/* Star */}
    <div><img src={star} alt="" /></div>

    {/* Name + check */}
    <div className='flex gap-2 items-center mt-2'>
      <h1 className='font-bold'>Sarah M.</h1>
      <img className='h-5 w-auto' src={check} alt="" />
    </div>

    {/* Comment */}
    <p className='mt-2 text-sm text-left'>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    </p>
  </div>
  <div className='flex-shrink-0 md:w-[500px] w-[300px] border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
    {/* Star */}
    <div><img src={star} alt="" /></div>

    {/* Name + check */}
    <div className='flex gap-2 items-center mt-2'>
      <h1 className='font-bold'>Sarah M.</h1>
      <img className='h-5 w-auto' src={check} alt="" />
    </div>

    {/* Comment */}
    <p className='mt-2 text-sm text-left'>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    </p>
  </div>
  <div className='flex-shrink-0 md:w-[500px] w-[300px] border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
    {/* Star */}
    <div><img src={star} alt="" /></div>

    {/* Name + check */}
    <div className='flex gap-2 items-center mt-2'>
      <h1 className='font-bold'>Sarah M.</h1>
      <img className='h-5 w-auto' src={check} alt="" />
    </div>

    {/* Comment */}
    <p className='mt-2 text-sm text-left'>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    </p>
  </div>
  <div className='flex-shrink-0 md:w-[500px] w-[300px] border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
    {/* Star */}
    <div><img src={star} alt="" /></div>

    {/* Name + check */}
    <div className='flex gap-2 items-center mt-2'>
      <h1 className='font-bold'>Sarah M.</h1>
      <img className='h-5 w-auto' src={check} alt="" />
    </div>

    {/* Comment */}
    <p className='mt-2 text-sm text-left'>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    </p>
  </div>
  <div className='flex-shrink-0 md:w-[500px] w-[300px] border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
    {/* Star */}
    <div><img src={star} alt="" /></div>

    {/* Name + check */}
    <div className='flex gap-2 items-center mt-2'>
      <h1 className='font-bold'>Sarah M.</h1>
      <img className='h-5 w-auto' src={check} alt="" />
    </div>

    {/* Comment */}
    <p className='mt-2 text-sm text-left'>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    </p>
  </div>
  <div className='flex-shrink-0 md:w-[500px] w-[300px] border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
    {/* Star */}
    <div><img src={star} alt="" /></div>

    {/* Name + check */}
    <div className='flex gap-2 items-center mt-2'>
      <h1 className='font-bold'>Sarah M.</h1>
      <img className='h-5 w-auto' src={check} alt="" />
    </div>

    {/* Comment */}
    <p className='mt-2 text-sm text-left'>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    </p>
  </div>
  <div className='flex-shrink-0 md:w-[500px] w-[300px] border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
    {/* Star */}
    <div><img src={star} alt="" /></div>

    {/* Name + check */}
    <div className='flex gap-2 items-center mt-2'>
      <h1 className='font-bold'>Sarah M.</h1>
      <img className='h-5 w-auto' src={check} alt="" />
    </div>

    {/* Comment */}
    <p className='mt-2 text-sm text-left'>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    </p>
  </div>
 
  
    </div>
    </div>
    </>
  )
}

export default Customers
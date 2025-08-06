import React from 'react'
import filter from '../assets/filter.png'
import star from '../assets/star5.png'
import check from '../assets/check.png'
import {FiChevronDown,FiChevronUp} from "react-icons/fi";
const RatingReview = () => {
  return (
    <>
     <div className='flex flex-col md:max-w-[1240px] md:mx-auto'>
            <div className='flex justify-between my-3 mx-2'>
                <h1 className='font-bold text-xl'>All Reviews <span className='text-gray-400 text-[13px]'>(468)</span></h1> 
                <div className='flex gap-2 items-center'>
                    <img className='bg-gray-200 rounded-full p-2' src={filter} alt="" />
                    <button className='md:flex items-center gap-1 bg-gray-200 rounded-2xl px-3 py-1 hidden '>Latest <FiChevronDown /> </button>
                    <button className='bg-black text-white px-2 rounded-2xl py-1 cursor-pointer'>Write a Review</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-auto gap-10 mt-12'>
                <div className='  border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
                   
                    <div><img src={star} alt="" /></div>
                
                    <div className='flex gap-2 items-center mt-2'>
                      <h1 className='font-bold'>Sarah M.</h1>
                      <img className='h-5 w-auto' src={check} alt="" />
                    </div>
                
                    <p className='mt-2 text-sm text-left'>
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
    
                    <p className='text-left mt-2'>Posted on August 14, 2025</p>
                  </div>
                  <div className='  border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
                   
                    <div><img src={star} alt="" /></div>
                
                    <div className='flex gap-2 items-center mt-2'>
                      <h1 className='font-bold'>Sarah M.</h1>
                      <img className='h-5 w-auto' src={check} alt="" />
                    </div>
                
                    <p className='mt-2 text-sm text-left'>
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
    
                    <p className='text-left mt-2'>Posted on August 14, 2025</p>
                  </div>
                    <div className='  border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
                   
                    <div><img src={star} alt="" /></div>
                
                    <div className='flex gap-2 items-center mt-2'>
                      <h1 className='font-bold'>Sarah M.</h1>
                      <img className='h-5 w-auto' src={check} alt="" />
                    </div>
                
                    <p className='mt-2 text-sm text-left'>
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
    
                    <p className='text-left mt-2'>Posted on August 14, 2025</p>
                  </div>
                      <div className='  border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
                   
                    <div><img src={star} alt="" /></div>
                
                    <div className='flex gap-2 items-center mt-2'>
                      <h1 className='font-bold'>Sarah M.</h1>
                      <img className='h-5 w-auto' src={check} alt="" />
                    </div>
                
                    <p className='mt-2 text-sm text-left'>
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
    
                    <p className='text-left mt-2'>Posted on August 14, 2025</p>
                  </div>
                    <div className='  border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
                   
                    <div><img src={star} alt="" /></div>
                
                    <div className='flex gap-2 items-center mt-2'>
                      <h1 className='font-bold'>Sarah M.</h1>
                      <img className='h-5 w-auto' src={check} alt="" />
                    </div>
                
                    <p className='mt-2 text-sm text-left'>
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
    
                    <p className='text-left mt-2'>Posted on August 14, 2025</p>
                  </div>
                    <div className='  border border-gray-200 rounded-4xl p-6 flex flex-col bg-white'>
                   
                    <div><img src={star} alt="" /></div>
                
                    <div className='flex gap-2 items-center mt-2'>
                      <h1 className='font-bold'>Sarah M.</h1>
                      <img className='h-5 w-auto' src={check} alt="" />
                    </div>
                
                    <p className='mt-2 text-sm text-left'>
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
    
                    <p className='text-left mt-2'>Posted on August 14, 2025</p>
                  </div>
            </div>
    
            <div className='mt-12'><button className='border border-gray-300 rounded-4xl px-3 py-2 cursor-pointer'>Load More Reviews</button></div>
        </div>
    </>
  )
}

export default RatingReview
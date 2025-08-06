import React from 'react'
import discount from '../assets/discount.png'
import trashRed from '../assets/trash-red.png'
import blackT from '../assets/black-tshirt.png'
import { FiChevronRight} from "react-icons/fi";
import { FaPlus,FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

import { useState } from 'react';
const CartMain = ({cart,removeCart,increaseQuantity,decreaseQuantity}) => {


   

    
  return (
    <>

    <div className='flex gap-1 items-center md:max-w-[1440px] mx-3 md:mx-auto my-7'>
            <h1>Home</h1>
            <FiChevronRight />
            <h1>Cart</h1>
        </div>

        <div className='flex gap-1 items-center md:max-w-[1440px] mx-3 md:mx-auto my-7'>
            <h1 className='text-3xl font-bold'>YOUR CART</h1>
            
        </div>
    <div className='flex flex-col md:flex-row gap-2 max-w-[1240px] md:mx-auto mx-3  '>
        <div className='flex md:w-2/3 flex-col md:mx-2 border-3 h-fit border-gray-300 rounded-2xl'>
        {cart.length ===0 ? <p className="my-35 text-3xl font-4xl">No items in cart </p>
            :cart.map((item)=>(

                <div key={item.id} className='flex text-left p-2 gap-2 md:mr-5 ml-3'>
                <div className='w-1/3 md:flex md:justify-center'> 
                    <img className='rounded-2xl md:h-46 md:w-46' src={item.mainImage} alt="" />
                </div>
                <div className='w-2/3 my-auto'>
                    <div className='flex justify-between md:text-3xl'><h1>{item.name}</h1><FaTrash onClick={() => removeCart(item.uniqueId)} className='text-red-600 cursor-pointer' size={20}/>
                    </div>
                    <div className='flex flex-col'>
                                        {/* Display the selected size and color */}
                                        {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                                        <p className='flex items-center'>Color:<span className={`${item.selectedColor} items-center rounded-full p-2 w-2 ml-1`}></span> </p>
                                    </div>
                    <div className='flex justify-between'>
                        <h1>${item.price}</h1>
                        <div className='flex gap-5 px-1 md:px-3 rounded-4xl bg-gray-200 items-center'>
                            <div><button onClick={()=>decreaseQuantity(item.id)} className='cursor-pointer'><FaMinus size={12} /></button></div>
                            <div><button className='md:text-xl font-bold'>{item.quantity}</button></div>
                            <div><button onClick={()=>increaseQuantity(item.id)} className='cursor-pointer'><FaPlus size={12} /></button></div>
                        </div>
                        </div>
                </div>
            </div>

            ))}
        </div>
        <div className='flex md:w-1/3 flex-col text-left gap-3 p-3 border-3 border-gray-300 rounded-2xl h-fit'>
            <h1 className='mx-2 font-bold text-2xl'>Order Summary</h1>
            
            <div className='border-b border-b-gray-300'>
                    <div className='flex justify-between mx-2'>
                    <h1 className='text-xl'>Subtotal ({cart.reduce((acc, item) => item.price, 0)})x{cart.reduce((acc, item) => item.quantity, 0)}</h1><h1 className='text-xl'>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h1>
                    </div>
                    <div className='flex justify-between mx-2'>
                        <h1 className='text-xl'>Discount (-%20)</h1><h1 className='text-xl text-red-600'>
  -${(cart.reduce((acc, item) => acc + (item.price * item.quantity * 0.2), 0)).toFixed(2)}
</h1>
                    </div>
                    <div className='flex justify-between mx-2'>
                        <h1 className='text-xl'>Delivery Fee</h1><h1 className='text-xl'>$15</h1>
                    </div>
            </div>

            <div className='flex justify-between mx-2'>
                <h1>Total</h1><h1>${cart.reduce((acc, item) => acc + item.price * item.quantity-(item.price * item.quantity * 0.2)+15, 0).toFixed(2)}</h1>
            </div>

            <div className='flex justify-around mx-2 gap-3 '>
                <div className='flex bg-gray-200 gap-3 rounded-2xl  w-full p-3'>
                    <img className='h-auto w-4' src={discount} alt="" />
                    <input className='w-full rounded-2xl text-[12px] font-bold'  type="text" placeholder='Add promo code' /> 
                </div>
                
                <button className='bg-black w-full text-white rounded-2xl px-2' type='submit'>Apply</button>
            </div>
            <div className='flex mx-2 mb-3'><button className='submit p-3 w-full bg-black text-white rounded-2xl'>Go to Checkout</button></div>
            
        </div>
    </div>
    </>
  )
}

export default CartMain
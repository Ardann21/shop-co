import React from 'react'
import cartIcon from '../assets/cart.png'
import user from '../assets/user.png'
import search from '../assets/search.png'
import { FiAlignJustify,FiX,FiChevronDown,FiChevronUp} from "react-icons/fi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({cart}) => {


    const [toggle, setToggle] = useState(null)

     const totalItemsInCart = cart.reduce((total, item) => {
        return total + Number(item.quantity);
    }, null); 

    const [open, setOpen] = useState(true)
    const handleOpen=()=>{
    setOpen(!open)
    
    }

    const [nav, setNav] = useState(false)

    const handleNav=()=>{
    setNav(!nav)
    
    }
  return (
    <>
    <div className='bg-black text-white py-3'>
        <h1>Sign up nad get 20% off to your first order. <span className='underline'>Sign Up Now</span></h1>
    </div>
    <div className='flex justify-between mt-2 p-5 items-center list-none md:max-w-[1440px] gap-4 mx-auto border-b border-b-[#F2F0F1]'>
        <div className='flex items-center gap-2'>
            <div className='cursor-pointer' onClick={handleNav}>{!nav ? <FiAlignJustify className='flex md:hidden'/> : null}</div>
        <Link to={"/"}><h1 className='font-bold text-2xl'>SHOP.CO</h1></Link>
        </div>
        
                
                <div onClick={handleOpen} className='cursor-pointer md:flex hidden gap-7'>
                    <li  className='flex items-center'>Shop{open ? <FiChevronDown size={20}/> : <FiChevronUp size={20} /> } </li>
        

                    <div className={open ? 'hidden ' : 'absolute z-11 p-8 rounded-xl bg-white shadow-[2px_2px_17px_-2px_rgba(0,_0,_0,_0.1)] mt-8'}>
                        <ul className=' flex flex-col text-left  gap-3 '>
                            <li><Link to={"/shop"}>All</Link> </li>
                            <li>T-shirts</li>
                            <li>Shorts</li>
                            <li>Shirts</li>
                            <li>Hoodie</li>
                            <li>Jeans</li>
                        </ul>
                    </div>
                </div>
            
                <li onClick={()=>setToggle('onSale')} className={`cursor-pointer ${toggle==='onSale' ? 'md:flex hidden border-b border-b-black' : 'hidden md:flex border-none'}`}>On Sale</li>
                <li onClick={()=>setToggle('new')} className={`cursor-pointer ${toggle==='new' ? 'md:flex hidden border-b border-b-black' : 'hidden md:flex border-none'}`}>New Arrivals</li>
                <li onClick={()=>setToggle('brands')} className={`cursor-pointer ${toggle==='brands' ? 'md:flex hidden border-b border-b-black' : 'hidden md:flex border-none'}`}>Brands</li>
                
                
                <div className='md:flex hidden  bg-[#F0F0F0] px-3 py-1 rounded-2xl w-100 items-center'>
                    <img  src={search} alt="" />
                    <input className='bg-[#F0F0F0] w-full' type="text" placeholder='Search for products...' />
                </div>
            
       
        <div className='flex gap-3 md:w-32'>
            <img className='flex md:hidden'  src={search} alt="" />
            <Link to={"/cart"}>
                <img className='h-5 w-5' src={cartIcon} alt="" /> <span className='absolute bg-red-400 px-1 font-bold text-[12px] rounded-full top-18'>{totalItemsInCart}
            </span>
            </Link>
            <img className='h-5 w-auto' src={user} alt="" />

            <div className='cursor-pointer' onClick={handleNav}>
                <div className={!nav ? 'fixed left-[-100%] ease-out duration-750' : 'fixed left-0 top-0 bg-white w-[60%] border-r border-r-black h-full ease-in-out duration-500 z-30'}>
                        
                        <ul className=' flex flex-col text-left p-3 gap-3'>
                            <FiX className='flex md:hidden'/>
                            <li>T-shirts</li>
                            <li>Shorts</li>
                            <li>Shirts</li>
                            <li>Hoodie</li>
                            <li>Jeans</li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav
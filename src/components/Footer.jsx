import React from 'react'
import mail from '../assets/mail.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import paypal from '../assets/paypal.png'
import applepay from '../assets/applepay.png'
import gpay from '../assets/gpay.png'

const Footer = () => {
  return (
    <>
    <div className='bg-[#F2F0F1]'>
<div className='bg-black text-white flex flex-col md:flex-row justify-around gap-10 mx-5 p-3 py-12 md:mx-23 rounded-2xl items-center -translate-y-14 relative z-10 mt-74'>

            <div>
                <h1 className='text-[25px] md:text-[35px] text-left'>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
            </div>
            <div className='flex flex-col gap-2 md:w-100'>
                <div className='flex bg-[#F2F0F1] rounded-2xl items-center'>
                    <img className='h-5 w-auto mx-2' src={mail} alt="" />
                    <input className='text-black w-full py-3  rounded-2xl' type="email" placeholder='Enter your email address'/>
                </div>
                
                <button className='bg-[#F2F0F1] text-black w-full rounded-2xl py-3 px-10' type='submit'>Subscribe to Newslatter</button>
            </div>

        </div>

        <div className='flex flex-col md:flex-row '>
            <div className='text-left my-9 md:hidden mx-3'>
                <h1 className='font-bold text-2xl'>SHOP.CO</h1>
                <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex gap-3'>
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-15 text-left items-center mx-3 mb-5'>
                <div className='text-left   md:flex hidden md:flex-col gap-3 mx-3'>
                <h1 className='font-bold text-2xl'>SHOP.CO</h1>
                <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex gap-3'>
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>
                <div>
                    <h1 className='font-bold'>COMPANY</h1>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div>
                    <h1 className='font-bold'>HELP</h1>
                    <p>Customer Supprot</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h1 className='font-bold'>FAQ</h1>
                    <p>Account</p>
                    <p>Menage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>
                <div>
                    <h1 className='font-bold'>RESOURCE</h1>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to -Blog</p>
                    <p>Youtube Playlsit</p>
                </div>
            </div>
            
        </div>

            <div className='border-t border-t-gray-400 md:max-w-[1740px] mx-auto'>
                <div className='flex flex-col md:flex-row justify-between  mx-3 items-center'>
                    <h1>Shop.co © 2000-2023, All Rights Reserved</h1>
                    <div className='flex justify-center '>
                        <img className='w-15 md:w-fit' src={visa} alt="" />
                        <img className='w-15 md:w-fit' src={mastercard} alt="" />
                        <img className='w-15 md:w-fit' src={paypal} alt="" />
                        <img className='w-15 md:w-fit' src={applepay} alt="" />
                        <img className='w-15 md:w-fit' src={gpay} alt="" />
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Footer
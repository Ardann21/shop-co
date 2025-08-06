import React, { useState } from 'react'
import { FiChevronRight} from "react-icons/fi";
import filter from '../assets/filter.png'
import checkw from '../assets/checkw.png'
import ColorButton from './ColorButton';
import { IoMdClose } from "react-icons/io";
import blackT from '../assets/black-tshirt.png'
import star4 from '../assets/star4.5.png'
import { FiChevronDown,FiChevronUp, FiChevronLeft} from "react-icons/fi";
import { Link } from 'react-router-dom';
const ShopMain = () => {

    const [price, setPrice] = useState(125); 


    const colors = ['#fde047', '#dc2626', '#3b82f6','#00C12B','#F57906','#06CAF5','#7D06F5','#e6e6e6','#000000']; 
    const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];

     const [selectedSize, setSelectedSize] = useState(null);
     const [filterOpen, setFilterOpen] = useState(false);
     const [sort, setSort] = useState(false);

     const handleSort=()=>{
      setSort(!sort)
     }

     const handleFilter=()=>{
      setFilterOpen(!filterOpen)
     }

     const handleSizeClick = (size) => {
    setSelectedSize(currentSize => (currentSize === size ? null : size));
     };
  return (
    <>
    <div className='flex gap-1 items-center md:max-w-[1440px] mx-3 md:mx-auto my-7'>
        <h1>Home</h1>
        <FiChevronRight />
        <h1>Casual</h1>
    </div>

    <div className='flex md:hidden ml-2 my-4 text-3xl font-bold'><h1>CASUAL</h1></div>

    <div className='flex md:hidden justify-around items-center mb-2'>
      <div className='flex gap-2 ml-2'><h1 className='hidden md:flex'>Casual</h1> <p className='text-gray-300'>Showing 1-10 of 100 Products</p></div>
      
      <div onClick={handleSort} className='flex cursor-pointer '>
                       <p >Sort by: Most Popular</p>
                       {!sort ? <FiChevronDown className='mt-1' /> :<FiChevronUp className='mt-1' /> }
                        <div className=''>
                          <ul className={!sort ? 'hidden absolute right-[-100%] ' : ' absolute mt-13 right-22 w-42 rounded-2xl bg-white shadow-[2px_2px_17px_-2px_rgba(0,_0,_0,_0.1)] z-90  flex flex-col'}>
                            <li>Price: Low to High</li>
                            <li>Price: High to Low</li>
                            <li>Name: A to Z</li>
                            <li>Name: Z to A</li>
                          </ul>
                        </div>
                    </div>

      <div onClick={handleFilter} className='cursor-pointer mr-3'>
        <img className='bg-gray-300 rounded-full w-8 p-1' src={filter} alt="" />
      </div>
      
      
    </div>

    <div className=' flex md:mx-5 gap-10'>
        <div className={!filterOpen ? 'hidden md:flex md:w-1/4 md:h-fit bottom-[-100%] ease-in-out duration-300 left-0 z-10 bg-white   flex-col  p-3 border border-gray-300 rounded-2xl' : 'fixed bottom-[-10px] ease-in-out duration-300 left-0 z-50 bg-white  flex-col  p-3 border border-gray-300 rounded-2xl'}>
            <div className='flex justify-between border-b border-b-gray-300 items-center'>
                <h1 className='text-3xl'>Filters</h1>
                <div className='md:flex hidden'>
                  <img  className='h-4 w-auto z-10' src={filter} alt="" />
                </div>
                <div className='flex md:hidden' onClick={handleFilter}>
                  {!filterOpen ? <img  className='h-4 w-auto cursor-pointer z-10 md:hidden' src={filter} alt="" /> : <IoMdClose className='cursor-pointer' size={30} />}
                  
                </div>
                
            </div>
            <div className='flex flex-col gap-3 mt-3'>
                <div className='flex justify-between'>
                    <h1>T-shirts</h1>
                    <FiChevronRight />
                </div>
                <div className='flex justify-between'>
                    <h1>Shorts</h1>
                    <FiChevronRight />
                </div>
                <div className='flex justify-between'>
                    <h1>Shirts</h1>
                    <FiChevronRight />
                </div>
                <div className='flex justify-between'>
                    <h1>Hoodie</h1>
                    <FiChevronRight />
                </div>
                <div className='flex justify-between border-b border-b-gray-300'>
                    <h1>Jeans</h1>
                    <FiChevronRight />
                </div>
            </div>
            <div className='flex flex-col mt-3'>
            <div className=" bg-white rounded-lg shadow-md max-w">
          <input 
            type="range"
            min="50"
            max="200"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2 text-gray-500 text-sm mx-1">
            <span>$50</span>
            <h2 className=" font-semibold mb-4">Price: ${price}</h2>
            <span>$200</span>
      </div>
    </div>

            </div>

             <div className='flex flex-col mt-3 border-t border-t-gray-300'>
            <div className='flex justify-between items-center'>
              <h1 className='text-3xl'>Colors</h1>
              <FiChevronRight />
            </div>

            <div className='flex flex-wrap gap-3 mt-3'>
              {colors.map((color) => (
                <div key={color} className='flex flex-wrap'>
                  
                  <ColorButton color={color} />
                </div>
              ))}
            </div>
          </div>

             <div className='flex flex-col mt-3 border-t border-t-gray-300 pt-3'>
            <div className='flex justify-between items-center'>
              <h1 className='text-3xl'>Size</h1>
              <FiChevronRight />
            </div>
            <div className='flex flex-wrap mt-3 gap-3'>
              {/* We loop through our array of sizes */}
              {sizes.map((size) => (
                <div
                  key={size}
                  // When this button is clicked, we call handleSizeClick and pass THIS button's size to it.
                  onClick={() => handleSizeClick(size)}
                  // This is the conditional styling. It checks if the current size in the loop is the one in our app's memory.
                  className={`py-1 px-3 rounded-2xl cursor-pointer transition-colors duration-200 ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  <h1>{size}</h1>
                </div>
              ))}
            </div>
          </div>

            <div className='flex justify-between border-b border-b-gray-300 items-center mt-3'>
                <h1 className='text-3xl'>Dress Style</h1>
                <img className='h-4 w-auto cursor-pointer' src={filter} alt="" />
            </div>
            <div className='flex flex-col gap-3 mt-3'>
                <div className='flex justify-between'>
                    <h1>Casual</h1>
                    <FiChevronRight />
                </div>
                <div className='flex justify-between'>
                    <h1>Party</h1>
                    <FiChevronRight />
                </div>
                <div className='flex justify-between'>
                    <h1>Formal</h1>
                    <FiChevronRight />
                </div>
                <div className='flex justify-between'>
                    <h1>Gym</h1>
                    <FiChevronRight />
                </div>
            </div>
            

            <div className='mt-5'><button className='bg-black text-white w-full p-3 rounded-4xl' type='submit'>Apply Filters</button></div>

        </div>
        
        <div className='mx-auto md:w-3/4 '>
                <div className=' hidden md:flex justify-between mx-12 my-3 max-w-[1160px]'>
                  <h1 className='text-4xl'>Casual</h1>
                  <div className='flex gap-2 '>
                    <p className='text-gray-300'>Showing 1-10 of 100 Products</p>
                    <div onClick={handleSort} className='flex cursor-pointer '>
                       <p >Sort by: Most Popular</p>
                       {!sort ? <FiChevronDown className='mt-1' /> :<FiChevronUp className='mt-1' /> }
                        <div className=''>
                          <ul className={!sort ? 'hidden absolute right-[-100%] ' : ' absolute mt-13 right-22 w-42 rounded-2xl bg-white shadow-[2px_2px_17px_-2px_rgba(0,_0,_0,_0.1)] z-90  flex flex-col'}>
                            <li>Price: Low to High</li>
                            <li>Price: High to Low</li>
                            <li>Name: A to Z</li>
                            <li>Name: Z to A</li>
                          </ul>
                        </div>
                    </div>
                 
                  </div>
                  
                  </div>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-3 p-5'>

                  <div className='text-left flex flex-col gap-3'>
                    <Link to={'/product'}>
                    <div className=''>
                                  <img className='rounded-3xl w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div></Link>
                              
                          </div>

                    
                  <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>

                    
                  <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>

                   
                  <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>

                    
                  <div className='  text-left flex flex-col '>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                    
                  <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                          <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                          <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                          <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                          <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                          <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                          <div className='  text-left flex flex-col gap-3'>
                              <div className=''>
                                  <img className='rounded-3xl  w-82' src={blackT} alt="" />
                              </div>
                              <div>
                                  <p className='font-bold'>T-shirt with Tape Details</p>
                                  <div className='flex gap-3 h-4 items-center'>
                                      <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                      <p>4/5</p>
                                  </div>
                                  <p className='font-bold text-xl'>$120</p>
                                </div>
                          </div>
                 

              </div>
              <div className='border-t border-t-gray-300 md:max-w-[1230px] flex justify-between mx-2'>
                <div className='mt-3'><button className='cursor-pointer border border-gray-300 p-1 md:p-3 rounded-2xl flex items-center'> <FiChevronLeft /> Previous</button></div>
                <div className=' mt-3 flex gap-1 md:gap-8 text-[10px] md:text-[15px]'>
                  <p className='bg-gray-300 rounded-md p-3'>1</p>
                  <p className=' p-3 '>2</p>
                  <p className=' p-3 hidden md:flex'>3</p>
                  <p className=' p-3 '>...</p>
                  <p className=' p-3'>10</p>
                </div>
                <div className='mt-3'><button className='cursor-pointer border border-gray-300 p-1 md:p-3 rounded-2xl flex  items-center'>Next <FiChevronRight /></button></div>
              </div>
        </div>
        
    </div>
                
    
    </>
  )
}

export default ShopMain
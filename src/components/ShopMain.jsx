import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown, FiChevronUp, FiChevronLeft } from "react-icons/fi";
import filter from '../assets/filter.png';
import star4 from '../assets/star4.5.png';
import { Link } from 'react-router-dom';
import {IoMdClose } from "react-icons/io";

const ShopMain = ({ products }) => {
    // State to manage sorting, price range, and other filters
    const [sortBy, setSortBy] = useState('most-popular');
    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(800);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [filterOpen, setFilterOpen] = useState(false);
    const [sortMenuOpen, setSortMenuOpen] = useState(false);

    // Create unique lists of all available colors and sizes from the products
    const allColors = [...new Set(products.flatMap(product => product.colors))];
    const allSizes = [...new Set(products.flatMap(product => product.sizes))];

    // Function to handle opening and closing the sort dropdown
    const handleSortMenu = () => {
        setSortMenuOpen(!sortMenuOpen);
    };

    const handleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(currentSize => (currentSize === size ? null : size));
    };

    const handleColorClick = (color) => {
        setSelectedColor(currentColor => (currentColor === color ? null : color));
    };

    // Function to handle changes in the sorting criteria
    const handleSortChange = (criteria) => {
        setSortBy(criteria);
        setSortMenuOpen(false);
    };

    // Filter products based on selected color, size, and price range
    const filteredProducts = products.filter(product => {
        const colorMatch = !selectedColor || product.colors.includes(selectedColor);
        const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return colorMatch && sizeMatch && priceMatch;
    });

    // Sorting logic based on the 'sortBy' state applied to filtered products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low-to-high':
                return a.price - b.price;
            case 'price-high-to-low':
                return b.price - a.price;
            case 'name-a-to-z':
                return a.name.localeCompare(b.name);
            case 'name-z-to-a':
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    });
    
    // Function to display the name of the current sort option
    const getSortByText = () => {
        switch (sortBy) {
            case 'price-low-to-high': return 'Price: Low to High';
            case 'price-high-to-low': return 'Price: High to Low';
            case 'name-a-to-z': return 'Name: A to Z';
            case 'name-z-to-a': return 'Name: Z to A';
            default: return 'Most Popular';
        }
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
                <div className='flex gap-2 ml-2'><h1 className='hidden md:flex'>Casual</h1> <p className='text-gray-300'>Showing 1-10 of {sortedProducts.length} Products</p></div>
                
                <div onClick={handleSortMenu} className='flex cursor-pointer relative'>
                    <p >Sort by: {getSortByText()}</p>
                    {!sortMenuOpen ? <FiChevronDown className='mt-1' /> :<FiChevronUp className='mt-1' /> }
                    <div className=''>
                        <ul className={!sortMenuOpen ? 'hidden' : 'absolute mt-13 right-0 w-42 rounded-2xl bg-white shadow-[2px_2px_17px_-2px_rgba(0,_0,_0,_0.1)] z-90 flex flex-col'}>
                            <li onClick={() => handleSortChange('most-popular')} className="p-2 hover:bg-gray-100">Most Popular</li>
                            <li onClick={() => handleSortChange('price-low-to-high')} className="p-2 hover:bg-gray-100">Price: Low to High</li>
                            <li onClick={() => handleSortChange('price-high-to-low')} className="p-2 hover:bg-gray-100">Price: High to Low</li>
                            <li onClick={() => handleSortChange('name-a-to-z')} className="p-2 hover:bg-gray-100">Name: A to Z</li>
                            <li onClick={() => handleSortChange('name-z-to-a')} className="p-2 hover:bg-gray-100">Name: Z to A</li>
                        </ul>
                    </div>
                </div>

                <div onClick={handleFilter} className='cursor-pointer mr-3'>
                    <img className='bg-gray-300 rounded-full w-8 p-1' src={filter} alt="" />
                </div>
            </div>

            <div className=' flex md:mx-5 gap-10'>
                <div className={!filterOpen ? 'hidden md:flex md:w-1/4 md:h-fit bottom-[-100%] ease-in-out duration-300 left-0 z-10 bg-white flex-col p-3 border border-gray-300 rounded-2xl' : 'fixed bottom-0 top-0 ease-in-out duration-300 left-0 z-50 bg-white flex-col p-3 border border-gray-300 rounded-2xl'}>
                    <div className='flex justify-between border-b border-b-gray-300 items-center'>
                        <h1 className='text-3xl'>Filters</h1>
                        <div className='md:flex hidden'>
                            <img className='h-4 w-auto z-10' src={filter} alt="" />
                        </div>
                        <div className='flex md:hidden' onClick={handleFilter}>
                            <IoMdClose className='cursor-pointer' size={30} />
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
                            <h2 className=" font-semibold mb-4">Price: ${minPrice} - ${maxPrice}</h2>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="range"
                                    min="50"
                                    max="400"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <input
                                    type="range"
                                    min="50"
                                    max="800"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-gray-500 text-sm mx-1">
                                <span>$50</span>
                                <span>$800</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-3 border-t border-t-gray-300'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-3xl'>Colors</h1>
                            <FiChevronRight />
                        </div>
                        <div className='flex flex-wrap gap-3 mt-3'>
                            {allColors.map((color) => (
                                <div key={color} className='flex flex-wrap'>
                                    <span 
                                        className={`h-8 w-8 rounded-full border border-gray-300 cursor-pointer ${color} ${
                                            selectedColor === color ? 'border-2 border-black' : ''
                                        }`}
                                        onClick={() => handleColorClick(color)}
                                    ></span>
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
                            {allSizes.map((size) => (
                                <div
                                    key={size}
                                    onClick={() => handleSizeClick(size)}
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
                    
                </div>
                
                <div className='mx-auto md:w-3/4 '>
                    <div className=' hidden md:flex justify-between mx-12 my-3 max-w-[1160px]'>
                        <h1 className='text-4xl'>Casual</h1>
                        <div className='flex gap-2 '>
                            <p className='text-gray-300'>Showing 1-10 of {sortedProducts.length} Products</p>
                            <div onClick={handleSortMenu} className='flex cursor-pointer relative'>
                                <p >Sort by: {getSortByText()}</p>
                                {!sortMenuOpen ? <FiChevronDown className='mt-1' /> :<FiChevronUp className='mt-1' /> }
                                <div className=''>
                                    <ul className={!sortMenuOpen ? 'hidden' : 'absolute mt-13 right-0 w-42 rounded-2xl bg-white shadow-[2px_2px_17px_-2px_rgba(0,_0,_0,_0.1)] z-90 flex flex-col'}>
                                        <li onClick={() => handleSortChange('most-popular')} className="p-2 hover:bg-gray-100">Most Popular</li>
                                        <li onClick={() => handleSortChange('price-low-to-high')} className="p-2 hover:bg-gray-100">Price: Low to High</li>
                                        <li onClick={() => handleSortChange('price-high-to-low')} className="p-2 hover:bg-gray-100">Price: High to Low</li>
                                        <li onClick={() => handleSortChange('name-a-to-z')} className="p-2 hover:bg-gray-100">Name: A to Z</li>
                                        <li onClick={() => handleSortChange('name-z-to-a')} className="p-2 hover:bg-gray-100">Name: Z to A</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                        {sortedProducts.map((item)=>(
                            <div key={item.id} className='text-left flex flex-col'>
                                <Link to={`/product/${item.id}`}>
                                    <div className='h-auto w-auto'>
                                        <img className='rounded-3xl w-auto h-50 md:h-75 object-cover' src={item.mainImage} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-bold'>{item.name}</p>
                                        <div className='flex gap-3 h-4 items-center'>
                                            <img className='h-auto w-13 md:w-auto' src={star4} alt="" />
                                            <p>{item.rating}/5</p>
                                        </div>
                                        <p className='font-bold text-xl mt-2'>${item.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
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
                        <div className='mt-3'><button className='cursor-pointer border border-gray-300 p-1 md:p-3 rounded-2xl flex items-center'>Next <FiChevronRight /></button></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopMain;
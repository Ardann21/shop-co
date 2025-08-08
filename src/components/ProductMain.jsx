import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import RatingReview from './RatingReview';
import Faq from './Faq';
import ProductDetails from './ProductDetails';
import { products } from './ProductsData'; // Assuming this imports the array of all products

const ProductMain = ({ product, addToCart }) => {

    const [content, setContent] = useState('reviews');

    const [quantity, setQuantity] = useState(1);

    const [selectedSize, setSelectedSize] = useState(null);

    const [selectedColor, setSelectedColor] = useState(null);

    if (!product) {
        return <div className='mt-12'>Product not found!</div>;
    }

    const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const [mainImageSrc, setMainImageSrc] = useState(product.mainImage);

    const handleThumbnailClick = (imageSrc) => {
        setMainImageSrc(imageSrc);
    };

    return (
        <>
            <div className='flex flex-col md:flex-row md:max-w-[1240px] md:mx-auto items-center'>
                <div className='flex flex-col md:flex-row my-12 gap-2 w-auto'>
                    <div className='hidden md:flex flex-col gap-2 h-auto w-auto'>
                         {product.images && product.images.map((image, index) => (
                            <img
                                key={index}
                                className={`h-auto w-80 rounded-2xl cursor-pointer ${mainImageSrc === image ? 'border-2 border-black' : 'border-none'}`}
                                src={image}
                                alt=""
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))}
                    </div>
                    <div className='flex w-auto h-auto'>
                        <img className='md:w-230 w-70 h-70 md:h-auto  rounded-[40px]' src={mainImageSrc} alt={product.name} />
                    </div>
                    <div className='flex md:hidden gap-2  h-22 w-22'>
                         {product.images && product.images.map((image, index) => (
                            <img
                                key={index}
                                className={`h-22 w-80 rounded-2xl cursor-pointer ${mainImageSrc === image ? 'border-2 border-black' : 'border-none'}`}
                                src={image}
                                alt=""
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))}
                    </div>
                </div>

                

                <div className='flex flex-col text-left mx-2 p-3 gap-2'>
                    <div><h1 className='text-3xl font-bold '>{product.name}</h1></div>
                    <div><p className='font-bold'>{product.rating}/5</p></div>
                    <div className='flex gap-2 text-2xl'>
                        <p className='font-bold'>${product.price}</p>
                        {product.oldPrice && <p className='line-through text-gray-300'>${product.oldPrice}</p>}
                    </div>
                    <div className='border-b border-gray-300'><p>{product.description}</p></div>
                    
                    {/* Dynamic color buttons */}
                    <div className='flex flex-col text-2xl'>
                        <p>Select Colors</p>
                        <div className='flex gap-2 border-b border-gray-300'>
                            {product.colors && product.colors.map((color, index) => (
                                <button key={index}  onClick={() => setSelectedColor(color)} className={`${color} rounded-full p-4 mb-2 ${selectedColor === color ? `${color} border-2 border-black` : `${color}`}`}></button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Dynamic size buttons */}
                    <div className='flex flex-col'>
                        <p className='text-2xl'>Choose Size</p>
                        <div className='flex gap-2 border-b border-gray-300'>
                            {product.sizes && product.sizes.map((size, index) => (
                                <button key={index}  onClick={() => setSelectedSize(size)} className={`bg-gray-300 rounded-full md:px-3 md:py-1 mb-2 px-1 ${selectedSize === size ? 'border-2 border-black' : ''}`}>{size}</button>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <div className='flex gap-5 px-1 md:px-3 rounded-4xl bg-gray-200 items-center'>
                            <div><button onClick={handleDecreaseQuantity} className='cursor-pointer'><FaMinus size={12} /></button></div>
                            <div><button className='md:text-xl font-bold'>{quantity}</button></div>
                            <div><button onClick={handleIncreaseQuantity} className='cursor-pointer'><FaPlus size={12} /></button></div>
                        </div>
                        <div className='w-full'>
                            <button
                                onClick={() => addToCart({ ...product, quantity:quantity, selectedSize, selectedColor })}
                                className='submit py-1 md:py-3 px-3 w-full bg-black text-white rounded-2xl cursor-pointer'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className='flex md:max-w-[1240px] md:mx-auto justify-around border-b border-b-gray-300'>
                <div className={content === 'details' ? 'border-b-2 border-b-black font-black' : 'border-none'} onClick={() => setContent('details')}><h1 className='cursor-pointer'>Product Details</h1></div>
                <div className={content === 'reviews' ? 'border-b-2 border-b-black font-black' : 'border-none'} onClick={() => setContent('reviews')}><h1 className='cursor-pointer'>Rating & Review</h1></div>
                <div className={content === 'faq' ? 'border-b-2 border-b-black font-black' : 'border-none'} onClick={() => setContent('faq')}><h1 className='cursor-pointer'>FAQs</h1></div>
            </div>
            
            {/* Tab Content */}
            {content === 'reviews' && <RatingReview />}
            {content === 'faq' && <Faq />}
            {content === 'details' && <ProductDetails />}

            {/* "You Might Also Like" Section (This is where the map is correct) */}
            <h1 className='text-4xl font-bold mt-32'>YOU MIGHT ALSO LIKE</h1>
            <div className='relative overflow-y-scroll flex md:justify-center gap-6 mt-12'>
                {products.map((relatedProduct) => (
                    <div key={relatedProduct.id} className='text-left flex flex-col gap-3'>
                        <div className='w-52 md:w-92'>
                            <img className='rounded-2xl h-50 md:h-80' src={relatedProduct.mainImage} alt={relatedProduct.name} />
                        </div>
                        <div>
                            <p className='font-bold'>{relatedProduct.name}</p>
                            <div className='flex gap-3 h-4 items-center'>
                                <p>{relatedProduct.rating}/5</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold text-xl'>${relatedProduct.price}</p>
                                {relatedProduct.oldPrice && (
                                    <p className='font-bold text-xl line-through text-gray-400'>${relatedProduct.oldPrice}</p>
                                )}
                                {relatedProduct.discount && (
                                    <p className=' text-[#ff1818] bg-[#ff33334b] rounded-4xl text-[15px] font-bold px-2'>{relatedProduct.discount}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductMain;
import React from 'react';
import ProductMain from '../components/ProductMain';
import { useParams } from 'react-router-dom';
const Product = ({ addToCart, products }) => {

// Get the 'id' parameter from the URL
    const { id } = useParams();

    // Find the product in the array that matches the ID from the URL.
    // Use parseInt() to ensure the ID is a number for a correct match.
    const selectedProduct = products.find((p) => p.id === parseInt(id));
  return (
    <>

      <ProductMain addToCart={addToCart} product={selectedProduct}/>
    </>
  );
}

export default Product;
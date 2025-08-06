import React from 'react';
import ProductMain from '../components/ProductMain';

const Product = ({ addToCart, products }) => {
  const productToDisplay = products[0];

  return (
    <>

      <ProductMain addToCart={addToCart} product={productToDisplay}/>
    </>
  );
}

export default Product;
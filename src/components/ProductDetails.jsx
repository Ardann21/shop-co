import React from 'react';

const ProductDetails = () => {
  return (
    <div className="p-4 mx-2 text-left max-w-[1240px] md:mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>

      <ul className="space-y-2 list-disc list-inside text-gray-700">
        <li>
          <strong>Material:</strong> 100% Premium Cotton for long-lasting comfort and breathability.
        </li>
        <li>
          <strong>Fit:</strong> Relaxed unisex fit with reinforced stitching at seams.
        </li>
        <li>
          <strong>Print:</strong> Eco-friendly water-based ink graphic print that doesn’t crack or fade.
        </li>
        <li>
          <strong>Care Instructions:</strong> Machine wash cold, tumble dry low. Do not bleach or iron the print.
        </li>
        <li>
          <strong>Origin:</strong> Made ethically in Portugal.
        </li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Why You'll Love It</h3>
        <p className="text-gray-700">
          This graphic t-shirt was designed for both comfort and style. Whether you're dressing it up with a blazer
          or keeping it casual with jeans, it's the perfect staple for every wardrobe.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;

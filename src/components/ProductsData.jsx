import blackT from '../assets/black-tshirt.png';
import jean from '../assets/jean.png';
import throuser from '../assets/throuser.png';
import orangeShirt from '../assets/orangeShirt.png';
// You'll need to import star4.5 if you want to use it dynamically
// import star4 from '../assets/star4.5.png'; 

export const products = [
  {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 120,
    oldPrice: 360,
    rating: 4.5,
    mainImage: blackT,
    images: [blackT, blackT, blackT], // You can add multiple images here
    sizes: ["Small", "Large", "X-Large", "2X-Large"],
    colors: ["bg-red-500", "bg-yellow-500", "bg-blue-500"],
    description: "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "20%",
    rating: 4.0,
    mainImage: jean,
    images: [jean, jean, jean],
    sizes: ["28", "30", "32", "34"],
    colors: ["bg-blue-800", "bg-gray-700"],
    description: "Fashionable skinny-fit jeans that are both comfortable and stylish, perfect for a casual look.",
  },
  {
    id: 3,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    mainImage: throuser,
    images: [throuser, throuser, throuser],
    sizes: ["S", "M", "L", "XL"],
    colors: ["bg-white", "bg-black"],
    description: "A trendy t-shirt with unique tape details on the sleeves. A modern twist on a classic.",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: "30%",
    rating: 4.0,
    mainImage: orangeShirt,
    images: [orangeShirt, orangeShirt, orangeShirt],
    sizes: ["S", "M", "L"],
    colors: ["bg-orange-500", "bg-gray-200"],
    description: "A comfortable and stylish striped t-shirt for everyday wear. The perfect addition to your wardrobe.",
  },
];
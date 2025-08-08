import blackT from '../assets/black-tshirt.png';
import jean from '../assets/jean.png';
import throuser from '../assets/throuser.png';
import orangeShirt from '../assets/orangeShirt.png';
import greenTshirt from '../assets/greenTshirt.png';
import bermuda from '../assets/bermuda.png';
import faded from '../assets/faded.png';
import courage from '../assets/courage.png';


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
    images: [blackT, jean, throuser], // You can add multiple images here
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
    images: [blackT, jean, throuser],
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
    images: [blackT, jean, throuser],
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
    images: [blackT, jean, throuser],
    sizes: ["S", "M", "L"],
    colors: ["bg-orange-500", "bg-gray-200"],
    description: "A comfortable and stylish striped t-shirt for everyday wear. The perfect addition to your wardrobe.",
  },
   {
    id: 5,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "20%",
    rating: 4.0,
    mainImage: jean,
    images: [blackT, jean, throuser],
    sizes: ["28", "30", "32", "34"],
    colors: ["bg-blue-800", "bg-gray-700"],
    description: "Fashionable skinny-fit jeans that are both comfortable and stylish, perfect for a casual look.",
  },
   {
    id: 6,
    name: "Bermuda Short Jeans",
    price: 320,
    oldPrice: 400,
    discount: "20%",
    rating: 4.6,
    mainImage: bermuda,
    images: [bermuda, orangeShirt, throuser],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["bg-white", "bg-blue-200"],
    description: "A sophisticated formal shirt with a modern cut. Ideal for business meetings or special events.",
  },
  // Product 7: Now a Signature Designer Tee
  {
    id: 7,
    name: "Signature Designer Tee",
    price: 750,
    rating: 5.0,
    mainImage: faded,
    images: [faded, blackT, greenTshirt],
    sizes: ["S", "M", "L"],
    colors: ["bg-black", "bg-white"],
    description: "An exclusive designer t-shirt that combines luxury and comfort. A premium statement piece for your wardrobe.",
  },
  // Product 8: Party Dress remains the same
  {
    id: 8,
    name: "Stylish Party Dress",
    price: 450,
    oldPrice: 500,
    rating: 4.7,
    mainImage: courage,
    images: [courage, bermuda, faded],
    sizes: ["XS", "S", "M", "L"],
    colors: ["bg-red-500", "bg-black", "bg-blue-500"],
    description: "A stunning party dress designed to make you stand out. The perfect choice for a night out.",
  },
  // Product 9: Green T-shirt remains the same
  {
    id: 9,
    name: "Vibrant Green T-shirt",
    price: 90,
    rating: 4.2,
    mainImage: greenTshirt,
    images: [greenTshirt, blackT, orangeShirt],
    sizes: ["S", "M", "L", "XL"],
    colors: ["bg-green-500", "bg-gray-500"],
    description: "A simple and vibrant green t-shirt made from eco-friendly cotton. Comfortable for everyday wear.",
  },
  // Product 10: Now Designer Blue Jeans
  {
    id: 10,
    name: "Designer Blue Jeans",
    price: 600,
    rating: 4.9,
    mainImage: faded,
    images: [faded, jean, courage],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["bg-blue-800", "bg-black"],
    description: "High-end blue jeans with a unique fit and finish. A luxurious addition to your denim collection.",
  },
  // Product 11: Now Modern Trousers
  {
    id: 11,
    name: "Modern Trousers",
    price: 180,
    oldPrice: 200,
    discount: "10%",
    rating: 4.3,
    mainImage: courage,
    images: [courage, throuser,faded],
    sizes: ["S", "M", "L", "XL"],
    colors: ["bg-gray-700", "bg-black", "bg-white"],
    description: "Stylish and comfortable trousers. Perfect for a sharp, modern look.",
  }
];
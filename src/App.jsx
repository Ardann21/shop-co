import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './page/Home';
import Footer from './components/Footer';
import Shop from './page/Shop';
import Cart from './page/Cart';
import Product from './page/Product';
import './App.css';
import { products } from './components/ProductsData';
import About from './page/About';
import Blog from './page/Blog'; 
import Contact from './page/Contact';
function App() {

  const [cart, setCart] = useState([])
  

  const addToCart = (product) => {
  const uniqueId = `${product.id}-${product.selectedSize}-${product.selectedColor}`;
  
  setCart((prev) => {
    const exist = prev.find((item) => item.uniqueId === uniqueId);

    if (exist) {
      return prev.map((item) =>
        item.uniqueId === uniqueId
          ? {
              ...item,
              // Corrected: Convert both quantities to numbers before adding them
              quantity: Number(item.quantity) + Number(product.quantity),
            }
          : item
      );
    } else {
      // Corrected: Ensure the initial quantity is a number
      return [...prev, { ...product, uniqueId, quantity: Number(product.quantity) }];
    }
  });
};

  
  const removeCart = (uniqueId) => {
  setCart((prev) => {
    // Filter out the item that matches the specific uniqueId
    return prev.filter((item) => item.uniqueId !== uniqueId);
  });
};



  const increaseQuantity = (productId) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  return (
    <BrowserRouter>
      <Nav cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} removeCart={removeCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} products={products} />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

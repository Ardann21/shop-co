import React from 'react'
import CartMain from '../components/CartMain'

const Cart = ({cart,removeCart,increaseQuantity,decreaseQuantity}) => {
  return (
    <>
    <CartMain cart={cart} removeCart={removeCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </>
  )
}

export default Cart
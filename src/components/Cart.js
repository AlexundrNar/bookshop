import React, { useState, useEffect } from 'react'
import '../components/styles/cart.css'

const Cart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0)

  const handleRemove = (id) => {
    const arr = cart.filter(item => item.id !== id)
    setCart(arr)
    handlePrice()
  }

  const handlePrice = () => {
    let sum = 0
    cart.map(item => (sum += item.amount * item.price))
    setPrice(sum)
  }

  useEffect(() => {
    handlePrice();
  });
  
  return (
    <article>
      {cart.map(item => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Удалить</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Общая цена корзины</span>
        <span>{price} руб.</span>
      </div>  
    </article>
  )
}

export default Cart
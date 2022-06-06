import React from 'react'

const Card = ({item, handleClick}) => {
  const {title, author, price, img} = item
  
  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={img} alt="" />     
      </div>
      <div className='details'>
        <p>{title}</p>
        <p>{author}</p>
        <p>Цена - {price} руб.</p>
        <button onClick={() => handleClick(item)}>В корзину</button>
      </div>
    </div>
  )
}

export default Card
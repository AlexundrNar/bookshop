import React from 'react'
import list from '../data'
import Card from './Card'
import '../components/styles/booklist.css'

const Booklist = ({handleClick}) => {
 
  return (
    <section>
      {
        list.map(item => (
          <Card item={item} key={item.id} handleClick={handleClick} />
        ))
      }
    </section>
  )
}

export default Booklist
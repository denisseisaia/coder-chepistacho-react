import React from 'react'
import { Cart } from "react-bootstrap-icons"

export const CartWidget = (props) => {
  return (
    <div className='carrito'>
        <Cart 
        size={26}/> {props.numerito}
    </div>
  )
}

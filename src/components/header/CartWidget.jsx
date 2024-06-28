import React, { useContext } from 'react'
import { Cart } from "react-bootstrap-icons"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext);

  return (
    <Link className='carrito' to="/carrito">
        <Cart size={26}/> <span>{calcularCantidad ()}</span>
    </Link>
  )
}

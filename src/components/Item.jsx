import React from 'react'
import { Link } from 'react-router-dom'


export const Item = ( {producto} ) => {
  return (
    <div className="producto">
      <p className='categoria-prod'>{producto.categoria.nombre}</p>
      <img src={producto.img1} className="imagen-prod" />
      <h2 className='titulo-prod'>{producto.nombre}</h2>
      <p className='precio-prod'>PRECIO ${producto.precio}</p>
      <Link className='link-prod' to={`/item/${producto.id}`}>VER</Link>
    </div>
  )
}
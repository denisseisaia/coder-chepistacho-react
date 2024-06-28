import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const ItemDetail = ( { producto } ) => {

  const { agregarCarrito } = useContext(CartContext);


  return (
    <div className='detail-prod'>
      <div className='detail-izq'>
        <p className='categoria-prod'>{producto.categoria.nombre}</p>
        {producto.img2 ? (
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={producto.img1} className="imagen-prod d-block" alt={producto.nombre} />
              </div>
              <div className="carousel-item">
                <img src={producto.img2} className="imagen-prod d-block" alt={producto.nombre} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <img src={producto.img1} className="imagen-prod d-block" alt={producto.nombre} />
        )}
      </div>

      <div className='detail-der'>
        <h2 className='titulo-prod'>{producto.nombre}</h2>
        <div className='detail-compra'>
          <p className='precio-prod'>PRECIO ${producto.precio}</p>
          <button onClick={() => agregarCarrito(producto)} className='link-prod'>COMPRAR</button>
        </div>
        <p className='descripcion-prod'>{producto.descripcion}</p>
      </div>
    </div>
  )
}

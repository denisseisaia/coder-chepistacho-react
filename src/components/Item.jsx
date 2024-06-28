{// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { CartContext } from '../context/CartContext'


// export const Item = ( {producto} ) => {

//   const { agregarCarrito } = useContext (CartContext);
  
//   return (
//     <div className="producto">
//       <p className='categoria-prod'>{producto.categoria.nombre}</p>
//       <img src={producto.img1} className="imagen-prod" />
//       <h2 className='titulo-prod'>{producto.nombre}</h2>
//       <p className='precio-prod'>PRECIO ${producto.precio}</p>
//       <Link className='link-prod' to={`/item/${producto.id}`}>VER</Link>
//       <button onClick={() => agregarCarrito (producto)} className='link-prod'>COMPRAR</button>
//     </div>
//   )
// }
}
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Item = ({ producto }) => {
  const { agregarCarrito } = useContext(CartContext);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="producto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className='categoria-prod'>{producto.categoria.nombre}</p>
      <img src={producto.img1} className="imagen-prod" alt={producto.nombre} />
      <h2 className='titulo-prod'>{producto.nombre}</h2>
      <p className='precio-prod'>PRECIO ${producto.precio}</p>
      {hovered && (
        <div className="botones">
          <Link className='link-prod' to={`/item/${producto.id}`}>VER</Link>
          <button onClick={() => agregarCarrito(producto)} className='link-prod'>COMPRAR</button>
        </div>
      )}
    </div>
  );
};
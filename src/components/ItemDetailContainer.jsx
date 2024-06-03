import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from "../data/productos.json";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])


  return (
    <div className='detail-prod'>
    {producto ? (
        <>
          <div className='detail-izq'>
            <p className='categoria-prod'>{producto.categoria.nombre}</p>
            <img src={producto.img1} className="imagen-prod" alt={producto.nombre} />            
          </div>
          <div className='detail-der'>
            <h2 className='titulo-prod'>{producto.nombre}</h2>
            <div className='detail-compra'>
              <p className='precio-prod'>PRECIO ${producto.precio}</p>
              <Link className='link-prod' to={`/item/${producto.id}`}>COMPRAR</Link>
            </div>
            <p className='descripcion-prod'>{producto.descripcion}</p>

          </div>          
        </>
    ) : (
        <p>Cargando...</p>
    )}
    </div>
  )
}

export default ItemDetailContainer
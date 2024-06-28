import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { XSquareFill, Trash3Fill } from "react-bootstrap-icons"

export const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, aumentarCantidad, disminuirCantidad, eliminarProducto } = useContext(CartContext);

  // Función para agrupar productos por id y sumar cantidades
  const agruparProductos = () => {
    const groupedProducts = carrito.reduce((acc, prod) => {
      const existingProduct = acc.find((item) => item.id === prod.id);
      if (existingProduct) {
        existingProduct.cantidad += prod.cantidad; // Sumar la cantidad existente con la nueva
      } else {
        acc.push({ ...prod }); // Agregar un nuevo producto
      }
      return acc;
    }, []);
    return groupedProducts;
  };

  return (
    <div>
      <h1>Carrito</h1>
      <div className="carrito-container">
        {agruparProductos().length === 0 ? (
          <h2>Carrito Vacío</h2>
        ) : (
          <>
            <div className="productos-container">
              {agruparProductos().map((producto) => (
                <div key={producto.id} className="producto-item">
                  <img src={producto.img1} alt={producto.nombre} />
                  <div className='item-prod'>
                    <div>
                      <Link className='titulo-prod' to={`/item/${producto.id}`}>{producto.nombre}</Link>
                      <p>${producto.precio * producto.cantidad}</p>
                    </div>
                    <div className='acciones-prod'>
                      <button className='boton-cant' onClick={() => disminuirCantidad(producto.id)}>-</button>
                      <p>{producto.cantidad}</p>
                      <button className='boton-cant' onClick={() => aumentarCantidad(producto.id)}>+</button>
                      <button className='boton-eliminar' onClick={() => eliminarProducto(producto.id)}><XSquareFill size={26}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="resumen-container">
              <div className='resumen-items'>
                <h2>Resumen del Carrito</h2>
                <div className='descrip-carrito'>
                  <p className='descrip-izq'>Subtotal</p>
                  <p className='descrip-der'>${calcularTotal()}</p>
                  <p className='descrip-izq'>Envío</p>
                  <p className='descrip-der'>Gratis</p>
                  <p className='descrip-izq'>Total a pagar</p>
                  <p className='descrip-der'>${calcularTotal()}</p>
                </div>
              </div>
              <div className='final-resumen'>
                <button className='vaciar-carrito' onClick={vaciarCarrito}><Trash3Fill size={26}/></button>
                <Link to="/finalizar-compra"><button className='finalizar-carrito' >Comprar</button></Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <h1>Carrito</h1>
  //     <div className="carrito-container">
  //       <div className="productos-container">
  //         {agruparProductos().map((producto) => (
  //           <div key={producto.id} className="producto-item">
  //             <img src={producto.img1} alt={producto.nombre} />
  //             <div className='item-prod'>
  //               <div>
  //                 <Link className='titulo-prod' to={`/item/${producto.id}`}>{producto.nombre}</Link>
  //                 <p>${producto.precio*producto.cantidad}</p>
  //               </div>
  //               <div className='acciones-prod'>
  //                 <button className='boton-cant' onClick={() => disminuirCantidad(producto.id)}>-</button>
  //                 <p>{producto.cantidad}</p>
  //                 <button className='boton-cant' onClick={() => aumentarCantidad(producto.id)}>+</button>
  //                 <button className='boton-eliminar' onClick={() => eliminarProducto(producto.id)}><XSquareFill size={26}/></button>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="resumen-container">
  //         <div className='resumen-items'>
  //           <h2>Resumen del Carrito</h2>
  //           <div className='descrip-carrito'>
  //             <p className='descrip-izq'>Subtotal</p>
  //             <p className='descrip-der'>${calcularTotal()}</p>
  //             <p className='descrip-izq'>Envío</p>
  //             <p className='descrip-der'>Gratis</p>
  //             <p className='descrip-izq'>Total a pagar</p>
  //             <p className='descrip-der'>${calcularTotal()}</p>
  //           </div>
  //         </div>
  //         <div className='final-resumen'>
  //           <button className='vaciar-carrito' onClick={vaciarCarrito}><Trash3Fill size={26}/></button>
  //           <Link to="/finalizar-compra"><button className='finalizar-carrito' >Comprar</button></Link>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )

}


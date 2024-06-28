import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Checkout = () => {
    
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [docId, setDocId] = useState('');

    const comprar = (data) => {
      const pedidos = {
        cliente: data,
        productos: carrito,
        total: calcularTotal()
      }

      const pedidosRef = collection (db, 'pedidos');

      addDoc(pedidosRef, pedidos)
        .then((doc) => {
          setDocId(doc.id);
          vaciarCarrito();
        })
    }
  

  if (docId) {
    return (
      <div>
        <div>
          <h1>¡Muchas gracias por tu compra!</h1>
          <h3>Para hacer el seguimiento de tu pedido, el identificador es: <strong>{docId}</strong></h3>
        </div>
      </div>
    )
  }


  return (
    <div className='finalizar-container'>
      <h1 className='banner'>Finalizar Compra</h1> 
      <div className='finalizar-compra'>
        <div className='form-final'>
          
      <h2>Por favor ingresa tus datos</h2>
          <form onSubmit={handleSubmit(comprar)}>
            <div className='item-form mb-3'>
              <label htmlFor='nombre' className='form-label'>Nombre</label>
              <input type='text' className='form-control' id='nombre' {...register('nombre', { required: true })} />
              {errors.nombre && <span className='text-danger'>Este campo es obligatorio</span>}
            </div>
            <br/>
            <div className='item-form mb-3'>
              <label htmlFor='apellido' className='form-label'>Apellido</label>
              <input type='text' className='form-control' id='apellido' {...register('apellido', { required: true })} />
              {errors.nombre && <span className='text-danger'>Este campo es obligatorio</span>}
            </div>
            <br/>
            <div className='item-form mb-3'>
              <label htmlFor='email' className='form-label'>E-mail</label>
              <input type='email' className='form-control' id='email' {...register('email', { required: true })} />
              {errors.nombre && <span className='text-danger'>Este campo es obligatorio</span>}
              
            </div>
            <div className='final-resumen'>
            <button className="finalizar-carrito" type='submit'>Finalizar Compra</button>
            </div>   
            <br/>
          </form>
        </div>
        <div className='resumen-container'>
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

        </div>
      </div>
    </div>
  )
}


import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("carrito")) || [];

  const [carrito, setCarrito] = useState(initialCart)

  const guardarCarritoEnLocalStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  const agregarCarrito = (producto) => {
    const existingProduct = carrito.find((prod) => prod.id === producto.id);

    if (existingProduct) {
      const nuevoCarrito = carrito.map((prod) =>
        prod.id === producto.id
          ? { ...prod, cantidad: prod.cantidad + 1 }
          : prod
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  const calcularCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  }

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== id);
    setCarrito(nuevoCarrito);
    guardarCarritoEnLocalStorage(nuevoCarrito);
  }

  const aumentarCantidad = (id) => {
    const nuevoCarrito = carrito.map((prod) =>
      prod.id === id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
    );
    setCarrito(nuevoCarrito);
    guardarCarritoEnLocalStorage(nuevoCarrito);
  };

  const disminuirCantidad = (id) => {
    const nuevoCarrito = carrito.map((prod) =>
      prod.id === id ? { ...prod, cantidad: Math.max(1, prod.cantidad - 1) } : prod
    );
    setCarrito(nuevoCarrito);
    guardarCarritoEnLocalStorage(nuevoCarrito);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarCarrito, calcularCantidad, calcularTotal, vaciarCarrito, disminuirCantidad, aumentarCantidad, eliminarProducto }}>
      {children}
    </CartContext.Provider>
  )
}
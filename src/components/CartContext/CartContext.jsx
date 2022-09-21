import React from "react";
import { useState , useContext } from "react";
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const limpiarCarrito = () => setCarrito([]);

    const enElCarrito = (id) => carrito.find(producto => producto.id === id) ? true : false;

    const removerProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id));
    
    const agregarProducto = (item, cantidad ) => {
        const nuevoCarrito = carrito.filter (prod => prod.id !== item.id);
        nuevoCarrito.push({...item, cantidad: cantidad});
        setCarrito(nuevoCarrito)
    }
    console.log(carrito)

    return (
        <>
        <CartContext.Provider value={{
           limpiarCarrito,
           enElCarrito,
           removerProducto,
           agregarProducto
        }}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export default CartProvider
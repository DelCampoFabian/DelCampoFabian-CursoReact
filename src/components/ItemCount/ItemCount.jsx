import React from "react";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = (props) => {
    const [contador, setContador] = useState(0);
    const {stock} = props;
    const [productosAgregados, setProductosAgregados] = useState(0)
    const cartelProductos = () => {
        if (productosAgregados > stock) {
            setTimeout(() => {
                setProductosAgregados(0)
                setContador(0)
            }, 1000);
            return "Cantidad no disponible"
        }else return "Agregaste: " + productosAgregados;
    }

    return (
        <div>
            <div className="mt-3 p-2">
                <button className="px-2 contador" onClick={() => {(contador !== 0) ? setContador(contador-1): setContador(contador)}}>-</button> 
                <span className="px-2 contador__numero">{contador}</span>
                <button className="px-2 contador" onClick={() => {(contador < stock) ? setContador( contador+1) : setContador(contador)}}>+</button>
            </div>
            <button className="productos__button" onClick={() => {
                if (productosAgregados <= stock){
                    setProductosAgregados(productosAgregados + contador); 
                }
            }}>Añadir al carrito</button>
            <p className="p-2"> {cartelProductos()}</p>
        </div>  
    )
}

export default ItemCount;
import React from "react";
import { useState } from "react";
import "./ItemCount.css"


const ItemCount = (props) => {
    const [contador, setContador] = useState(0);

    const {stock} = props;

    const [productosAgregados, setProductosAgregados] = useState(0);

    const cartelProductos = () => {
        if (productosAgregados > stock) {
            setTimeout(() => {
                setProductosAgregados(0)
                setContador(0)
            }, 1000);
            return "Cantidad no disponible"
        }else return "Agregaste: " + productosAgregados;
    }
    function Decrementar(){
        (contador !== 0) ? setContador(contador-1): setContador(contador) 
    }
    function Incrementar(){
        (contador < stock) ? setContador( contador+1) : setContador(contador)
    }

    return (
        <div>
            <div className="mt-3 cantidad__productos" >
                <h6 className="cantidad__productos-titulo">Cantidad:</h6>
                <button className="contador" onClick={() => Decrementar()}><i className="fa-solid fa-caret-left"></i></button> 
                <span className="contador__numero">{contador}</span>
                <button className="contador" onClick={() => Incrementar()}><i className="fa-solid fa-caret-right"></i></button>
            </div>
            
            <button className="productos__button" onClick={() => {
                if (productosAgregados <= stock){
                    setProductosAgregados(productosAgregados + contador); 
                    }
                }}>Añadir al carrito
            </button>
            <span className="p-2 productos__agregados"> {cartelProductos()}</span>
        </div>  
    )
}

export default ItemCount;
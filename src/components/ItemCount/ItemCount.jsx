import React from "react";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = (props) => {
    const [contador, setContador] = useState(0);
    const {
        productos
        } = props 
    return (
        <div className="mt-3 p-2">
            <button className="px-2 contador" onClick={() => {(contador != 0) ? setContador(contador-1): setContador(contador)}}>-</button> 
            <span className="px-2 contador__numero">{contador}</span>
            <button className="px-2 contador" onClick={() => {(contador < productos) ? setContador( contador+1) : setContador(contador)}}>+</button>
        </div>
    )
}

export default ItemCount;
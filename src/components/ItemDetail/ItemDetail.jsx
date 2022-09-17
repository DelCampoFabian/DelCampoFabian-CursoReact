import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom"


const ItemDetail = ({detalle}) => {
    const [carrito, setCarrito] = useState(false)
    const irCarrito = () =>{
        setCarrito(true)
    }
    return (
        <div className="row justify-content-around align-items-center my-5 detail__container">
            <div className="col-md-4 detail__img">
                <img src={detalle.imagen} alt={detalle.nombre} className="img-fluid" />
            </div>
            <div className="col-md-8 detail__info">
                <h4>{detalle.nombre}</h4>
                <p className="detail__info-p">{detalle.descripcion}</p>
                <span className="detail__info-span">Precio: ${detalle.precio}</span>
                <span className="detail__info-span">Stock disponible: {detalle.stock}</span>
                {
                    carrito ? 
                    
                    <Link to="/carrito" className="detail__comprar">Comprar</Link> : <ItemCount stock={detalle.stock} carrito={irCarrito}/>
                }
                
                
            </div>  
        </div>
    )
}

export default ItemDetail
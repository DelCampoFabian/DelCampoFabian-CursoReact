import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({detalle}) => {
    return (
        <div className="row justify-content-around align-items-center my-5 detail__container">
            <div className="col-md-4 detail__img">
                <img src={detalle.imagen} alt={detalle.nombre} className="img-fluid" />
            </div>
            <div className="col-md-8 detail__info">
                <h4>{detalle.nombre}</h4>
                <p className="detail-info__p">{detalle.descripcion}</p>
                <span className="detail-info__span">Precio: ${detalle.precio}</span>
                <span className="detail-info__span">Stock: {detalle.stock}</span>
                <ItemCount stock={detalle.stock}/>
            </div>  
        </div>
    )
}

export default ItemDetail
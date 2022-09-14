import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="productos__container">
            <div className="productos">
                <img src={props.imagen} alt={props.nombre} />
                <h5 ><b>{props.nombre}</b></h5>
                <div>
                    <p className="productos__precio">Precio: ${props.precio}</p>
                    <p className="productos__stock">Stock disponible: {(props.stock !== 0) ? [props.stock] : "Sin stock"}</p>
                    <Link to={`/detalle/${props.id}`} className="ver__mas" >Ver detalles</Link>
                </div>
            </div>
        </div>
    )
}


export default Item

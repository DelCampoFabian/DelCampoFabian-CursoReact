import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ nombre, imagen, precio, stock }) => {
    return (

        <div className="productos__container">
            <div className="productos">
                <img src={imagen} alt={nombre} />
                <h5 className=""><b>{nombre}</b></h5>
                <div>
                    <span className="productos__precio">Precio: ${precio}</span>
                    <span className="productos__stock">Stock: {(stock !== 0) ? [stock] : "Sin stock"}</span>
                    <ItemCount stock={stock} />
                </div>
            </div>
        </div>

    )



}


export default Item

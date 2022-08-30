import React from "react";
import "./ItemListContainer.css";



const ItemListContainer = (props) => {
    const {
        productos
    } = props
    return (
        <div className="productos__container">
            {
                productos.map((elemento) => {
                    return  <div className="productos" id={elemento.id}>
                                <img src={elemento.imagen} alt="" />
                                <h5>{elemento.nombre}</h5>
                                <span>${elemento.precio}</span>
                                <button>Añadir al carrito</button>
                            </div>
                })
            }
        </div>
    )
}

export default ItemListContainer
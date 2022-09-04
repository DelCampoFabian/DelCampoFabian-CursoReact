import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";



const ItemListContainer = (props) => {
    const {
        productos
    } = props
    return (
        <div className="productos__container">
            {
                productos.map((elemento) => {
                    return  <div className="productos" id={elemento.id} key={elemento.id}>
                                <img src={elemento.imagen} alt="" />
                                <h5>{elemento.nombre}</h5>
                                <div>
                                    <span className="productos__precio">Precio: ${elemento.precio}</span>
                                    <span className="productos__stock">Stock: {(elemento.stock !== 0) ? [elemento.stock] : "Sin stock"}</span>
                                </div>
                                <ItemCount stock={elemento.stock}/>
                                
                            </div>
                })
            }
            
        </div>
    )
}

export default ItemListContainer
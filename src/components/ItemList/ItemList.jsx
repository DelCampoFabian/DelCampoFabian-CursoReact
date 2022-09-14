import React from "react";
import Item from "../Item/Item";


const ItemList = ({items}) => {
    return (
        <div className="row justify-content-start">
        {items.map(item => (
            <div key={item.id} className="col-md-3">
                <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio} stock={item.stock} id={item.id} />
            </div>)
        )}
    </div>
    )
}

export default ItemList
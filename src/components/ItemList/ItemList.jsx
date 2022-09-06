import React from "react";
import Item from "../Item/Item";


const ItemList = ({items}) => {
    return (
        <div className="row justify-content-evenly">
        {items.map(item => (
            <div key={item.id} className="col-md-4 py-3">
                <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio} stock={item.stock} />
            </div>)
        )}
    </div>
    )
}

export default ItemList
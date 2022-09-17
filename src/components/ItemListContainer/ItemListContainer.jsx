import React from "react";
import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { listaProductos } from "../ListaProductos/ListaProductos";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams()
    useEffect(() => {

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(listaProductos);
            }, 500);
        });
        (categoriaId) ? promesa.then(respuesta => setItems(respuesta.filter(item => item.categoria=== categoriaId ))) : promesa.then(respuesta => setItems(respuesta))
      
    }, [categoriaId]);
    return (
        <>
          <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
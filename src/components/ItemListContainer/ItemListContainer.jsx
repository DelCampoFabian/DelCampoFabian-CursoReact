import React from "react";
import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import "./ItemListContainer.css";
import ProductoUno from "../../assets/img/ProductoUno.png";
import ProductoDos from "../../assets/img/productoDos.jpeg";
import ProductoTres from "../../assets/img/productoTres.jpeg";
import ProductoCuatro from "../../assets/img/productoCuatro.png";
import ProductoCinco from "../../assets/img/productoCinco.jpeg";
import ProductoSeis from "../../assets/img/productoSeis.jpeg";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const listaProductos = [
            { id: 1, nombre: "Conservadora", precio: 3000, imagen: ProductoUno, stock: 8 },
            { id: 2, nombre: "Termo", precio: 3500, imagen: ProductoDos, stock: 5 },
            { id: 3, nombre: "Equipo de mate", precio: 8500, imagen: ProductoTres, stock: 0 },
            { id: 4, nombre: "Caña de pescar", precio: 12550, imagen: ProductoCuatro, stock: 0 },
            { id: 5, nombre: "Conservadora", precio: 6300, imagen: ProductoCinco, stock: 12 },
            { id: 6, nombre: "Carpa", precio: 21500, imagen: ProductoSeis, stock: 10 },
        ]

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(listaProductos);
            }, 2000);
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);
    

    return (
        <div>
          <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
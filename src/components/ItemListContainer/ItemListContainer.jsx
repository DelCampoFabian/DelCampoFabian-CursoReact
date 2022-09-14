import React from "react";
import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ProductoUno from "../../assets/img/ProductoUno.png";
import ProductoDos from "../../assets/img/productoDos.jpeg";
import ProductoTres from "../../assets/img/productoTres.jpeg";
import ProductoCuatro from "../../assets/img/productoCuatro.png";
import ProductoCinco from "../../assets/img/productoCinco.jpeg";
import ProductoSeis from "../../assets/img/productoSeis.jpeg";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams()
    useEffect(() => {
        const listaProductos = [
            { id: 1, nombre: "Conservadora", categoria:"Conservadoras", precio: 3000, descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum qui inventore optio dolorem suscipit sapiente dicta alias, voluptas saepe at molestiae velit culpa sit fuga? Alias, error veritatis", imagen: ProductoUno, stock: 8 },
            { id: 2, nombre: "Termo", categoria:"Termos", precio: 3500, descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum qui inventore optio dolorem suscipit sapiente dicta alias, voluptas saepe at molestiae velit culpa sit fuga? Alias, error veritatis", imagen: ProductoDos, stock: 5 },
            { id: 3, nombre: "Equipo de mate", categoria:"Termos", precio: 8500, descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum qui inventore optio dolorem suscipit sapiente dicta alias, voluptas saepe at molestiae velit culpa sit fuga? Alias, error veritatis", imagen: ProductoTres, stock: 0 },
            { id: 4, nombre: "Caña de pescar", categoria:"Pesca", precio: 12550, descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum qui inventore optio dolorem suscipit sapiente dicta alias, voluptas saepe at molestiae velit culpa sit fuga? Alias, error veritatis", imagen: ProductoCuatro, stock: 0 },
            { id: 5, nombre: "Conservadora", categoria:"Conservadoras", precio: 6300, descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum qui inventore optio dolorem suscipit sapiente dicta alias, voluptas saepe at molestiae velit culpa sit fuga? Alias, error veritatis", imagen: ProductoCinco, stock: 12 },
            { id: 6, nombre: "Carpa", categoria:"Carpas", precio: 21500, descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum qui inventore optio dolorem suscipit sapiente dicta alias, voluptas saepe at molestiae velit culpa sit fuga? Alias, error veritatis", imagen: ProductoSeis, stock: 10 },
        ];

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(listaProductos);
            }, 500);
        });
        (categoriaId) ? promesa.then(respuesta => setItems(respuesta.filter(item => item.categoria=== categoriaId ))) : promesa.then(respuesta => setItems(respuesta))
      
    }, [categoriaId]);
    return (
        <div>
          <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
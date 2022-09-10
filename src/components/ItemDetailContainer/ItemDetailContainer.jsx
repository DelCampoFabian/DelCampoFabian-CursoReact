import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductoCuatro from "../../assets/img/productoCuatro.png";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    useEffect(() => {
     const detalleProducto = {
        nombre: "Caña de pesca",
        precio: 12550,
        descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum qui inventore optio dolorem suscipit sapiente dicta alias, voluptas saepe at molestiae velit culpa sit fuga? Alias, error veritatis",
        imagen : ProductoCuatro,  
        stock : 4
     }   
    
    const promesaDetalle = new Promise((resolve) => {
        setTimeout(()=>{
            resolve(detalleProducto)
        },2000)
    })
    promesaDetalle.then ((respuesta) => {
        setDetalle(respuesta)
    })
    
    },[])

    return (
        <div>
            <ItemDetail detalle = {detalle}/>
        </div>
    )
}

export default ItemDetailContainer
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { listaProductos } from "../ListaProductos/ListaProductos";


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState()
    const {detalleId} = useParams()

    useEffect(() => {
        
    const promesaDetalle = new Promise((resolve) => {
        setTimeout(()=>{
            resolve(listaProductos)
        },500)
    })
    promesaDetalle.then ((respuesta) => {
        setDetalle(respuesta.find((item) => item.id === parseInt(detalleId)))
    })
    
    },[detalleId])

    return (
        <div>
            {
            detalle &&   
            <ItemDetail detalle = {detalle}/>   
            }
           
            
        </div>
    )
}

export default ItemDetailContainer
//import './CategoryContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import React, {useState, useEffect} from 'react'

import arregloProductos from "../../DataBase/baseDatos"

function CategoryContainer(prop) {

    const {producto} = useParams();

    const [items, setItems] = useState([])

    const obtenerProductos = () => {
        return new Promise( (resolve, reject) => {
            resolve(arregloProductos);
        } );
    }
  

    useEffect( () => {
        const funcionAsincronica = async() => {
            try{
                const listado = await obtenerProductos()
                const listadoFiltrado = listado.filter(item => item.categoria === producto)
                setItems(listadoFiltrado)
                //console.log(listado)
            } catch( error ){
                console.log('hubo un error')
            }
        }
        funcionAsincronica()
    },[producto])




    return (
        <div className="catalogo">
            <ItemList lista={items}/>
        </div>
    );
  }
  
  export default CategoryContainer;
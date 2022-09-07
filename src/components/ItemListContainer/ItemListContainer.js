import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import React, {useState, useEffect} from 'react'

import arregloProductos from "../../DataBase/baseDatos"


function ItemListContainer(prop) {

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
                setItems(listado)
            } catch( error ){
                console.log('hubo un error')
            }
        }
        funcionAsincronica()
    },[])




    return (
        <div className="catalogo">
            <ItemList lista={items}/>
        </div>
    );
  }
  
  export default ItemListContainer;
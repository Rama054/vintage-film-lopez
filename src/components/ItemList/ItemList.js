//import { Children } from 'react';
import './ItemList.css'
import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'



import rollo from '../../img/rollo.jpg'
import correa from '../../img/correa.jpg'
import canon from '../../img/canon.jpg'



const arregloProductos = [
    {
        id: '0001',
        titulo: 'Rollo Kodak Ultra Max',
        descripcion: 'Rollo a color Kodak Ultra Max 24exp',
        precio: 1000,
        img: rollo
    },
    {
        id: '0002',
        titulo: 'Camara analogica Canon AE-1',
        descripcion: 'Camara analogica',
        precio: 5000,
        img: canon
    },
    {
        id: '0003',
        titulo: 'Correa vintage - Celeste',
        descripcion: 'Correa celeste vintage',
        precio: 500,
        img: correa
    },
]






function ItemList() {

    const [items, setItems] = useState([])

    const obtenerProductos = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(arregloProductos);
            },2000);
        } );
    }

   

    useEffect( () => {
        const funcionAsincronica = async() => {
            try{
                const listado = await obtenerProductos()
                setItems(listado)
                console.log(listado)
            } catch( error ){
                console.log('hubo un error')
            }
        }
        funcionAsincronica()
    },[])



    return (
        <div className="lista">
            {
                items.map( (item) => {
                    return(
                        <Item item={item} key={item.id}/>
                    );
                })
            }
            
        </div>
    );
  }
  
  export default ItemList;
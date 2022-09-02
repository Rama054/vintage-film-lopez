import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

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
        descripcion: 'Camara analogica canon de 1975 en perfecto estado',
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

const getItem = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(arregloProductos);
        },2000);
    } );
}


function ItemDetailContainer(){

    const [detailItems, setDetailItems] = useState([])

    useEffect( () => {
        const funcionAsincronica = async() => {
            try{
                const listado = await getItem()
                setDetailItems(listado)
                
            } catch( error ){
                console.log('hubo un error')
            }
        }
        funcionAsincronica()
        
    },[])



    return (
        <div className="itemDetail">
            {
                detailItems.length > 0 && 
                    <ItemDetail details={detailItems[1]}/> 
            }
        </div>
    );
}






export default ItemDetailContainer;
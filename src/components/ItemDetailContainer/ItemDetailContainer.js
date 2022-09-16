import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"

import arregloProductos from "../../DataBase/baseDatos"

const getItem = () => {
    return new Promise( (resolve, reject) => {
        resolve(arregloProductos);
    } );
}


function ItemDetailContainer(){
    const {idItem} = useParams();

    const [detailItem, setDetailItem] = useState([])

    useEffect( () => {
        const funcionAsincronica = async() => {
            try{
                const listado = await getItem()
                var ItemFiltrado = listado.filter(item => item.id === idItem)
                setDetailItem(ItemFiltrado[0])
                
            } catch( error ){
                console.log('hubo un error')
            }
        }
        funcionAsincronica()
        
    },[idItem])



    return (
        <div className="itemDetail">
             <ItemDetail details={detailItem}/>         
        </div>
    );
}






export default ItemDetailContainer;
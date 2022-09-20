import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getDoc, doc} from 'firebase/firestore'
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"

import db from '../../DataBase/bdFireBase'


function ItemDetailContainer(){
    const {idItem} = useParams();

    const [detailItem, setDetailItem] = useState([])

    useEffect(()=>{
        async function getData(){
            const query = doc(db,"items",idItem);
            let respuesta = await getDoc(query)
            const producto = {
                ...respuesta.data(),
                id: respuesta.id
            }
            setDetailItem(producto)
        }
        getData()
    },[idItem])


    return (
        <div className="itemDetail">
             <ItemDetail details={detailItem}/>         
        </div>
    );
}






export default ItemDetailContainer;
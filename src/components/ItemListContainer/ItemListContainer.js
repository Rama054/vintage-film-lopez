import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import React, {useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import db from '../../DataBase/bdFireBase'

function ItemListContainer(prop) {

    const [items, setItems] = useState([])

    useEffect(()=>{
        async function getData(){
            const query = collection(db,"items");
            let respuesta = await getDocs(query)
            const docs = respuesta.docs
            const data = docs.map(doc => {return {...doc.data(), id: doc.id}})
            setItems(data)
        }
        getData()
    },[])



    return (
        <div className="catalogo">
            <ItemList lista={items}/>
        </div>
    );
  }
  
  export default ItemListContainer;
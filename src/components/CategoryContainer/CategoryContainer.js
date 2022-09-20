//import './CategoryContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import {collection, query, getDocs, where} from 'firebase/firestore'
import db from '../../DataBase/bdFireBase'

//import arregloProductos from "../../DataBase/baseDatos"


function CategoryContainer(prop) {

    const {producto} = useParams();

    const [items, setItems] = useState([])

    useEffect(()=>{
        async function getData(){
            const consulta = query(
                collection(db,"items"),
                where("categoryId","==",producto)
            );
            getDocs(consulta).then((item)=>{
                if(item.size==0)
                    console.log('no results')
                setItems(item.docs.map((doc)=>({id:doc.id, ...doc.data()})))
            }) 
        }
        getData()
    },[producto])



    return (
        <div className="catalogo">
            <ItemList lista={items}/>
        </div>
    );
  }
  
  export default CategoryContainer;
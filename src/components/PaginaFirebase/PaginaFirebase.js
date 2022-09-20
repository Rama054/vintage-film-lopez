import React, { useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
import { useEffect } from "react";
import db from '../../DataBase/bdFireBase'


function PaginaFirebase(){
    const [Productos,setProductos] = useState([])

    useEffect(()=>{
        async function getData(){
            const query = collection(db,"items");
            let respuesta = await getDocs(query)
            const docs = respuesta.docs
            const data = docs.map(doc => {return {...doc.data(), id: doc.id}})
            setProductos(data)
        }
        getData()
    },[])

    return(
        <div>PaginaFirebase</div>
    )
}

export default PaginaFirebase;
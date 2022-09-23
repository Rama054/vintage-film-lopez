import React, {useState} from 'react'
import './itemCount.css'
import menos from '../../img/signo-menos.png'
import mas from '../../img/signo-mas.png'



function ItemCount({obtenerValor,stock,initial}){
    const [cantidad,setCantidad] = useState(initial)

    function onAdd(operando){
        if((cantidad + operando) <= stock && (cantidad+operando) >= initial)
            setCantidad(cantidad+operando)
    }

    function carrito(){
        obtenerValor(cantidad)
    }


    return(
        <div className="ItemCount">
            <div className="count">{cantidad}</div>
            <div className="controllerContainer">
                <div className="buttom" onClick={() => onAdd(-1)}>
                    <img src={menos} alt="" />
                </div>
                <div className="buttom" onClick={() => onAdd(+1)}>
                    <img src={mas} alt="" />
                </div>
            </div>
            
            <div onClick={carrito} className="addCart">
                <span className="textCart">Agregar al carrito</span>
            </div>
        </div>
    )

}

export default ItemCount
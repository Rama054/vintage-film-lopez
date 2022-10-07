import './Modal.css'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


function Modal({idOrden}){
    const {clearCart} = useContext(CartContext)
    return(
        <div className="overlay">
            <div className="alerta">
                <div className="alertaHeader">
                    <span>Orden de compra generada!</span>
                </div>
                <div className="alertaBody">
                    <span>Su orden de compra es: {idOrden}</span>
                    <Link onClick={clearCart()} className='btn-volver' to="/">
                        <span>Volver a la tienda</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal;
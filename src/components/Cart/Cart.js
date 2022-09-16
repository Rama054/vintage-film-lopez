import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import './Cart.css'
import trashBin from '../../img/icons/trashBin.svg'
import { Link } from "react-router-dom"

function Cart() {

    const {productCartList} = useContext(CartContext)
    console.log(productCartList)

    function calcularTotal(){
        let acumulador = 0 
        for( let producto of productCartList){
            acumulador += producto.precio*producto.cantidad
        }
        return acumulador
    }

    function cartEmpty(){
        return productCartList.length === 0 ? true : false
    }
    
    return (
        <>
            <p>CARRITO DE COMPRA</p>
            <div className = "carrito">

                <div style={{ display: !cartEmpty() ? 'none' : 'block' }}>
                    <h1>Aun no tenes productos agregados en el carrito</h1>
                    <Link to="/">
                        Volver a la tienda
                    </Link>
                </div>
                
                {
                    productCartList.map(item => (
                            <div className="articulo">
                                <img className="imgProductCarrito" src={item.img} alt="" />
                                <span className="productoNombre">{item.titulo}</span>
                                <span className="cantidad">{item.cantidad}</span>
                                <span className="cantidad">${item.precio*item.cantidad}</span>
                                <img className="trashIcon" src={trashBin} alt="Eliminar Item" />
                            </div>
                    ))
                }

                <h1 style={{ display: cartEmpty() ? 'none' : 'block' }}
                    className="precioTotal">Total: ${calcularTotal()}</h1>





            </div>
        </>
    );
  }
  
  export default Cart;
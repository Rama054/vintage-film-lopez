import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


function Cart() {

    const {productCartList} = useContext(CartContext)
    console.log(productCartList)
    return (
        <div className="carrito">
            <p>CARRITO DE COMPRA</p>
            {
                productCartList.map(item => (
                    <p>{item.titulo} - {item.cantidad}</p>                    
                ))
            }
        </div>
    );
  }
  
  export default Cart;
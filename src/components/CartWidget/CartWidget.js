import './CartWidget.css'
import carrito from '../../img/icons/carrito.svg'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

function CartWidget() {
    const {productCartList} = useContext(CartContext)

    function calcularCantidad(){
        let acumulador = 0 
        for( let producto of productCartList){
            acumulador += producto.cantidad
        }
        return acumulador
    }

    function cartEmpty(){
        return productCartList.length === 0 ? true : false
    }

    return (
        <div className='carrito-compra' style={{ display: cartEmpty() ? 'none' : 'block'  }}>
            <img src={carrito} alt="" />
            <div className="bubbleCount">
                <span>{calcularCantidad()}</span>
            </div>
        </div>
    );
  }
  
  export default CartWidget;
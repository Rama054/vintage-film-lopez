import './CartWidget.css'
import carrito from '../../img/icons/carrito.svg'

function CartWidget() {
    return (
        <div className='carrito-compra'>
            <img src={carrito} alt="" />
        </div>
    );
  }
  
  export default CartWidget;
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import './Cart.css'
import trashBin from '../../img/icons/trashBin.svg'
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom"

function Cart() {

    const {productCartList, removeProduct, clearCart} = useContext(CartContext)

    function calcularTotal(){
        let acumulador = 0 
        for( let producto of productCartList){
            acumulador += producto.price*producto.cantidad
        }
        return acumulador
    }

    function cartEmpty(){
        return productCartList.length === 0 ? true : false
    }



    function sendOrder(e){
        e.preventDefault();
        const fecha = new Date();

        const order = {
            buyer:{
                name: e.target[0].value,
                email: e.target[1].value,
                phone: e.target[2].value
            },
            items: productCartList.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price
                }
            }),
            date: fecha.toLocaleString(),
            total: calcularTotal()
        }
        console.log(order)
        const db = getFirestore();
        
        const ordersCollections = collection(db,"orders")
        addDoc(ordersCollections,order).then(({id}) => alert("ID de orden",id)) 
    }



    




    
    return (
        <>
        {
            cartEmpty() ?
            
            <div className="vistaCarritoVacio">
                <h1>Aun no tenes productos agregados en el carrito</h1>
                <Link to="/">
                    <span className="retornarTienda">
                        Volver a la tienda
                    </span>
                </Link>
            </div>

            :
            <div className="cartWrapper">
                <div className = "carrito">
                
                    {
                        productCartList.map(item => (
                            <div key={item.id} className="articulo">
                                <img className="imgProductCarrito" src={item.imageId} alt="" />
                                <span className="productoNombre">{item.title}</span>
                                <span className="cantidad">{item.cantidad}</span>
                                <span className="cantidad">${item.price*item.cantidad}</span>
                                <img onClick={ ()=> {removeProduct(item.id)} } className="trashIcon" src={trashBin} alt="Eliminar Item" />
                            </div>
                        ))
                    }

                    <h1 style={{ display: cartEmpty() ? 'none' : 'block' }}
                        className="precioTotal">Total: ${calcularTotal()}</h1>

                    <span className="vaciar" style={{ display: cartEmpty() ? 'none' : 'block' }}
                            onClick={ ()=> {clearCart()} }>Vaciar carrito</span>

                        
                </div>
                <div className="formulario">
                    <span>Registrate!</span>
                    <form onSubmit={sendOrder} action="">
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Nombre"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Email"/>
                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" id="telefono" placeholder="Telefono"/>
                        </div>
                        <input type="submit" value="Comprar!" />
                    </form>
                </div>
            </div>


        }
        </>




            

        
    );
  }
  
  export default Cart;
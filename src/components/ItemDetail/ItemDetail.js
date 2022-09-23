import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link } from "react-router-dom"
import { useState } from 'react';

function ItemDetail({details}) {

    const {addProduct} = useContext(CartContext)
    const [cantidadSolicitada, setcantidadSolicitada] = useState(0)

    const obtenerCantidad = (cantidad) => {
        const newProduct = {...details, cantidad: cantidad}
        addProduct(newProduct)
        setcantidadSolicitada(cantidad)
    }


    return (
        <div className="item-detail">
            <img className="img-articulo-detail" src={details.imageId} alt="foto" />
            <div className="data-articulo-detail">
                <h1 className="titulo-articulo-detail">{details.title}</h1>
                <p className="descrip-articulo-detail">{details.description}</p>
                <h5 className="precio-articulo-detail">${details.price}</h5>
            
            {cantidadSolicitada === 0 
                ?   <ItemCount obtenerValor={obtenerCantidad} stock={details.stock} initial={1}/>
                :   <div className="botonesComprar">
                        <Link to="/">
                            <span className='seguir'>Seguir Comprando</span> 
                        </Link>
                        <Link to="/cart">
                            <span className='terminar'>Terminar Compra</span>                            
                        </Link>
                    </div>
            }

            </div>

        </div> 
    );
  }
  
  export default ItemDetail;
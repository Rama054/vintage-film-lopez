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
        setcantidadSolicitada(cantidadSolicitada)
    }

    



    return (
        <div className="item-detail">
            <img className="img-articulo-detail" src={details.img} alt="foto" />
            <div className="data-articulo-detail">
                <h1 className="titulo-articulo-detail">{details.titulo}</h1>
                <p className="descrip-articulo-detail">{details.descripcion}</p>
                <h5 className="precio-articulo-detail">${details.precio}</h5>
            </div>
            <ItemCount style={{ display: cantidadSolicitada === 0 ? 'none' : 'block'}}
                       obtenerValor={obtenerCantidad} stock={10} initial={1}/>
            <div 
                style={{ display: cantidadSolicitada > 0 ? 'block' : 'none'}}
                className="botonesComprar">
                <Link to="/">
                    Seguir Comprando
                </Link>
                <Link to="/cart">
                    Terminar Compra
                </Link>
            </div>
        </div> 
    );
  }
  
  export default ItemDetail;
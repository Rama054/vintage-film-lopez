import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({details}) {

    const {addProduct} = useContext(CartContext)


    const obtenerCantidad = (cantidad) => {
        const newProduct = {...details, cantidad: cantidad}
        addProduct(newProduct)
    }



    return (
        <div className="item-detail">
            <img className="img-articulo-detail" src={details.img} alt="foto" />
            <div className="data-articulo-detail">
                <h1 className="titulo-articulo-detail">{details.titulo}</h1>
                <p className="descrip-articulo-detail">{details.descripcion}</p>
                <h5 className="precio-articulo-detail">${details.precio}</h5>
            </div>
            <ItemCount obtenerValor={obtenerCantidad} stock={10} initial={1}/>
        </div> 
    );
  }
  
  export default ItemDetail;
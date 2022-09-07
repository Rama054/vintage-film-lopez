
import './ItemDetail.css'

function ItemDetail({details}) {
    return (
        <div className="item-detail">
            <img className="img-articulo-detail" src={details.img} alt="foto" />
            <div className="data-articulo-detail">
                <h1 className="titulo-articulo-detail">{details.titulo}</h1>
                <p className="descrip-articulo-detail">{details.descripcion}</p>
                <h5 className="precio-articulo-detail">${details.precio}</h5>
            </div>
            
        </div> 
    );
  }
  
  export default ItemDetail;
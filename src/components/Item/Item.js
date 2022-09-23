import './Item.css'
import { Link } from "react-router-dom"

const estilos = {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    justifyContent:'center',
}

function Item({item}) {
    return (
        <div className="item">
            <Link to={'/item/'+item.id}>
                <img className="img-articulo" src={item.imageId} alt="foto" />
                <div className="data-articulo">
                    <span className="titulo-articulo">{item.title}</span>
                    <span className="descrip-articulo">{item.description}</span>
                </div>
            </Link>
            <div style={estilos}>
                <span className="precio-articulo">${item.price}</span>
            </div>
        </div>
    );
  }
  
  export default Item;
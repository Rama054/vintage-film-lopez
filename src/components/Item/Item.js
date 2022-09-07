import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
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
                <img className="img-articulo" src={item.img} alt="foto" />
                <div className="data-articulo">
                    <span className="titulo-articulo">{item.titulo}</span>
                    <span className="descrip-articulo">{item.descripcion}</span>
                </div>
            </Link>
            <div style={estilos}>
                <span className="precio-articulo">${item.precio}</span>
                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
    );
  }
  
  export default Item;
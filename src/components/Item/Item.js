import './Item.css'

function Item({item}) {
    return (
        <div className="item">
            <img className="img-articulo" src={item.img} alt="foto" />
            <div className="data-articulo">
                <h1 className="titulo-articulo">{item.titulo}</h1>
                <p className="descrip-articulo">{item.descripcion}</p>
                <h5 className="precio-articulo">${item.precio}</h5>
                {/* <p className="id-articulo">{item.id}</p> */}
            </div>
        </div>
    );
  }
  
  export default Item;
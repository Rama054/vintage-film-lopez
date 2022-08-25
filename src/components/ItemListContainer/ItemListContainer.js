import { Children } from 'react';
import './ItemListContainer.css'

function ItemListContainer(prop) {
    return (
        <div className="catalogo">
            {prop.children}
        </div>
    );
  }
  
  export default ItemListContainer;
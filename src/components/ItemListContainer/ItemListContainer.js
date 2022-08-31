import { Children } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(prop) {
    return (
        <div className="catalogo">
            <ItemList/>
        </div>
    );
  }
  
  export default ItemListContainer;
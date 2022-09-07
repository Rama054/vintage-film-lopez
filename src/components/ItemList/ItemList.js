//import { Children } from 'react';
import './ItemList.css'

import Item from '../Item/Item'



function ItemList({lista}) {

    



    return (
        <div className="lista">
            {
                lista.map( (item) => {
                    return(
                        <Item item={item} key={item.id}/>                        
                        
                    );
                })
            }
            
        </div>
    );
  }
  
  export default ItemList;
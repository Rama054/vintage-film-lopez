import { useState } from "react";
import {createContext} from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    
    const [productCartList,setProductCartList] = useState([])
    
    const addProduct = (product) => {
        if(!isInCart(product.id)){
            const newList = [...productCartList,product]
            setProductCartList(newList)
        }else{
            alert('producto duplicado')
        }
    }

    function isInCart(id){
        return productCartList.find( item => id === item.id)
    }


    return(
        <CartContext.Provider value={{productCartList, addProduct }}>
            {children}
        </CartContext.Provider>
    )
}





export default CartProvider;



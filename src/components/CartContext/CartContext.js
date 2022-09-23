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
    
    const removeProduct = (product) =>{
        //const copyArray = [...productCartList]
        const newList = productCartList.filter( item => item.id !== product)
        setProductCartList(newList)
    }

    const clearCart = () =>{
        setProductCartList([])
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}





export default CartProvider;



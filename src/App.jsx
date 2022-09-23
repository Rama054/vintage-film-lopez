import React from 'react'
import NavBar from "./components/navBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CategoryContainer from './components/CategoryContainer/CategoryContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './components/CartContext/CartContext'
import Cart from './components/Cart/Cart'
import PaginaFirebase from './components/PaginaFirebase/PaginaFirebase'
import CrearDocumento from './components/PaginaFirebase/crearDocumento'
import "./App.css"

import { BrowserRouter, Routes, Route} from "react-router-dom"



function App() {

  



  return (
    <BrowserRouter>
    
      <CartProvider>
        <div className="App">
          <NavBar/>       
          {/* <ItemDetailContainer/> */}
        </div>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:producto" element={<CategoryContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/firebase' element={<PaginaFirebase/>}></Route>
          <Route path='/crearDocumento' element={<CrearDocumento/>}></Route>
        </Routes>
      </CartProvider>
      
    
    
    </BrowserRouter>
  );
}

export default App;

import NavBar from "./components/navBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CategoryContainer from './components/CategoryContainer/CategoryContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import "./App.css"

import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    

      <div className="App">
        <NavBar/>       
        {/* <ItemDetailContainer/> */}
      </div>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:producto" element={<CategoryContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;

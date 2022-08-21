import NavBar from "./components/navBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer getting="Catalogo de la tienda aca"/>
    </div>
  );
}

export default App;

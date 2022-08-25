import NavBar from "./components/navBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
        <ItemCount stock={10} initial={1}/>
        <ItemCount stock={50} initial={1}/>
        <ItemCount stock={20} initial={1}/>
      </ItemListContainer>
    </div>
  );
}

export default App;

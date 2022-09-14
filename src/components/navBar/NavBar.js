import './NavBar.css'
import logo from '../../img/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

function NavBar() {
    return (    
        <header>
            <nav className="navegation-bar">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo tienda" />
                </Link>                
                <ul className='list-item'>
                    <Link to="/">
                        <li className='nav-item'>Inicio</li>
                    </Link>
                    <Link to="/category/films">
                        <li className='nav-item'>Films</li>
                    </Link>
                    <Link to="/category/camaras">
                        <li className='nav-item'>Camaras</li>
                    </Link>
                    <Link to="/category/lentes">
                        <li className='nav-item'>Lentes</li>
                    </Link>
                    <Link to="/">
                        <li className='nav-item'>Contacto</li>
                    </Link>
                </ul>
                <Link to={'/cart'}>
                    <CartWidget/>
                </Link>
            </nav>
        </header> 
        
    );
  }
  
  export default NavBar;
import './NavBar.css'
import logo from '../../img/logo.png'

function NavBar() {
    return (
        <header>
            <nav className="navegation-bar">
                <img className="logo" src={logo} alt="logo tienda" />
                <ul className='list-item'>
                    <li className='nav-item'><a href="#">Inicio</a></li>
                    <li className='nav-item'><a href="#">Films</a></li>
                    <li className='nav-item'><a href="#">Camaras</a></li>
                    <li className='nav-item'><a href="#">Lentes</a></li>
                    <li className='nav-item'><a href="#">Contacto</a></li>
                </ul>  
            </nav>
        </header>
    );
  }
  
  export default NavBar;
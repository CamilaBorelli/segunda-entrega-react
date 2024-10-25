import "./NavBar.css";
import logo from '../../assets/fotologo.jpg';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {

    return (
        <>
            <nav className="nav">
                <div>
                    <img className="logo" src={logo} alt="imagen de logo" />
                    <button><NavLink to={'/'} className="boton">Inicio</NavLink></button>
                </div>
                <div>
                    <button><NavLink to={'category/maceta'} className="boton">Macetas</NavLink></button>
                    <button><NavLink to={'category/interior'} className="boton">Interior</NavLink></button>
                    <button><NavLink to={'category/exterior'} className="boton">Exterior</NavLink></button>
                </div>
                <div className="nav-section">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}
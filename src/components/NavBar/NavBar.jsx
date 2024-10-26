import "./NavBar.css";
import logo from '../../assets/fotologo.jpg';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {

    return (
        <>
            <nav className="nav">
                <div>
                    <NavLink to={'/'}>
                        <img className="logo" src={logo} alt="imagen de logo" />
                    </NavLink>
                </div>
                <div>
                    <button className="boton"><NavLink to={'category/maceta'} className="botonLink">Macetas</NavLink></button>
                    <button className="boton"><NavLink to={'category/interior'} className="botonLink">Interior</NavLink></button>
                    <button className="boton"><NavLink to={'category/exterior'} className="botonLink">Exterior</NavLink></button>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}
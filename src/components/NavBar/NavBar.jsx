import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

import logo from "../../assets/logo-BelleOr.png";

function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo de Belle Or" />
            <div className="categories">
                <ul>
                    <li>Anillos</li>
                    <li>Cadenitas</li>
                    <li>Pulseras</li>
                    <li>Aros</li>
                    <li>Conjuntos</li>
                </ul>
            </div>
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar
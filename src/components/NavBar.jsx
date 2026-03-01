import CartWidget from "./CartWidget"
import './NavBar.css'

import logo from "../assets/logo-BelleOr.png";

function NavBar({categoriesNav}) {
    return(
        <div className="navbar">
            <img src={logo} alt="Logo de Belle Or" />
            <div className="categories">
                 <ul>
                    {categoriesNav.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            </div>
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar
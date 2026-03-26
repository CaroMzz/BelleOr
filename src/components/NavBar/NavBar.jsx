import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-BelleOr.png";

function NavBar({ categories }) {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo de Belle Or" />
      <div className="categories">
        <ul>
          <li>
            <Link to="/">Todas</Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <CartWidget></CartWidget>
    </div>
  );
}

export default NavBar;

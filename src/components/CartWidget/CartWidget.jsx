import "./CartWidget.css";
import carrito from "../../assets/icono-Carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getCartQuantity } = useContext(CartContext);
  const quantity = getCartQuantity();

  return (
    <Link to="/cart">
      <div className="cart">
        <img src={carrito} alt="Icono del carrito de compras" />
        <p>{quantity}</p>
      </div>
    </Link>
  );
}

export default CartWidget;

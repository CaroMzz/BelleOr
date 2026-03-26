import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Cart({ cart, total }) {
  const { removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p className="empty">El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="desc">{item.description}</p>

                  <p>
                    <strong>Precio:</strong> ${item.price}
                  </p>
                  <p>
                    <strong>Cantidad:</strong> {item.count}
                  </p>
                  <p>
                    <strong>Subtotal:</strong> {item.price * item.count}
                  </p>
                </div>

                <div className="cart-actions">
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="total">Total: ${total}</h3>

          <div className="cart-buttons">
            <button onClick={clearCart} className="clear-btn">
              Vaciar carrito
            </button>

            <Link
              to="/checkout"
              onClick={() => toast.success("Redirigiendo al checkout 🛒")}
            >
              <button className="checkout-btn">Ir al checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

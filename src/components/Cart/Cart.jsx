import "./Cart.css";

function Cart({ cart, total }) {
  return (
    <div className="cart-container">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p className="empty">El carrito está vacío</p>) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-card">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-img"
                />

                <div className="cart-info">
                  <h3>{item.title}</h3>
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
              </div>
            ))}
          </div>

          <h3 className="total">Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;

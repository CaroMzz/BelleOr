import { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeOrderId = Math.random().toString(36).substring(2, 9);
    setOrderId(fakeOrderId);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {orderId ? (
        <div className="success">
          <h6>¡Tu compra fue realizada con éxito!</h6>
          <p>ID de orden: {orderId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={formData.lastname}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type="submit">Finalizar compra</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;

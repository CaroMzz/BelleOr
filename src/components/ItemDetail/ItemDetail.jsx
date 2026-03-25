import { useState } from "react";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-detail">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      <div>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>

      <button onClick={() => console.log("Agregar", count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;

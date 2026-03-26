import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCount({ product }) {
  const [count, setCount] = useState(1);

  const {addToCart} = useContext(CartContext)

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
      setCount(count - 1);
  };
  const handleAddToCart = () => {
    addToCart({...product, count})
  };

  return (
    <div>
      <button onClick={handleDecrease} disabled ={count === 1}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>

      <button onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import toast from 'react-hot-toast'

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
    toast.success('Se agregó el producto al carrito')
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
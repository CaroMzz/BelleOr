import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/cart";

function CartContainer() {
  const { cart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  return <Cart cart={cart} total={getTotalPrice()} />;
}

export default CartContainer;

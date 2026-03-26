import { CartContext } from "./CartContext";
import { useState } from 'react'

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const isInCart = (product) => cart.some(element => element.id === product.id)

  const addToCart = (product) => {
    if(!isInCart(product)){
      setCart([...cart, product])
    } else{
      const copyCart = cart.map(element => {
        if(element.id === product.id) return{...element, count: element.count + product.count}
        return{element}
      })

      setCart(copyCart)
    }
  }

  const getCartQuantity = () => {
    const total = cart.reduce((acc, current) => acc + current.count,0)
    return total
  }

  return (
    <CartContext.Provider value = {{ cart, addToCart, getCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider

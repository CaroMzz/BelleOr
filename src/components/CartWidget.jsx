import './CartWidget.css'

import carrito from '../assets/icono-Carrito.png'

function CartWidget() {
    return(
        <div className="cart">
            <img src={carrito} alt="Icono del carrito de compras" />
            <p>0</p>
        </div>
    )
}

export default CartWidget
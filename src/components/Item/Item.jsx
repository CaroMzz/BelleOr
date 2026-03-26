import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <div className="Card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>

      <Link to={`/item/${product.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
}

export default Item;

import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="Card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Stock: {product.stock}</p>
      <p>Precio: ${product.price}</p>

      <Link to={`/item/${product.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
}

export default Item;
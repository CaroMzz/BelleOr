import { Link } from "react-router-dom";

function ItemList({ products }) {
  return (
    <div>
        {products.map((product) => (
            <div className="Card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Stock: {product.stock}</p>
                <p>Precio: {product.price}</p>
                <Link to={`/item/${product.id}`}>
                    <button>Ver más</button>
                </Link>
            </div>
        ))}
    </div>
  );
}

export default ItemList;

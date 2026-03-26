import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'

function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      <ItemCount product={product} />
    </div>
  );
}

export default ItemDetail

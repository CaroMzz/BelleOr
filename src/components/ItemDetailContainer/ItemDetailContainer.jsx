import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, [itemId]);

  return (
    <>
      {product && <ItemDetail product={product} />}
    </>
  );
}

export default ItemDetailContainer;
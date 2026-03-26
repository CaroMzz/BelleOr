import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDetail } from "../../firebase/db";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
      getDetail(itemId)
      .then(detail =>setProduct(detail) )
  }, [itemId]);

  return (
    <>
      {product && <ItemDetail product={product} />}
    </>
  );
}

export default ItemDetailContainer;
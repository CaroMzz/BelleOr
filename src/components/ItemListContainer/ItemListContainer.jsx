import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategories } from "../../firebase/db";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      getProductsByCategories(categoryName).then((prods) => setProducts(prods));
    } else {
      getProducts().then((prods) => setProducts(prods));
    }
  }, [categoryName]);

  return <ItemList products={products} />;
}

export default ItemListContainer;

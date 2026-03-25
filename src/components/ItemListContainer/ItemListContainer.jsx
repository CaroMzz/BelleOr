import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let url = "https://dummyjson.com/products";

    if (categoryName) {
      url = `https://dummyjson.com/products/category/${categoryName}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [categoryName]);

  return <ItemList products={products} />;
}

export default ItemListContainer;

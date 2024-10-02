import { useEffect } from "react";
import { useState } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProductsCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {

    if (categoryId) {
      const filteredProducts = getProductsCategory(categoryId);
      setProducts(filteredProducts);

    } else {
      getProducts.then(data => setProducts(data));
    }
  }, [categoryId]);

  return (
    <>
      <h1>Todos los productos</h1>
      <div className="Card">
        <ItemList products={products} />;
      </div>
    </>
  );
}
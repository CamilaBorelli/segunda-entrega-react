import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { getProducts } from "../../asyncMock";


export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        {products.map((products) => (
          <Item key={products.id} products={products} />
        ))}
      </div>
    </>
  );
}
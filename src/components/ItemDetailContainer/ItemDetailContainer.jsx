import { useEffect, useState } from "react";
import { getProductsId } from '../../asyncMock';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { id } = useParams()

  useEffect(() => {
    getProductsId(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error al recuperar el producto:", error));
  }, [id]);

  return (
    <section>
      <ItemDetail key={product.id} products={product} />
    </section>
  );
}


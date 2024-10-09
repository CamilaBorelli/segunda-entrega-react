import { useEffect, useState } from "react";
import { getProductsId } from '../../asyncMock';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
  const [product] = useState(null);

  const {itemId} = useParams()

  useEffect(() => {
    getProductsId(itemId)
  }, [itemId]);

  return (
    <section>
      <ItemDetail key={product.id} products={product} />
    </section>
  );
}

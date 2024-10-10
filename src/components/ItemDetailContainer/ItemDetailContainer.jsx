import { useEffect, useState } from "react";
import { getProductsId } from '../../asyncMock';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const {id} = useParams()

  useEffect(() => {
    setProduct(getProductsId(id));
  }, [id]);

if (product === null) return <>Cargando...</>

  return (
    <section>
      <ItemDetail key={product.id} product={product} />
    </section>
  );
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../firebase/firebase"; 
import ItemDetail from "../ItemDetail/ItemDetail"; 


export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getOneProduct(id);
        if (productData) {
          setProduct(productData);
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (product === null) return <>Cargando...</>

  return (
    <>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </>
  );
}

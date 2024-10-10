import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

export default function ProductsList({product}) {
const {title, price, categoryId, img, description} = product;

  
  return (
    <>
      <article className="detalle">
        <h4>{title}</h4>
        <p>{categoryId}</p>
        <img src={img} alt={title} className="detalleImg" />
        <p className="parrafo">Descripción: {description}</p>
        <p>$ {price}</p>
        <ItemCount min={0} max={6} />
      </article>
    </>
  );
}
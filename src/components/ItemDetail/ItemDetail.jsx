import ItemCount from '../ItemCount/ItemCount';

export default function ProductsList({product}) {
const {title, price, categoryId, img, description} = product;

  
  return (
    <>
      <article className="">
        <h4>{title}</h4>
        <p>{categoryId}</p>
        <img src={img} alt={title} className="" />
        <p>Descripción: {description}</p>
        <p>$ {price}</p>
        <ItemCount min={0} max={6} />
      </article>
    </>
  );
}
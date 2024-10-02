import { Link } from 'react-router-dom';
import "./Item.css";

export default function Card({ products }) {
  const { id, title, price, categoryId, img } = products;

  return (
    <>
      <article className="cardProducts">
        <h4>{title}</h4>
        <p>{categoryId}</p>
        <img src={img} alt={title} className="cardImg" />
        <p>$ {price}</p>
        <button className="botonCard">
          <Link to={`/item/${id}`}>Leer más</Link>
        </button>
      </article>
    </>
  );
}

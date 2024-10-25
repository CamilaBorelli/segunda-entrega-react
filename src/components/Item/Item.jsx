import { Link } from 'react-router-dom';
import "./Item.css";

export default function Card({ product }) {
  const { id, title, price, categoryId, img } = product;


  return (
    <article className="cardProducts">
      <h4>{title}</h4>
      <p>{categoryId}</p>
      <img src={img} alt={title} className="cardImg" />
      <p>$ {price}</p>
      <button className="botonCard">
        <Link to={`/item/${id}`}>Ver más</Link>
      </button>
    </article>
  );
}
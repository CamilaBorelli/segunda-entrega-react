import { Link } from 'react-router-dom';
import "./Item.css";

export default function Card({ product }) {
  const { id, title, price, categoryId, img } = product;


  return (
    <div className="cardProducts">
      <div className='card'>
        <h4 className='cardTitle'>{title}</h4>
        <p>{categoryId}</p>
        <img src={img} alt={title} className="cardImg" />
        <p>$ {price}</p>
        <button className="botonCard">
          <Link to={`/item/${id}`} className='verMas'>Ver más</Link>
        </button>
      </div>
    </div>
  );
}
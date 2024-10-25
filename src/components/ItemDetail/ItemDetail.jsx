import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';


export default function ItemDetail({ product }) {
  const { title, price, categoryId, img, description,} = product;

  const [loadCart, setLoadCart] = useState(false);

  const {addItem} = useCartContext();

  const onAdd = (quantity) => {
    setLoadCart (true);
    addItem (product, quantity)
  }

  return (
    <article className="detalle">
      <h4>{title}</h4>
      <p>{categoryId}</p>
      <img src={img} alt={title} className="detalleImg" />
      <p className="parrafo">Descripción: {description}</p>
      <p>$ {price}</p>
      <section>
        {loadCart ? (
          <Link to='/cart'>Finalizar compra</Link>
        ) : (
          <ItemCount initial={0} stock={6} onAdd={onAdd} />
        )}
      </section>
    </article>
  );
}
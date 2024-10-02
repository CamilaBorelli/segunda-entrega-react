import { useEffect, useState } from 'react';
import { getProducts } from "../../asyncMock";
import ItemCount from '../ItemCount/ItemCount';

export default function ProductsList({ id, title, price, categoryId, img, description }) {


  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

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

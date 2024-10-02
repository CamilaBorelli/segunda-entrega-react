import { useState } from 'react';
import "./ItemCount.css";

export default function ItemCount({ min, max }) {
  const [numero, setNumero] = useState(0);

  const handleClickSuma = () => {
    if (numero < max) {
      setNumero(numero + 1);
    }
    clicks.current++;

  };

  const handleClickResta = () => {
    if (numero > min) {
      setNumero(numero - 1);
    }
    clicks.current++;
  };

  return (
    <>
      <div className="ItemCount">
        <p>{numero}</p>
        <button onClick={handleClickSuma}>+</button>
        <button onClick={handleClickResta}>-</button>
      </div>
    </>
  );
}
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { sendOrder } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm"; // Importar el componente del formulario
/*import "./Checkout.css";*/

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleConfirm = async (buyer) => {
    // Crear objeto de la orden
    const order = {
      buyer,
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
      date: new Date().toLocaleString(),
    };

    try {
      const id = await sendOrder(order); // Enviar la orden a Firebase
      setOrderId(id); // Guardar el ID de la orden
      clearCart(); // Limpiar el carrito
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  return (
    <div className="checkout">
      {orderId ? (
        <div className="order-confirmation">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu número de orden es: <strong>{orderId}</strong></p>
          <button onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      ) : (
        <CheckoutForm onConfirm={handleConfirm} />
      )}
    </div>
  );
}
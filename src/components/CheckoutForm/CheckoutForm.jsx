import { useState } from "react";
/*import "./CheckoutForm.css";*/ 

export default function CheckoutForm({ onConfirm }) {
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Pasar los datos del comprador al componente padre
    onConfirm(buyer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={buyer.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={buyer.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Teléfono</label>
        <input
          type="tel"
          name="phone"
          value={buyer.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Confirmar compra</button>
    </form>
  );
}
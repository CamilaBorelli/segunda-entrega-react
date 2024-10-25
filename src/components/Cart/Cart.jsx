import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartComponent from "../CartComponent/CartComponent";
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <h2>El carrito está vacío</h2>
                <Link to='/'>Seguir comprando</Link>
            </>
        );
    }

    const handleClearCart = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El carrito se ha vaciado.",
            confirmButtonText: "Aceptar"
        });
        clearCart();
    };


    return (
        <div>
            <h1>Tu carrito</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <CartComponent products={item} />
                    </li>
                ))}
            </ul>
            <h2>Total: ${totalPrice()}</h2>
            <button onClick={handleClearCart}>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    );
}

export default Cart;
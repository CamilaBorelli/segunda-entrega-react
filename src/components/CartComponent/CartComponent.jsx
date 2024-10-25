import { useCartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2';



const CartComponent = ({ products }) => {
    const {id, quantity, title, price, img } = products;

    const {removeItem} = useCartContext () 

    const handleRemoveItem = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El producto se ha eliminado.",
            confirmButtonText: "Aceptar"
        });
        removeItem(id);
    };


    return (
        <article className="cart">
            <img src={img} alt={title} className="" />
            <h4>Titulo : {title}</h4>
            <p>Cantidad : {quantity}</p>
            <p>Precio : ${price}</p>
            <p>Subtotal : ${quantity * price}</p>
            <button onClick={handleRemoveItem}>Eliminar</button>
        </article>
    )
}

export default CartComponent
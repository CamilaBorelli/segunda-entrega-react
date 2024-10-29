import { useCartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2';
import "./CartComponent.css";


const CartComponent = ({ products }) => {
    const { id, quantity, title, price, img } = products;

    const { removeItem } = useCartContext()

    const handleRemoveItem = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El producto se ha eliminado.",
            confirmButtonText: "Aceptar"
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id); 
            }
        });
    };


    return (
        <div className="cartComponent">
            <img src={img} alt={title} className="cartImg" />
            <h4>Titulo : {title}</h4>
            <p>Cantidad : {quantity}</p>
            <p>Precio : ${price}</p>
            <p>Subtotal : ${quantity * price}</p>
            <button onClick={handleRemoveItem}>Eliminar</button>
        </div>
    )
}

export default CartComponent
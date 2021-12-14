import { Button } from "react-bootstrap";

function CartWidget({fun, carrito}){    
    return(
        <div className="carritoNav">
            <Button variant="secondary" onClick={fun}>
                <img src="./assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
                <p id="contadorCarrito">{carrito.length/*(localStorage.getItem("carrito") ? (JSON.parse(localStorage.getItem("carrito"))).length : 0)*/}</p>
            </Button>
        </div>
        )
}

export default CartWidget;
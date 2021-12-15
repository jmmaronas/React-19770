import { Button } from "react-bootstrap";

function DeleteCartItem({itemId}){
    function quitar() {        
        const carrito=JSON.parse(localStorage.getItem("carrito"));
        let carritoFinal= carrito.filter(e=>e.id !== itemId);        
        localStorage.setItem("carrito", JSON.stringify(carritoFinal));
    }
    return(
        <Button variant="danger" className="botonBorrar" onClick={quitar}>X</Button>
    );
    
}
export default DeleteCartItem;
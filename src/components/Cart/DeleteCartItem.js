import { Button } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";

function DeleteCartItem({itemId, quitar}){
    //let navigate= useNavigate();
    function quitarStorage() {        
        const carrito=JSON.parse(localStorage.getItem("carrito"));
        let carritoFinal= carrito.filter(e=>e.id !== itemId);        
        localStorage.setItem("carrito", JSON.stringify(carritoFinal));
    //    navigate("/carrito");
    }

    function botonQuitar(){
        quitar(itemId);
        quitarStorage();
    }
    return(
        <Button variant="danger" className="botonBorrar" onClick={botonQuitar}>X</Button>
    );
    
}
export default DeleteCartItem;
import { Button } from "react-bootstrap";

function DeleteCartItem({itemId, quitar}){       
    function botonQuitar(){
        quitar(itemId);        
    }
    return(
        <Button variant="danger" className="botonBorrar" onClick={botonQuitar}>X</Button>
    );    
}
export default DeleteCartItem;
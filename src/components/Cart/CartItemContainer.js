import CartItem from "./CartItem";
//Bootstrap
import { Button,Table } from "react-bootstrap";

import { useContexto } from "../Context/CartContext";
import { Link } from 'react-router-dom';

function CartItemContainer(){
    const { cart, delToCart, clearCart } = useContexto();
    
    function quitar(id) { 
        delToCart(id)
    }
        
    let total=0;
    cart.map(e=>{return total+=(e.precio*e.cantidad)})
    return(       
        <div className="tableContainer container">
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Total</th> 
                    <th>Quitar</th>               
                </tr>
            </thead>
            <tbody>
                {cart.length>0 ? cart.map(e =><CartItem key= {e.id} itemCarrito={e} quitar={quitar}/>) : <Link to="/">Ir a inicio</Link>  }
                <tr>
                    <td colSpan={2}>Totales</td>
                    <td colSpan={2}>{total}</td>
                </tr>
                <tr>
                    <td colSpan={4}><Button variant="success" onClick={clearCart}>vaciar carrito</Button> </td>
                </tr>
            </tbody>           

            </Table>
        </div>   
   )
}

export default CartItemContainer;
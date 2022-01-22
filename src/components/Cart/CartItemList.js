import CartItem from './CartItem';
import { Button,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartItemList({ clearCart, quitar, total, cart }){
    
    return(
        <div className="conainer  d-flex flex-column me-4 mt-4 col-8 fs-4">
            <Table striped bordered hover>
                        <thead className='text-white'>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Total</th> 
                                <th>Quitar</th>               
                            </tr>
                        </thead>
                        <tbody>
                            {cart.length>0 ? cart.map((e,i) =><CartItem key={i} itemCarrito={e} quitar={quitar} />) :<tr><td colSpan={4}> <Link className='navbar-brand text-success ' to="/">Ir a inicio....</Link> </td></tr> }
                            <tr className='text-center'>
                                <td colSpan={2} className='text-white fw-bold'>Totales</td>
                                <td colSpan={2} className='text-primary fw-bolder'>$ {total}</td>
                            </tr>                            
                        </tbody>                 
                    </Table>
                    <div className="container row">
                            <Button variant="danger" className='fs-5' onClick={clearCart}>Vaciar carrito</Button> 
                    </div>  
        </div>
    )
};

export default CartItemList;
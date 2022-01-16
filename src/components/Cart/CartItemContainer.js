import CartItem from './CartItem';
import { db } from '../Firestore/firestore'
//Bootstrap
import { Button,Table, Form } from 'react-bootstrap';
//
import { useContexto } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

function CartItemContainer(){
    const { cart, delToCart, clearCart } = useContexto();
    
    function quitar(id) { 
        delToCart(id)
    }
    function confirmarCompra(e){
        e.preventDefault();
        const ventasCollections = collection(db, "ventas");
        addDoc(ventasCollections,{
            buyer: {
                nombre : document.getElementById("formNombre").value,
                mail : document.getElementById("formBasicEmail").value,
                tel : document.getElementById("formTel").value
            },
            items : cart,
            date : serverTimestamp(),
            total : cart.map( product => total+=product.cantidad*product.price)[0]
        })
        .then((result)=>alert("Gracias por su compra, numero de operación  "+ result.id ));
        clearCart();
        document.getElementById("form").reset();        
    }
    
        
    let total=0;
    cart.map(e=>{return total+=(e.price*e.cantidad)})
    return(       
        <div className="tableContainer container">
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
                        {cart.length>0 ? cart.map((e,i) =><CartItem key= {i} itemCarrito={e} quitar={quitar} />) :<tr><td colSpan={4}> <Link className='navbar-brand text-success ' to="/">Ir a inicio....</Link> </td></tr> }
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
            <Form id="form" action="#" onSubmit={confirmarCompra} className='d-flex flex-column m-auto text-white fw-bold'>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Apellido y Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ex. Juan Perez" />                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion de mail</Form.Label>
                    <Form.Control type="email" placeholder="exmple@gmail.com" />                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTel">
                    <Form.Label>Numero de telefono</Form.Label>
                    <Form.Control type="tel" placeholder="Ex. 4567-4582" />
                </Form.Group>
                
                <Button variant="primary" className='fs-5' type="submit">Comprar</Button>
            </Form>
        </div>   
   )
}

export default CartItemContainer;
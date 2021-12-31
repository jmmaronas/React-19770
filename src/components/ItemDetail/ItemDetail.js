import { useState } from 'react';
import { Link } from 'react-router-dom';
//Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ItemCount from './ItemCount';
//Fonstawesome
import { FiShoppingCart } from "react-icons/fi";

function ItemDetail({e}) {
    const [counter, setCounter]= useState(1);
    const [cart, setCart] = useState([]);
    const [validador, setValidador]= useState(true);
    // Si el estado es true muestra el ItemCount
    function validar(){
        setValidador(!validador);
    }
    // incrementa el count
    function incrementar() {
        setCounter( counter + 1);
    }
    // disminuye el count
    function disminuir() {
        setCounter( counter - 1);
    }
    //agrega el producto a cart ** no logro que agregue, creo que se me limpia el cart constantemente
    function agregarCarrito(params) {
        setCart(cart.push(params));
        console.log(cart)
    }
    
    return(
        <>   
            <Card  style={{ width: '18rem', margin: 'auto' }}>
                <Card.Img variant="top" src={e.img} alt="cargando"/>
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                        {e.detalle}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>$ {e.precio}</ListGroupItem>
                    <ListGroupItem>
                        {/* Si el estado validar es true muetro el Count sino un link a carrito */}
                        {validador ? <ItemCount producto={e} validar={validar} incrementar={incrementar} disminuir={disminuir} counter={counter} agregarCarrito={agregarCarrito}/>: <h4><Link to="/carrito">Producto Agregado <FiShoppingCart/></Link></h4>}                        
                    </ListGroupItem>                                    
                </ListGroup>                
            </Card>
        </>        
    )
    
}

export default ItemDetail;
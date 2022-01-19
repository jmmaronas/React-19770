import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ItemCount from './ItemCount';
import { FiShoppingCart } from "react-icons/fi";
import { useContexto } from '../Context/CartContext';

function ItemDetail({e}) {    
    const {addToCart} = useContexto();
    const [counter, setCounter]= useState(1);    
    const [validador, setValidador]= useState(true);
    
    function validar(){
        setValidador(!validador);
    }
    
    function incrementar(stock) {
        if(stock>counter){
            setCounter( counter + 1);
        }
    }
    
    function disminuir() {
        if(counter>1){
            setCounter( counter - 1);
        }
    }
    
    function agregarCarrito(product){
        addToCart(product, counter);
    }    
    
    return(           
        <Card  style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img variant="top" src={e.img} alt="cargando"/>
            <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                    {e.desccription}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>$ {e.price}</ListGroupItem>
                <ListGroupItem>    
                    {validador ? <ItemCount producto={e} validar={validar} incrementar={incrementar} disminuir={disminuir} counter={counter} agregarCarrito={agregarCarrito}/>: <h4><Link to="/carrito">Producto Agregado <FiShoppingCart/></Link></h4>}                        
                </ListGroupItem>                                    
            </ListGroup>                
        </Card>                
    )    
}

export default ItemDetail;
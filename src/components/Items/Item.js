import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ItemCount from './ItemCount';

function Item({e}){    
    return(
        <>   
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={e.img} alt="cargando"/>
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                        {e.detalle}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>$ {e.precio}</ListGroupItem>
                    <ListGroupItem><ItemCount producto={e}/></ListGroupItem>                    
                    {/*<ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Comprar</Card.Link>
                    <Card.Link href="#">Ver carrito</Card.Link>
                </Card.Body>
            </Card>
        </>        
    )
}

export default Item;
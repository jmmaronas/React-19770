import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';


function Item({e}){        
    return(
        <Link to={"/item/"+e.id}>   
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
                    <ListGroupItem>Seleccionar</ListGroupItem>                                    
                </ListGroup>                
            </Card>
        </Link>        
    );
}

export default Item;
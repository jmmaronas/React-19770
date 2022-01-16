import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';


function Item({e}){        
    return(
        <Link to={"/item/"+e.id} className='navbar-brand'>   
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={e.img} alt="cargando"/>
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                        {e.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>$ {e.price}</ListGroupItem>
                    <ListGroupItem className='text-white bg-info'>Seleccionar</ListGroupItem>                                    
                </ListGroup>                
            </Card>
        </Link>        
    );
}

export default Item;
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ItemCount from '../Items/ItemCount';


function ItemDetail({e}) {
    return(
        <>   
            <Card  style={{ width: '18rem', margin: 'auto' }}>
                <Card.Img variant="top" src={"."+e.img} alt="cargando"/>
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                        {e.detalle}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>$ {e.precio}</ListGroupItem>
                    <ListGroupItem><ItemCount producto={e}/></ListGroupItem>                                    
                </ListGroup>                
            </Card>
        </>        
    )
    
}

export default ItemDetail;
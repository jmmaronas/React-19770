import { Container, Col, Row, Button } from "react-bootstrap";

function ItemCount({producto, validar, incrementar, disminuir, counter, agregarCarrito}){
    
    function agregar(){        
        agregarCarrito(producto);       
        validar();        
    }
    
   return(                     
        <Container fluid>
            <Row>
                <Col><Button variant="outline-danger" onClick={disminuir}>-</Button></Col>
                <Col> {counter} </Col>
                <Col><Button variant="outline-danger" onClick={()=>incrementar(producto.stock)}>+</Button></Col>
            </Row>
            <Row>
                <Col><Button variant="outline-danger" className="agregarProducto" onClick={agregar}>Agregar</Button></Col>
            </Row>                    
        </Container>                
   )
}

export default ItemCount;
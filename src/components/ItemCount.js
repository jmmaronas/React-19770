import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function ItemCount({pedido}){
    const [counter, setState]= useState(pedido)
   return(
        <>
             <Container fluid>
                <Row>
                    <Col><Button variant="outline-danger" onClick={()=> counter > 1 ? setState(counter-1) : counter }>-</Button></Col>
                    <Col> {counter} </Col>
                    <Col><Button variant="outline-danger" onClick={()=> setState(counter+1)}>+</Button></Col>
                </Row>
            </Container>
        </>
   )

}

export default ItemCount;
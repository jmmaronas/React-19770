import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";


function ItemCount({producto}){
    const [counter, setState]= useState(producto.cantidad);
    function agregar(){
        let carrito= JSON.parse(localStorage.getItem("carrito")) || [];
        producto.cantidad=counter
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));        
    }
    
   return(
        <>
             <Container fluid>
                <Row>
                    <Col><Button variant="outline-danger" onClick={()=> counter > 1 ? setState(counter-1) : counter }>-</Button></Col>
                    <Col> {counter} </Col>
                    <Col><Button variant="outline-danger" onClick={()=> counter < producto.stock ? setState(counter+1) : counter}>+</Button></Col>
                </Row>
                <Row>
                    <Col><Button variant="outline-danger" onClick={agregar}>Agregar</Button></Col>
                </Row>    
            </Container>
        </>
   )

}

export default ItemCount;
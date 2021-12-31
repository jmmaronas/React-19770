//import { useState } from "react";
//Bootstrap
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function ItemCount({producto, validar, incrementar, disminuir, counter, agregarCarrito}){
    
    function agregar(){
        let carrito= JSON.parse(localStorage.getItem("carrito")) || [];
        let indice= carrito.findIndex(e => e.id === producto.id);
        if(indice === -1){
            producto.cantidad=counter;            
            carrito.push(producto);
            agregarCarrito(producto);
        }else{
            carrito[indice].cantidad+=counter ;
            agregarCarrito(carrito[indice]);
        }
        
        localStorage.setItem("carrito", JSON.stringify(carrito));
        validar();        
    }
    
   return(
        <>   
            
            <Container fluid>
                <Row>
                    <Col><Button variant="outline-danger" onClick={disminuir}>-</Button></Col>
                    <Col> {counter} </Col>
                    <Col><Button variant="outline-danger" onClick={incrementar}>+</Button></Col>
                </Row>
                <Row>
                    <Col><Button variant="outline-danger" className="agregarProducto" onClick={agregar}>Agregar</Button></Col>
                </Row>                    
            </Container>
            
        </>
   )
}

export default ItemCount;
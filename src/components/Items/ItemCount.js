import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";


function ItemCount({producto}){
    const [counter, setState]= useState(producto.cantidad);
    function agregar(){
        let carrito= JSON.parse(localStorage.getItem("carrito")) || [];
        let indice= carrito.findIndex(e => e.id === producto.id);
        if(indice === -1){
            producto.cantidad=counter;            
            carrito.push(producto);
            
        }else{
            carrito[indice].cantidad+=counter ;
        }
        
        localStorage.setItem("carrito", JSON.stringify(carrito));           
    }
    
   return(
        <>
            <Container fluid>
                <Row>
                    <Col><Button variant="outline-danger" onClick={()=>counter > 1 ? setState(counter - 1) : counter}>-</Button></Col>
                    <Col> {counter} </Col>
                    <Col><Button variant="outline-danger" onClick={()=>counter < producto.stock ? setState(counter + 1) : counter}>+</Button></Col>
                </Row>
                <Row>
                    <Col><Button variant="outline-danger" className="agregarProducto" onClick={agregar}>Agregar</Button></Col>
                </Row>                    
            </Container>
        </>
   )
}

export default ItemCount;
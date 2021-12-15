import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function CartWidget({fun}){    
    const [count, setCount]= useState([]);
    useEffect(() => {
        setCount((JSON.parse(localStorage.getItem("carrito"))).length)        
    }, []);
    // document.querySelector("body").addEventListener("click", (e)=>{
    //     if(e.target.classList.contains("agregarProducto")){
    //       setCount(JSON.parse(localStorage.getItem("carrito")).length);
    //     }
    // });
    return(
        <div className="carritoNav">
            <Button variant="secondary" onClick={fun}>
                <img src="./assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
                <p id="contadorCarrito">{count}</p>
            </Button>
        </div>
        )
}

export default CartWidget;
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function CartWidget(){    
    const [count, setCount]= useState([]);
    useEffect(() => {
        localStorage.getItem("carrito") ? setCount((JSON.parse(localStorage.getItem("carrito"))).length) : setCount("0");        
    }, []);
    
    // document.querySelector("body").addEventListener("click", (e)=>{
    //     if(e.target.classList.contains("agregarProducto")){
    //       setCount(JSON.parse(localStorage.getItem("carrito")).length);
    //     }
    // });
    return(
        <div className="carritoNav"> 
            <NavLink to={"/carrito"}>
                <img src="/assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
                <p id="contadorCarrito">{count}</p>
            </NavLink>
        </div>
        )
}

export default CartWidget;
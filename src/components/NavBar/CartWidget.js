import { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';

function CartWidget(){    
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
            <NavLink to={"/carrito"}>
                <img src="./assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
                <p id="contadorCarrito">{count}</p>
            </NavLink>
        </div>
        )
}

export default CartWidget;
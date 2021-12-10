
function CartWidget(){    
    return(
        <div className="carritoNav">
            <img src="./assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
            <span><p id="contadorCarrito">{(localStorage.getItem("carrito") ? (JSON.parse(localStorage.getItem("carrito"))).length : 0)}</p></span>
        </div>
        )
}

export default CartWidget;
import { NavLink } from 'react-router-dom';

function CartWidget( { cantidadProductos }){           
    return(
        <div className="carritoNav"> 
            <NavLink to={"/carrito"}>
                <img src="/assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
                {cantidadProductos>0 ? <p id="contadorCarrito" className='text-white'>{cantidadProductos}</p> : <p></p>}
            </NavLink>
        </div>
    );
}

export default CartWidget;
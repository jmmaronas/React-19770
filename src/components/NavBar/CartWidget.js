import { NavLink } from 'react-router-dom';
import { useContexto } from '../Context/CartContext';

function CartWidget(){    
    const {cantidadProductos} = useContexto();
        
    return(
        <div className="carritoNav"> 
            <NavLink to={"/carrito"}>
                <img src="/assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
                {cantidadProductos>0 ? <p id="contadorCarrito">{cantidadProductos}</p> : <p></p>}
            </NavLink>
        </div>
    );
}

export default CartWidget;
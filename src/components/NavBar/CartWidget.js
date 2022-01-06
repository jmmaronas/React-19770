import { NavLink } from 'react-router-dom';
import { useContexto } from '../Context/CartContext';

function CartWidget(){    
    const {cartZize} = useContexto();
        
    return(
        <div className="carritoNav"> 
            <NavLink to={"/carrito"}>
                <img src="/assets/carrito.png" style={{ width: '2rem' }} alt='imagen en proceso'/>
                <p id="contadorCarrito">{cartZize}</p>
            </NavLink>
        </div>
    );
}

export default CartWidget;
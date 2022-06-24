import { NavLink } from 'react-router-dom';

function CartWidget( { cantidadProductos }){           
    return(
        <div className="carritoNav"> 
            <NavLink className="d-flex justify-content-around aling-items-center" to={"/carrito"}>
                <img className='col-6' src="/assets/carrito.png" alt='imagen en proceso'/>
                {cantidadProductos>0 ? <p id="" className='text-white bg-secondary rounded rounded-circle col-6 my-auto text-decoration-none'>{cantidadProductos}</p> : <p></p>}
            </NavLink>
        </div>
    );
}

export default CartWidget;
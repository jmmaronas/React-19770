import DeleteCartItem from './DeleteCartItem';

function CartItem({itemCarrito, quitar}){    
    return(        
        <tr className="text-center">
            <td className="text-primary fw-bold">{itemCarrito.cantidad}</td>
            <td className="text-primary fw-bold">{itemCarrito.name}</td>
            <td className="text-primary fw-bold">{itemCarrito.price * itemCarrito.cantidad}</td>
            <td><DeleteCartItem itemId={itemCarrito.id} quitar={quitar}/></td>               
        </tr>       
    );
}

export default CartItem;
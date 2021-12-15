import DeleteCartItem from "./DeleteCartItem";

function CartItem({itemCarrito}){    
        return(        
            <tr>
                <td>{itemCarrito.cantidad}</td>
                <td>{itemCarrito.name}</td>
                <td>{itemCarrito.precio * itemCarrito.cantidad}</td>
                <td><DeleteCartItem itemId={itemCarrito.id}/></td>            
            </tr>       
        );
}

export default CartItem;
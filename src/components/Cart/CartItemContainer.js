import CartItemList from './CartItemList';
import CartForm from './CartForm';
import { db } from '../Firestore/firestore'
import { useContexto } from '../Context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


function CartItemContainer(){
    const { cart, delToCart, clearCart } = useContexto();
    
    function quitar(id) { 
        delToCart(id)
    }
    function confirmarCompra(e){
        e.preventDefault();
        const ventasCollections = collection(db, "ventas");
        addDoc(ventasCollections,{
            buyer: {
                nombre : document.getElementById("formNombre").value,
                mail : document.getElementById("formBasicEmail").value,
                tel : document.getElementById("formTel").value
            },
            items : cart,
            date : serverTimestamp(),
            total : cart.map( product => total+=product.cantidad*product.price)[0]
        })
        .then((result)=>alert("Gracias por su compra, numero de operación  "+ result.id ));
        clearCart();
        e.target.reset();         
    }
            
    let total=0;
    cart.map(e=>{return total+=(e.price*e.cantidad)})
    return(       
        <div className="tableContainer container">
            <CartItemList clearCart={clearCart} quitar={quitar} total={total} cart={cart}/>           
            <CartForm confirmarCompra={confirmarCompra}/>    
        </div>   
    );
}

export default CartItemContainer;
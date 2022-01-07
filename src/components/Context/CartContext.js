import { createContext, useContext, useState } from "react"

const cartContext = createContext();

export const { Provider } = cartContext;

export function useContexto(){ 
    return useContext(cartContext);
} 

function CartProvider( {children} ) {
    const [cart, setCart]= useState(JSON.parse(localStorage.getItem("carrito")) || [])    
    
    function isInCart(product) {
        return cart.some(e=>e.id === product.id);
    }    
    function addToCart(product, counter) { 
        console.log(isInCart(product));
        product.cantidad=counter;       
        let arrayNuevo= cart.slice(0)
        let indice = arrayNuevo.findIndex(e=>e.id===product.id);     
        indice ===-1 ? arrayNuevo.push(product) : arrayNuevo[indice].cantidad+=counter;                
        setCart(arrayNuevo);  
        localStorage.setItem("carrito", JSON.stringify(arrayNuevo));        
    }
    function delToCart(id){
        setCart(cart.filter(e => e.id !== id));
        localStorage.setItem("carrito", JSON.stringify(cart));
    }
    function clearCart(){
        setCart([]);
        localStorage.clear();
    }

    const valorDelContexto={ 
        cart,
        addToCart, 
        isInCart, 
        delToCart, 
        clearCart, 
        cartZize: cart.length || 0
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
    
}

export default CartProvider;
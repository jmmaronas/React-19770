import { createContext, useState } from "react"

const CartContext= createContext();
function cacheProvider( defaultValue= [], children) {
    const [cache, setCache]= useState(defaultValue);
    
    function getFromCache(id) {
        return cache.find( obj => obj.id === id);
    }
    function isInCache(id) {
        
    }    
    function addToCache(id) {
        
    }
    setCache([...cache], obj);

    return(
        <CartContext.Provider value={{cache, addToCache, isInCache, cacheSize : cache.length}}>
            {children}
        </CartContext.Provider>
    )
    
}

export default cacheProvider;
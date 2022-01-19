import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../Firestore/firestore';
import ItemDetail from "./ItemDetail";
    
function ItemDetailContainer(){    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState(null);
    const { id }=useParams();      
    
    useEffect(() => {
        const productsCollection=collection(db, "productos");        
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
            .then((result)=>{                
                setItem({id, ...result.data()});
                setIsLoaded(true);                
            })
            .catch((error) => {            
                setIsLoaded(true);
                setError(error);
            })
    }, [id]);
  
    if (error) {
        console.log(error)
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {        
        return <div>Loading...</div>;
    } else {        
        return (<ItemDetail e={item}/>);
    }  
}

export default ItemDetailContainer;
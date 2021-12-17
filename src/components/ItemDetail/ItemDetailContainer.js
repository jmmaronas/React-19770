import ItemDetail from "./ItemDetail";
//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


    
function ItemDetailContainer(){
    const products= JSON.parse(localStorage.getItem("listProduct"));
    const {id}=useParams(); 
   
    return(
        <ItemDetail e={products.find(e=>e.id === id.toString())}/>
    )
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    // const {id}=useParams();  
    // console.log(id)  
    // // Note: the empty deps array [] means
    // // this useEffect will run once
    // // similar to componentDidMount()
    // useEffect(() => {
    //   fetch("./productos.json")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {            
    //           setIsLoaded(true);
    //           setItems(result);            
    //       },
    //       // Nota: es importante manejar errores aquí y no en 
    //       // un bloque catch() para que no interceptemos errores
    //       // de errores reales en los componentes.
    //       (error) => {            
    //           setIsLoaded(true);
    //           setError(error);            
    //       }
    //     )
    // }, [])
  
    // if (error) {
    //     console.log(error)
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     console.log(isLoaded)
    //   return <div>Loading...</div>;
    // } else {
    //     let productos=items.slice(0);
    //     console.log(items);
    //   return (
    //     <ItemDetail e={productos.find(e=>e.id == id)}/>
        
    //   );
    // }

    
    
}

export default ItemDetailContainer;
import ItemList from './ItemList'
import { Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firestore/firestore';
import { getDocs, query, collection, where } from 'firebase/firestore';

function ItemListContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { filter } = useParams();
  
  useEffect(()=> {  
    const productsCollection = collection(db, "productos");

    if(filter){
      const consulta = query(productsCollection,where("category","==",filter));
      getDocs(consulta)
        .then(({docs}) => {          
          setItems(docs.map((doc)=> ({id: doc.id, ...doc.data()})));
          setIsLoaded(true);
        })
        .catch((error)=>{
          setIsLoaded(true);
          setError(error);    
        })
    } else{
      getDocs(productsCollection)
        .then((resultado)=>{          
          const docs = resultado.docs          
          const lista = docs.map((doc)=>{                                        
            return {...doc.data(), id: doc.id};            
          })
          setIsLoaded(true);            
          setItems(lista);  ;
        })
        .catch((error)=>{
          setIsLoaded(true);
          setError(error);    
        });
    }
  },[filter]);      
    
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return(
      <div className='d-flex'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>          
        </Spinner>
        <p className='mx-4'>Loading....</p>
      </div>
    );
  } else {    
    return (<ItemList productos={items.slice(0)}/>);
  }
}
export default ItemListContainer;

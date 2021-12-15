import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import CartItemContainer from './components/Cart/CartItemContainer';
import { useState } from 'react';

//CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//CSS
import './App.css';


const links=[ 
  {href:"#", name:"Novedades"},
  {href:"#", name:"Productos"}, 
  {href:"#", name:"Contactos"}  
]; 



function App() {
  const [show, setShow] = useState(false);
  
  //Funcion Mostrar carrito en CartWidget
  function toggle(){
    setShow(!show);
  } 
  
  return( 
    <>
      <Navbar nombre="Juan" apellido="Maroñas" links={links} fun={toggle}/>   
      <div className="container">
        <ItemListContainer/>
        {/* <ItemsList saludo="Lista de Productos"/>  */}
        {show ? <CartItemContainer /> : []}
        
      </div>      
    </>  
    );
    
}

export default App;

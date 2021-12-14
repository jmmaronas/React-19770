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
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito"))||[]);
  //Funcion Mostrar carrito en CartWidget
  function toggle(){
    setShow(!show);
  } 
  const cuerpo=document.querySelector("body");
  cuerpo.addEventListener("click", (e)=>{
    if(e.target.classList.contains("agregarProducto")){
      setCarrito(JSON.parse(localStorage.getItem("carrito")));
    }else if(e.target.classList.contains("botonBorrar")){
      setCarrito(JSON.parse(localStorage.getItem("carrito")));
    }  
  });
  
  return(
    <>
      <Navbar nombre="Juan" apellido="Maroñas" links={links} fun={toggle} carrito={carrito}/>   
      <div className="container">
        <ItemListContainer/>
        {/* <ItemsList saludo="Lista de Productos"/>  */}
        {show ? <CartItemContainer carrito={carrito}/> : []}
        
      </div>      
    </>  
    );
    
}

export default App;

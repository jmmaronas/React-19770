import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
//import ItemsList from './components/ItemList';

//CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//CSS
import './App.css';
import ItemListContainer from './components/ItemListContainer';

const links=[ 
  {href:"#", name:"Novedades"},
  {href:"#", name:"Productos"}, 
  {href:"#", name:"Contactos"}  
]; 
const cuerpo=document.querySelector("body");
cuerpo.addEventListener("click", (e)=>{
  if(e.target.classList.contains("btn")){
    document.querySelector("#contadorCarrito").innerHTML = (JSON.parse(localStorage.getItem("carrito")).length)
  }
})

function App() {
  return (
    <>
      <Navbar nombre="Juan" apellido="Maroñas" links={links}/>   
      <ItemListContainer/>
      {/* <ItemsList saludo="Lista de Productos"/>  */}
      
    </>
  );
}

export default App;

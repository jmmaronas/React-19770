import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemListContainer';
//CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//CSS
import './App.css';
 


function App() {
  return (
    <>
      <Navbar nombre="Juan" apellido="Maroñas" links={ [ {href:"#", name:"inicio"}, {href:"#", name:"Productos"}, {href:"#", name:"Contactos"}, {href:"#", name:"Carrito"} ] }/>   
      
      <ItemsListContainer saludo="Lista de Productos"/>
      
    </>
  );
}

export default App;

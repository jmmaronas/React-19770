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

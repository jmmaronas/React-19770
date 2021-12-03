import Nav from './components/Navbar'
import './App.css';

function App() {
  return (
    <>
      <Nav nombre="Juan" apellido="Maroñas" links={ [ {href:"#", name:"inicio"}, {href:"#", name:"Productos"}, {href:"#", name:"Contactos"}, {href:"#", name:"Carrito"} ] }/>   
      <h1>Bienvenido</h1>
    </>
  );
}

export default App;

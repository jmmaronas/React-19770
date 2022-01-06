import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import CartItemContainer from './components/Cart/CartItemContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemNewContainer from './components/ItemNews/ItemNewContiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/Context/CartContext';

//CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//CSS
import './App.css';


const links=[   
  {href:"/", name:"Inicio", id: 1},
  {href:"categoria/novedades", name:"Novedades", id: 2}, 
  {href:"categoria/descuentos", name:"Descuentos", id: 3}  
]; 



function App() {   
  
  return( 
    <CartProvider>
      <BrowserRouter>
        <Navbar nombre="Juan" apellido="Maroñas" links={links}/>         
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>          
          <Route path="/categoria/:filter" element={<ItemNewContainer/>}/>  
          <Route path="/carrito" element={<CartItemContainer />}/>                  
        </Routes>
      </BrowserRouter>    
    </CartProvider>    
    );
    
}

export default App;

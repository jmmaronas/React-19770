import CartWidget from './CartWidget';
import { NavLink} from 'react-router-dom';
import { useContexto } from '../Context/CartContext';

function Navbar({nombre, apellido, links}){  
    const {cantidadProductos} = useContexto();
    return(
        <header className="head">
            <div>
                <h1>Bienvenido: {nombre} {apellido}</h1>                
            </div>
            <div className="titulo">
                <nav>
                    <ul>{links.map( (e, i) =><li key={i}><NavLink to={e.href}>{e.name} </NavLink></li> )}    
                    </ul>                       
                </nav>
                <CartWidget cantidadProductos={cantidadProductos}/>
            </div>
        </header>
    );
}

export default Navbar;
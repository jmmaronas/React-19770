import CartWidget from './CartWidget';
import { NavLink} from 'react-router-dom';

function Navbar({nombre, apellido, links}){  
   
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
                <CartWidget/>
            </div>
        </header>
    );
}

export default Navbar;
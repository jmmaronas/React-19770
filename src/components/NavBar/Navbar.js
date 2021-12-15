import Button from 'react-bootstrap/Button'
import CartWidget from './CartWidget';

function Navbar({nombre, apellido, links, fun, carrito}){  
   
    return(
        <header className="head">
            <div>
                <h1>Bienvenido: {nombre} {apellido}</h1>                
            </div>
            <div className="titulo">
                <nav>
                    <ul>{links.map( (e, i) =><Button key={i} variant="secondary"><a href={e.href}>{e.name}</a></Button> )}    
                    </ul>                       
                </nav>
                <CartWidget fun={fun}/>
            </div>
        </header>
    );
}

export default Navbar;
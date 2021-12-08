import Button from 'react-bootstrap/Button'
import CartWidget from './CartWidget';
function Navbar(props){
    console.log(props.nombre);
    
    return(
        <header className="head">
            <div>
                <h1>Bienvenido: {props.nombre} {props.apellido}</h1>                
            </div>
            <div className="titulo">
                <nav>
                    <ul>{props.links.map( (e, i) =><Button key={i} variant="secondary"><a href={e.href}>{e.name}</a></Button> )}    
                    </ul>   
                    <span className="material-icons">
                        shopping-carts    
                    </span>             
                </nav>
                <CartWidget/>
            </div>
        </header>
    );
}

export default Navbar;
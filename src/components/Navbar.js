import Button from 'react-bootstrap/Button'
function Navbar(props){
    console.log(props.nombre);
    
    return(
        <header className="head">
            <div className="titulo">
                <h1>Pagina de practica de {props.nombre} {props.apellido}</h1>                
            </div>
            <nav>
                <ul>{props.links.map( (e, i) =><Button variant="secondary"><a key={i}href={e.href}>{e.name}</a></Button> )}    
                </ul>
            </nav>
            <img src="./assets/carrito.png" style={{ width: '2rem' }}/>
        </header>
    );
}

export default Navbar;
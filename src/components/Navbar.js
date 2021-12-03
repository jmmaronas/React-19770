
function Navbar(props){
    console.log(props.nombre);
    
    return(
        <header className="head">
            <div className="titulo">
                <h1>Pagina de practica de {props.nombre} {props.apellido}</h1>
                <img src="./logo192.png" alt="imagen de prueba"/>
            </div>
            <nav>
                <ul>{props.links.map( (e, i) => <a key={i}href={e.href}>{e.name}</a>)}    
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
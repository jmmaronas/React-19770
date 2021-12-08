import Item from './Item';

// const products=[
//     {id:"1", nombre:"PC", detalle:"i5,500GB ssd", categoria:"computacion", precio:100000, img:"./assets/pc.jpg", stock:10, pedido:1},
//     {id:"2", nombre:"Aire", detalle:"Split 3000F", categoria:"hogar", precio:60000, img:"./assets/aire1.jpg", stock:10, pedido:1},
//     {id:"3", nombre:"Notebook", detalle:"i3, 240GB ssd", categoria:"computacion", precio:120000, img:"./assets/notebook1.png", stock:10, pedido:1},
//     {id:"4", nombre:"All-in-One", detalle:"i7, 500GB ssd", categoria:"computacion", precio:80000, img:"./assets/all-in-one.jpg", stock:10, pedido:1},
//     {id:"5", nombre:"Tablet", detalle:"Android", categoria:"computacion", precio:20000, img:"./assets/tablet.jpg", stock:10, pedido:1},
//     {id:"6", nombre:"Mouse", detalle:"Mouse optico", categoria:"computacion", precio:1000, img:"./assets/mouse.jpg", stock:10, pedido:1},
//     {id:"7", nombre:"Teclado", detalle:"Teclado gamer", categoria:"computacion", precio:2500, img:"./assets/teclado.jpg", stock:10, pedido:1},
//     {id:"8", nombre:"Heladera", detalle:"Heladera mediana", categoria:"hogar", precio:90000, img:"./assets/heladera1.jpg", stock:10, pedido:1},
//     {id:"9", nombre:"Lavarropas", detalle:"Lavarropas automatico", categoria:"hogar", precio:45000, img:"./assets/lavarropas1.jpg", stock:10, pedido:1},
//     {id:"10", nombre:"Monitor", detalle:"Monitor 19´", categoria:"computacion", precio:18000, img:"./assets/monitor1.jpg", stock:10, pedido:1},
//     {id:"11", nombre:"Netbook", detalle:"Pentium, 120GB ssd", categoria:"computacion", precio:160000, img:"./assets/netbook.png", stock:10, pedido:1}
//   ];
  

function ItemList({productos}){          
    return(
        <>
            <h2></h2> 
            <div className="cardContainer">
                {productos.map( (e,i)=><Item key={i} e={e}/>)}
            </div>     
        </>
    );
}

export default ItemList;
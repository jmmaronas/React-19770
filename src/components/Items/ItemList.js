import Item from './Item'; 

function ItemList({productos}){
    return(    
            <>             
                <div className="cardContainer">
                    {productos.map(e=><Item key={e.id} e={e}/>)}
                </div>     
            </>
        );
}

export default ItemList;
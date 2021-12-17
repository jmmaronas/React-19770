import { useParams } from "react-router-dom";
import ItemList from "../Items/ItemList";


function ItemNewContainer() {
    let productos=JSON.parse(localStorage.getItem("listProduct"));
    const { filter } = useParams();    
    if(filter){
        let prodFilter = productos.filter(e=>e.promo === filter);    
        return(
            <ItemList productos={prodFilter}/>
        );
    }
}

export default ItemNewContainer;
import React, { useState} from "react";

function Count(){
    let min=1;
    let max=10;
    const [isAdd, setAdd] = useState(min);


    function addition(){
        const newValue=isAdd+1;
        if(newValue<=max){
            setAdd(newValue);
        }
    }
    function substraction(){
        const newValue=isAdd-1;
        if(newValue>=min){
            setAdd(newValue);
        }
    }
    function onAdd(){
        alert("compraste"+ isAdd+"items"); //
    }
    return(
        <>
            <div>
                <button 
                    className="itm-count-container"
                    onClick={substraction}>
                    -
                </button>
                <span>{isAdd}</span>
                <button 
                    className="itm-count-container"
                    onClick={addition}>
                    +
                </button>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default Count;
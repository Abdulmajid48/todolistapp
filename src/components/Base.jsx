import React from "react";

function Base(props) {

    return(
         <div className="base" >
                 <div><p>{props.number} {props.itemLeft}</p></div>
                 <div><p>All</p></div>
                 <div><p>Active</p></div>
                 <div><p> Completed</p></div>
                 <div onClick={()=>{
            props.delAll(props.id); }}><p> Clear Completed</p></div>
               </div> 
    )
    
}

export default Base;
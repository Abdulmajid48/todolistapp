import React, { useState } from "react";


  function Item (props){

    const [check, setCheck] = useState(false);


    function lint() {
      setCheck(preValue => {
            return !preValue
        });
       
        }


        function handleMouseOver() {
             setCheck(true);
            
        }


        function handleMouseOut() {
            setCheck(false)
            
        }

         return (
            <div>
                <li  className="list" style={{textDecoration: check? "line-through": null }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><input className="checkbox-round" type="checkbox" onClick={lint}/> {props.text}<div onClick={()=>{
            props.button(props.id); }} ><img src="./images/icon-cross.svg" alt=""    style={{ visibility: check? "visible": "hidden"}} /></div>
              </li>
            </div>
        )
     }

   


    
//     Drag and drop to reorder list


       



export default Item;

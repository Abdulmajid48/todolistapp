import React, { useState } from "react";


  function Item (props){

    const [check, setCheck] = useState(false);
    const [mouseMove, setMouseMove]= useState(false)

    // Click CheckBox
    function checkBox() {
      setCheck(preValue => {
            return !preValue
      });   
    }
           
    //  Handle mouse over Delete Button
    function handleMouseOver() {
      setMouseMove(true);       
    }


    function handleMouseOut() {
      setMouseMove(false)       
    };

        
     return (
      <div>
            {/* Todolists as an Array */}
          <li  
            className="list" 
            style={{textDecoration: check? "line-through": null }} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>

            {/* Checkbox */}
            <input
              className="checkbox-round" 
              type="checkbox" 
              onClick={checkBox}  
              onChange={() => props.handleSelected(props.id)} 
              checked = {() => props.includeItemsId(props.id)}
              style={{ background: check?'url("./images/icon-check.svg")':null, backgroundImage:check? "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))":null}}
            /> 
            {/* todolist Content */}
            {props.text}

            {/* Delete Single Todolist Button */}
            <div onClick={()=>{props.button(props.id); }} >
            <img src="./images/icon-cross.svg" alt=""    style={{ visibility: mouseMove? "visible": "hidden"}} />
            </div>
          </li>
      </div>
         )
  }

export default Item;

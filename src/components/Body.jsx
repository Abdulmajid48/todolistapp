import React from "react";
import { useState } from "react";

function Body(props){

    const [background, setBackground]= useState(false);

    function changeicon() {

        setBackground(preValue => {
            return !preValue
        });

          props.changeListColor(background)
        
    }



    return (
        <div className="divs">
            <div className="topdiv" style={{backgroundImage: background? 'url("./images/bg-desktop-light.jpg")':'url("./images/bg-desktop-dark.jpg")' }}>
              <div className="topdivflex">
                <div><p className="todo">TODO</p></div>
                <div onClick={changeicon}>{background? <img src="./images/icon-moon.svg" alt=""/>:<img src="./images/icon-sun.svg" alt=""/> }</div>
              </div>

            </div>
        
            <div className="bottomdiv" style={{backgroundColor: background?"hsl(233, 11%, 84%)":"hsl(235, 21%, 11%)"}}>
             <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
      Coded by <a href="www.twitter.com/aladejanaamajid">Your Name Here</a>.
    </div>

            </div>
    
        </div>
        )
}

export default Body;
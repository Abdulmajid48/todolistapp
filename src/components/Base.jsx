import React, { useEffect, useState } from "react";

function Base(props) {

     const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 375px)").matches
  )

  useEffect((e) => {
    window
    .matchMedia("(min-width: 375px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div >
      {matches && (<div className="desktopdesign" >
                 <div><p>{props.number} {props.itemLeft}</p></div>
                 <div><p>All</p></div>
                 <div><p>Active</p></div>
                 <div><p> Completed</p></div>
                 <div onClick={()=>{
            props.delAll(props.id); }}><p> Clear Completed</p></div>
               </div> )}
      {!matches && (<div className="mobileDesign">
      <div className="mobile1" >
                 <div><p>{props.number} {props.itemLeft}</p></div>
                  <div onClick={()=>{
            props.delAll(props.id); }}><p> Clear Completed</p></div>
            </div>
                  
                 <div className="mobile2">
                     <div><p>All</p></div>
                 <div><p>Active</p></div>
                 <div><p> Completed</p></div>
                 </div>
                </div>
                
                )}
    </div>
  );
}
         
    


export default Base;
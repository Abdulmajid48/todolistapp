
import React, { useState } from "react";
import Item from "./Todolist";
import CreateList from "./CreateList"

import Body from "./Body";
import Base from "./Base";

function App () {

const [items, setItem] = useState([]);



  function addNote(note) {
    setItem(prevValue=> {
        return [...prevValue, note];
       
    });
    
  }

  function deleteItem(id){
    setItem(prevValue=>{
        return prevValue.filter((item, index)=>{
            return index !== id
        });
    });

  }

  function deleteAll(id){
    setItem([]);

  }



          const [listColor, setListColor] = useState()
         function change(background) {

             setListColor(background);
          
         }  
                     


    return (
     <div className="motherdiv" style={{color:listColor? "hsl(233, 11%, 84%)":" hsl(235, 21%, 11%)"}}>
           <div className="todolist" >
             <CreateList 
                onAdd= {addNote}
            />
              <div className="boxshadow" style={{boxShadow: listColor? "1px 1px 5px hsl(235, 24%, 19%)": "1px 1px 5px hsl(236, 33%, 92%)"}}>
                <div className="total"  style={{backgroundColor:listColor? "hsl(235, 24%, 19%)": "hsl(0, 0%, 98%)"}}>
               {items.map((itemi, index) => {
                return (
                     <Item
                    key= {index}
                    id= {index}
                    text={itemi}
                    button={deleteItem}
                     />


                );
                     })}
             <Base
              number={items.length}
              itemLeft={items.length<=1? "item left": "items left"}
              delAll={deleteAll}
             />
             </div>
              </div>
           </div>
            
              <Body
              changeListColor={change}
              />
                      
             
        </div>
        
        );
    }
  


export default App;

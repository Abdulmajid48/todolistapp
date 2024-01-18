
import React, { useEffect, useState } from "react";
import Item from "./Todolist";
import CreateList from "./CreateList";
import Body from "./Body";
import Base from "./Base";


  function App () {

    const [items, setItem] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [listColor, setListColor] = useState();

           //-------Responsivenesss----------- 
      const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 375px)").matches
      )              
      useEffect(() => {
        window
        .matchMedia("(min-width: 375px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    
          // ---------------Add items to the Array of List items-----------------
      function addNote(note) {
        setItem(prevValue=> {
            return [...prevValue, note];

        });  
      }
        //  ---------Set background color-----------------
      function change(background) {
      
        setListColor(background);  
      } 
    
      //--------------- Delete a single item------------------
      function deleteItem(id){
        setItem(prevValue=>{
            return prevValue.filter((item, index)=>{
                return index !== id
            });
        });
      }
    
      // -------------Add selected items into a new Array-------------
     function handleCheckboxChange (id) {
        // Check if the item is already selected
        if (selectedItems.includes(id)) {
          // If selected, remove it from the list
          setSelectedItems(selectedItems.filter(index => index !== id));
        } else {
          // If not selected, add it to the list
          setSelectedItems([...selectedItems, id]);
        }
      };

     function showAll() {
        setItem(prevValue=>{
          return prevValue
        })
      } 

              // -------------Show completed item list---------------------
      function handleCompletedItems(){
        // Filter out the selected items from the original array
        const completedItems = items.filter((item, id) => selectedItems.includes(id));
      
        // Update the state with the new array
        setItem(completedItems);
      
        // Clear the selected items list
        setSelectedItems([]);
      };
            // ---------------Delete Selected Items, show Active Items--------------------------
      function handleDeleteSelected(){
        // Filter out the selected items from the original array
        const updatedItems = items.filter((item, id) => !selectedItems.includes(id));
      
        // Update the state with the new array
        setItem(updatedItems);
      
        // Clear the selected items list
        setSelectedItems([]);
      };
    
          //-------------delete All Items--------------
      function deleteAll(id){
        setItem([]);
      } 
    
                // App Components
        return (
          <div className="motherdiv" style={{color:listColor? "hsl(233, 11%, 84%)":" hsl(235, 21%, 11%)"}}>
            <div className="todolist" >
                        {/* ---------------------- CreateList.jsx-------------------- */}
              <CreateList 
                onAdd= {addNote}
             />
              <div className="boxshadow" style={{boxShadow: listColor? "1px 1px 5px hsl(235, 24%, 19%)": "1px 1px 5px hsl(236, 33%, 92%)"}}>
                <div className="total"  style={{backgroundColor:listColor? "hsl(235, 24%, 19%)": "hsl(0, 0%, 98%)"}}>

                        {/*---------------Todolist.jsx-----------  */}
                  {items.map((item, index) => {
                      return (
                        <Item
                           key= {index}
                           id= {index}
                           text={item}
                           button={deleteItem}
                           handleSelected={handleCheckboxChange}
                           includeItemsId={selectedItems.includes(item.id)}
                        />
                      );
                  })}

                    {/*----------- Base.jsx----------------- */}
                 <Base
                    number={items.length}
                    itemLeft={items.length<=1? "item left": "items left"}
                    delAll={deleteAll}
                    matches={matches}
                    deleteSelected={handleDeleteSelected}
                    completed={handleCompletedItems}
                    all={showAll}
                 />
                </div>
              </div>
            </div>
                {/*----------- Body.jsx----------------- */}
            <Body
              changeListColor={change}
            />

          </div>

        );
}
      
export default App;
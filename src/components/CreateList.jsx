import React, { useState } from "react";
import { UilArrowCircleRight } from '@iconscout/react-unicons'




function CreateList(props) {


    
    const [note, setNote]= useState("");
    
     function handleChange(event){
    const newValue = event.target.value;

    setNote(newValue)}

    function set(event) {
        props.onAdd(note)
        event.preventDefault();
        setNote("");

        
    }

    return <div className="formdiv">
    
        <form>
           <textarea   className="textarea" onChange={handleChange} name="content" value={note}  placeholder="Create a new todo.." rows="2" required></textarea>
        </form><UilArrowCircleRight onClick={set}  color="#C747D0" size="40" />
    </div>
    
}


  
        
export default CreateList;
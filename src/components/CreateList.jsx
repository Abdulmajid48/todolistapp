import React, { useState } from "react";


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

    return <div>
        <form>
           <textarea   className="textarea" onChange={handleChange} name="content" value={note}  placeholder="content" rows="2" required></textarea>
           <button onClick={set}></button>
        </form>
    </div>
    
}


  
        
export default CreateList;
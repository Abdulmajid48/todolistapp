import React, { useState } from "react";
import { UilArrowCircleRight } from '@iconscout/react-unicons'


function CreateList(props) {

    // your todo note

    const [note, setNote]= useState("");
    
    // set your note 
    function handleChange(event){
        const newValue = event.target.value;

        setNote(newValue)
    }

    // Add your todo note to an Array
    function set(event) {
        props.onAdd(note)
        event.preventDefault();
        setNote("");    
    }


    return (
        <div className="formdiv">

             {/* Todo Text Area */}
            <form>
                <textarea   
                className="textarea" 
                onChange={handleChange} 
                name="content" 
                value={note}  
                placeholder="Create a new todo.." 
                rows="2" 
                required>   
                </textarea>
            </form>

            {/* Submit your todo note and add it to Items Array */}
            <UilArrowCircleRight 
                onClick={set}  
                color=" hsl(280, 87%, 65%)" 
                size="40" 
            />
        </div>
    )
    
}
        
export default CreateList;
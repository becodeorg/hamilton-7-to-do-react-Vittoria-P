import React from 'react'
import { useRef } from 'react';

function NewToDo ({addTodo}){
    const inputRef = useRef();

    const handleClick = () => {
        const inputElement = inputRef.current;
        addTodo(inputElement.value);    
    }
    return (
        <div>
            <input type="text" ref={inputRef}  placeholder="Search..."></input>
            <button onClick={handleClick}>Add To Do</button>
        </div>
    );
}

export default NewToDo;
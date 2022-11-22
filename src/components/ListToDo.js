import React from 'react'

function ListToDo ({todos}){
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} >
                    <input name="checkbox" type="checkbox" /> 
                    <label htmlFor="checkbox">
                        {todo.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default ListToDo;

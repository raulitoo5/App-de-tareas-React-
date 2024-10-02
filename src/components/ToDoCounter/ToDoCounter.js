import { TodoContext } from '../../TodoContext/TodoContext';
import './ToDoCounter.css';
import React from 'react';

function ToDoCounter(){

    const {
      todosCompletados,
      totalTodos,
    } = React.useContext(TodoContext);

    console.log("en counter: ", totalTodos);
    return(
      console.log("iajsf", totalTodos),
      <h1 className='ToDoCounter'>
        
        Has completado <span>{todosCompletados}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    );
  }

  export {ToDoCounter};
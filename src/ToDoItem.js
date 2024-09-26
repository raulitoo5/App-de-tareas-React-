import './ToDoItem.css';
import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa'; // Importamos los íconos


function TodoItem({text, completado, onComplete, onDelete}){
    return(
      <li className="TodoItem">
        <span 
          className= {`Icon Icon-check ${completado && "Icon-check--active"}`}
          onClick={onComplete}
        >
          <FaCheck />
        </span>

        <p  className={`TodoItem-p ${completado && "TodoItem-p--complete"} `}> {text} </p>
        <span 
          className="Icon Icon-delete"
          onClick={onDelete}
        > 
          <FaTrash />
        </span>
      </li>
    );
  }
  
export {TodoItem}
import './ToDoList.css';
import React from 'react';

function ToDoList(props){
    return(
        <ul className="TodoList">
            {props.children}
        </ul>
    );
}

export {ToDoList}
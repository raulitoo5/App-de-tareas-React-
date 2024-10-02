import { useContext } from 'react';
import './ToDoSearch.css';
import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
 
function ToDoSearch(){

    const{
        buscador,
        setBuscador
    } = useContext(TodoContext);
    
    return(
        <input 
            className='TodoSearch' 
            placeholder="Cortar cebolla"
            value={buscador}
            onChange={(event) => {
                setBuscador(event.target.value);
            }}   
        />
    );
}

export {ToDoSearch};
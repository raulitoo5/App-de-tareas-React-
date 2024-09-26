import { useState } from 'react';
import './ToDoSearch.css';
import React from 'react';
 
function ToDoSearch({buscador, setBuscador}){

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
import './CreateToDoButton.css';
import React from 'react';

function CreateTodoButton({setOpenModal}){
    return(
        <button 
            className='CreateToDoButton'
            onClick={
                () => {setOpenModal (state => !state)}
            }
            >+</button>
    );
}

export {CreateTodoButton};
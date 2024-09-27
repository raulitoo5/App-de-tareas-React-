import { useState } from 'react';
import './TodosLoading.css';
import React from 'react';
 
function TodosLoading(){

    return(
        <div className='TodosLoading-container'>
            <span className='TodosLoading-completeIcon'>

            </span>

            <p className='TodosLoading-text'>
                Cargando...
            </p>

            <span className='TodosLoading-deleteIcon'>

            </span>
        </div>
    );
}

export {TodosLoading};
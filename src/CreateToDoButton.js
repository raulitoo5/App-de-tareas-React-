import './CreateToDoButton.css';

function CreateTodoButton(){
    return(
        <button 
            className='CreateToDoButton'
            onClick={
                (event) => { console.log("le diste click al boton");
                }
            }
            >+</button>
    );
}

export {CreateTodoButton};
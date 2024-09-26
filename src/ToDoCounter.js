import './ToDoCounter.css';

function ToDoCounter({completados, total}){
    return(
      <h1 className='ToDoCounter'>
        Has completado <span>{completados}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }

  export {ToDoCounter};
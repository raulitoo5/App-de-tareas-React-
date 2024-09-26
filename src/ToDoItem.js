import './ToDoItem.css';

function TodoItem({text, completado}){
    return(
      <li className="TodoItem">
        <span className= {`Icon Icon-check ${completado && "Icon-check--active"}`}>V</span>
        <p  className={`TodoItem-p ${completado && "TodoItem-p--complete"} `}> {text} </p>
        <span className="Icon Icon-delete"> X </span>
      </li>
    );
  }
  
export {TodoItem}
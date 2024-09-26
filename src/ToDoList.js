import './ToDoList.css';

function ToDoList(props){
    return(
        <ul className="TodoList">
            {props.children}
        </ul>
    );
}

export {ToDoList}
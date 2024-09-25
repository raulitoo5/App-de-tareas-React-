import logo from './platzi.webp';
import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch.js';
import { TodoItem } from './ToDoItem.js';
import { CreateTodoButton } from './CreateToDoButton.js';
import React from 'react';

const defaultToDos = [
  {text: 'Hacer la cena', completado: false},
  {text: 'Imprimir', completado: false},
  {text: 'Lavar la ropa', completado: true},
  {text: 'Dormir', completado: true}

]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter completados={3} total={23}/>
      <ToDoSearch/>

      <ToDoList>
        {defaultToDos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} />
        ))}
      </ToDoList>

      <CreateTodoButton/>
         
    </React.Fragment>
  );
}

export default App;

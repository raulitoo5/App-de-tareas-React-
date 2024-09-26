import logo from './platzi.webp';
import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch.js';
import { TodoItem } from './ToDoItem.js';
import { CreateTodoButton } from './CreateToDoButton.js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const defaultToDos = [
  {text: 'Hacer la cena', completado: false},
  {text: 'Imprimir', completado: false},
  {text: 'Lavar la ropa', completado: true},
  {text: 'Dormir', completado: true}


]

function App() {

  const [todos, setTodos] = useState(defaultToDos);
  const [buscador, setBuscador] = useState('');

  // Con la función filter y esas condiciones estamos obteniendo
  // todos los todos con el campo completado a true
  // Con la doble negación estamos conviertiendo el valor a boolenao
  // De forma que si por ejemplo tuviera un string se convertiría en bool
  const todosCompletados = todos.filter(todo => !!todo.completado).length;
  const totalTodos = todos.length;

  // Con filter se crea un nuevo array con los elementos que cumplan
  // la condición
  const todosBuscados = todos.filter( (todo) => {
   return todo.text.toLowerCase().includes(buscador.toLowerCase());
  })

  console.log("el usuario escribe: ", buscador);
  return (
    <React.Fragment>
      <ToDoCounter 
        completados={todosCompletados} 
        total={totalTodos}
      />

      <ToDoSearch
        buscador={buscador}
        setBuscador={setBuscador}
      />

      <ToDoList>
        {todosBuscados.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completado={todo.completado} />
        ))}
      </ToDoList>

      <CreateTodoButton/>
         
    </React.Fragment>
  );
}

export default App;

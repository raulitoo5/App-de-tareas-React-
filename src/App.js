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

  const completarTodo = (text) => {
    // Copiamos el array de todos en nuevosTodos 
    // El operador ... es para que se copie todo el contendio
    const nuevosTodos = [...todos];
    // Con esta funcion devolvemos el índice del todo que corresponda
    // Para cada todo verificamos si su texto coincide con el que texto
    // que le hemos pasado que es lo que estamos buscando
    const todoIndex = nuevosTodos.findIndex(
      (todo) => todo.text == text
    );

    nuevosTodos[todoIndex].completado = 'true';
    setTodos(nuevosTodos);

  }

  const deleteTodo = (text) => {
    const nuevosTodos = todos.filter(
      (todo) => todo.text != text
    )
    setTodos(nuevosTodos);
  }

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
            completado={todo.completado} 
            onComplete={ () => completarTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateTodoButton/>
         
    </React.Fragment>
  );
}

export default App;

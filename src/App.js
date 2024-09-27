import './App.css';
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter.js';
import { ToDoList } from './components/ToDoList/ToDoList.js';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch.js';
import { TodoItem } from './components/ToDoItem/ToDoItem.js';
import { CreateTodoButton } from './components/CreateToDoButton/CreateToDoButton.js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { error, loading, useLocalStorage } from './hooks/useLocalStorage.js';
import { TodosLoading } from './components/TodosLoading/TodosLoading.js';

function App() {

  // Lo de los puntos es para renombrar los elementos del objeto
  // ya que si no ponemos : tenemos que poner el mismo nombre
  // que hemos especificado que iba a devolver el hook
  const {item: todos, actualizarItem: actualizarTodos, loading, error} = useLocalStorage('todos_v1',[]);
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
    actualizarTodos(nuevosTodos);
  }

  const deleteTodo = (text) => {
    const nuevosTodos = todos.filter(
      (todo) => todo.text != text
    )
    actualizarTodos(nuevosTodos);
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
        {loading && 
        <>
          <TodosLoading />
          <TodosLoading />
          <TodosLoading />
        </>
        }
        {error && <p> Error: {error} </p>}
        {(!loading && todosBuscados.length ==0) && <p> Crea tu primer todo </p>}
        
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

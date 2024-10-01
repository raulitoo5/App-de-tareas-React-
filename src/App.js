import './App.css';
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter.js';
import { ToDoList } from './components/ToDoList/ToDoList.js';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch.js';
import { TodoItem } from './components/ToDoItem/ToDoItem.js';
import { CreateTodoButton } from './components/CreateToDoButton/CreateToDoButton.js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { error, loading, useLocalStorage } from './hooks/useLocalStorage.js';
import { TodosLoading } from './skeletons/TodosLoading/TodosLoading.js';
import { TodoProvider } from './TodoContext/TodoContext.js';
import { TodoContext } from './TodoContext/TodoContext.js';

function App() {

  return (
    <TodoProvider>

      <React.Fragment>
        <ToDoCounter />

        <ToDoSearch />

        <TodoContext.Consumer>
          {/*         Esto lo hacemos porque los contexto usan las renders functions por lo que tenemos
        que hacer un arrow function para que se renderize dentro del contexto. */}

          {({
            loading,
            error,
            todosBuscados,
            completarTodo,
            deleteTodo,
          }) => (
            <ToDoList>
              {loading &&
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                </>
              }
              {error && <p> Error: {error} </p>}
              {(!loading && todosBuscados.length == 0) && <p> Crea tu primer todo </p>}

{console.log("todosbuscados", todosBuscados)}
              {todosBuscados.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completado={todo.completado}
                  onComplete={() => completarTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </ToDoList>
          )}

        </TodoContext.Consumer>


        <CreateTodoButton />
      </React.Fragment>
    </TodoProvider>
  );

}

export default App;

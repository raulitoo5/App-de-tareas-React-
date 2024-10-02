import './App.css';
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter.js';
import { ToDoList } from './components/ToDoList/ToDoList.js';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch.js';
import { TodoItem } from './components/ToDoItem/ToDoItem.js';
import { CreateTodoButton } from './components/CreateToDoButton/CreateToDoButton.js';
import React from 'react';
import { TodosLoading } from './skeletons/TodosLoading/TodosLoading.js';
import { TodoContext } from './TodoContext/TodoContext.js';
import {Modal} from './Modal/Modal.js';
import { TodoForm } from './components/TodoForm/TodoForm.js';

function AppUI() {

  const {
    loading,
    error,
    todosBuscados,
    completarTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
      <>
        <ToDoCounter />

        <ToDoSearch />
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
        <CreateTodoButton 
            setOpenModal={setOpenModal}
            openModal={openModal}
        />

        {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
        )}
      </>
  );
}

export { AppUI };

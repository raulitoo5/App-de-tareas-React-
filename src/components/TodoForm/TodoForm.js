import React, { useContext, useState } from "react";
import './TodoForm.css';
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = useContext(TodoContext);

    const [valorInput, setValorInputo] = useState('');

    const onSubmit = (event) => {
        // El metodo preventDefault() evita que cuando el evento se ejecute se vuelva a recargar la página
        // es decir, evitamos su comportamiento por defecto que es el de recargar la página.
        event.preventDefault();
        setOpenModal(false);
        addTodo(valorInput);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const handleChange = (event) => {
        setValorInputo(event.target.value);
    }; 

    return (
        <form onSubmit={onSubmit}>
            <label> Escribe tu nuevo TODO </label>
            <textarea 
                placeholder='Hacer la cama' 
                value={valorInput}
                onChange={handleChange}
            />

            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}> Cancelar </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add"> Añadir </button>
            </div>
        </form>
    );
}

export { TodoForm }
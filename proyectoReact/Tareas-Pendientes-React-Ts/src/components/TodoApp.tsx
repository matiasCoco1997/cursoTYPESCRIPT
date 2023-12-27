import { useState } from "react"

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>('');

    const [listaTareas, setListaTarea] = useState<string[]>([]);

    const hanleAddTask = () => {

    }

    return (
        <div>
            <h1>Lista de tareas</h1>  
            
            <div>
                <input type="text" 
                    value={nuevaTarea} 
                    onChange={(e) => setNuevaTarea (e.target.value)} 
                    placeholder="Nueva Tarea"
                />

                <button onClick={hanleAddTask}></button>
            </div>  
        </div>
    )
}
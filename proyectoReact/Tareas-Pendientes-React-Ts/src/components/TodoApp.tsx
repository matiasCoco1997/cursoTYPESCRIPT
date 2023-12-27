import { useState } from "react"

export const TodoApp = () => {

    const [nuevaTarea, setNewTarea] = useState('');

    return (
        <div>
            <h1>Lista de tareas</h1>  
            
            <div>
                <input type="text" 
                    value={nuevaTarea} 
                    onChange={(e) => setNewTarea (e.target.value)} 
                    placeholder="Nueva Tarea"
                />

            </div>  
        </div>
    )
}
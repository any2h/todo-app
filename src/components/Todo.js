import { useState } from "react"

export default function Todo({ id, value, isEditing, isDone, setTodos }) {
    const [newName, setNewName] = useState(value)

    function handleChange(e) {
        setNewName(e.target.value)
    }

    function editTodo(e, id) {
        e.preventDefault()
        setTodos(prevTodos => prevTodos.map(todo => 
            todo.id === id ? {...todo, value: newName} : todo
        ))
        toggleEdit(id)
    }

    function deleteItem(id) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    function toggleEdit(id) {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
        ))
    }

    function toggleDone(id) {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo    
        ))
    }

    return (
        <li
            id={id}
            onDoubleClick={() => toggleEdit(id)}
        >
            <input type="checkbox" checked={isDone} onChange={() => toggleDone(id)} />
            {isEditing
                ? 
                <form onSubmit={(e) => editTodo(e, id)}>
                    <input
                        value={newName}
                        onChange={handleChange}
                    />
                </form>
                :
                <div style={{textDecoration: isDone && 'line-through'}}>{value}</div>
            }
            <button onClick={() => deleteItem(id)}>Delete</button>
        </li> 
    )
}

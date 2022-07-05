import { useState } from "react"
import { StyledTodo } from "./styles/StyledTodo"
import DeleteBtn from "./styles/DeleteBtn"

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
        <StyledTodo
            id={id}
            onDoubleClick={() => toggleEdit(id)}
        >
            <div>
                <input className="custom-checkbox" type="checkbox" checked={isDone}  />
                <label onClick={() => toggleDone(id)}></label>
                {isEditing
                    ? 
                    <form onSubmit={(e) => editTodo(e, id)}>
                        <input
                            value={newName}
                            onChange={handleChange}
                        />
                    </form>
                    :
                    <div style={{textDecoration: isDone && 'line-through', opacity: isDone && '.5'}}>{value}</div>
                }
            </div>

            <DeleteBtn onClick={() => deleteItem(id)} />
        </StyledTodo> 
    )
}

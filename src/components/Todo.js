import { useState } from "react"
import { StyledTodo } from "./styles/StyledTodo"
import DeleteBtn from "./DeleteBtn"
import Checkbox from "./Checkbox"

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
        if (!isDone) {
            setTodos(prevTodos => prevTodos.map(todo =>
                todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
            ))
        }
    }

    function toggleDone(id) {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo    
        ))
    }

    return (
        <StyledTodo
            id={id}
        >
            <div>
                <Checkbox toggleDone={() => toggleDone(id)} isDone={isDone} />
                {isEditing
                    ? 
                    <form onSubmit={(e) => editTodo(e, id)}>
                        <input
                            value={newName}
                            onChange={handleChange}
                        />
                    </form>
                    :
                    <div style={{
                        textDecoration: isDone && 'line-through',
                        opacity: isDone && '.5'}}
                        onDoubleClick={() => toggleEdit(id)}
                    >
                        {value}
                    </div>
                }
            </div>

            <DeleteBtn onClick={() => deleteItem(id)} />
        </StyledTodo> 
    )
}

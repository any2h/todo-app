import { useState, useEffect, useRef } from "react"
import { StyledTodo } from "./styles/StyledTodo"
import { usePrevios } from "../hooks/usePrevious"
import DeleteBtn from "./DeleteBtn"
import Checkbox from "./Checkbox"

export default function Todo({ id, name, completed, editTask, toggleTaskCompleted, deleteTask }) {
    const [newName, setNewName] = useState(name)
    const [isEditing, setEditing] = useState(false)
    const inputRef = useRef(null)
    const wasEditing = usePrevios(isEditing)

    function handleChange(e) {
        setNewName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        editTask(id, newName)
        setEditing(false)
    }

    // function toggleEdit(id) {
    //     if (!completed) {
    //         setTodos(prevTodos => prevTodos.map(todo =>
    //             todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
    //         ))
    //     }
    // }

    // function turnEditingOff(e) {
    //     if (e.target !== inputRef.current) {
    //         setTodos(prevTodos => prevTodos.map(todo =>
    //             todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
    //         ))
    //     }
    // }

    useEffect(() => {
        if (!wasEditing && isEditing) {
            // window.addEventListener('click', turnEditingOff)
            inputRef.current.focus()
        }

        return () => {
            // window.removeEventListener('click', turnEditingOff)
        }

    }, [wasEditing, isEditing])

    return (
        <StyledTodo
            id={id}
        >
            <div>
                
                {isEditing
                    ? 
                    <form onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            value={newName}
                            onChange={handleChange}
                        />
                    </form>
                    :
                    <>
                        <Checkbox toggleDone={() => toggleTaskCompleted(id)} completed={completed} />
                        <div style={{
                            textDecoration: completed && 'line-through',
                            opacity: completed && '.5'}}
                            onDoubleClick={() => setEditing(true)}
                        >
                            {name}
                        </div>
                    </>
                }
                
                {/* {isEditing
                    ? 
                    <form onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            value={newName}
                            onChange={handleChange}
                        />
                    </form>
                    :
                    <div style={{
                        textDecoration: completed && 'line-through',
                        opacity: completed && '.5'}}
                        onDoubleClick={() => setEditing(true)}
                    >
                        {value}
                    </div>
                } */}
            </div>

            <DeleteBtn onClick={() => deleteTask(id)} />
        </StyledTodo> 
    )
}

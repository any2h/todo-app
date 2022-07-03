import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Header({setTodos, ...props}) {
    const [todoName, setTodoName] = useState('')

    function handleChange(e) {
        setTodoName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos(prevTodos => [{id: nanoid(), value: todoName, isDone: false, isEditing: false}, ...prevTodos])
        setTodoName('')
    }

    return (
        <header>
            <h1>T O D O</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="what needs to be done?"
                    value={todoName}
                    onChange={handleChange}
                />
            </form>
        </header>
    )
}

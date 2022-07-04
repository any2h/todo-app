import { useState } from 'react'
import { nanoid } from 'nanoid'
import { StyledHeader } from './styles/StyledHeader'
import ThemeToggler from './ThemeToggler'

export default function Header({setTodos, theme, toggleTheme, ...props}) {
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
        <StyledHeader>
            <div>
                <h1>T O D O</h1>
                <ThemeToggler />
            </div>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="what needs to be done?"
                    value={todoName}
                    onChange={handleChange}
                />
            </form>
        </StyledHeader>
    )
}

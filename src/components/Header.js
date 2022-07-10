import { useState } from 'react'
import { StyledHeader } from './styles/StyledHeader'
import ThemeToggler from './ThemeToggler'

export default function Header({ addTask, theme, toggleTheme }) {
    const [taskName, setTaskName] = useState('')
        
    function handleChange(e) {
        setTaskName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTask(taskName)
        setTaskName('')
    }

    return (
        <StyledHeader>
            <div>
                <h1>T O D O</h1>
                <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
            </div>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={taskName}
                    onChange={handleChange}
                />
            </form>
        </StyledHeader>
    )
}

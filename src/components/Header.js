import { useState } from 'react'
import { nanoid } from 'nanoid'
import { StyledHeader } from './styles/StyledHeader'
import ThemeToggler from './ThemeToggler'
import Checkbox from './Checkbox'

export default function Header({ todos, setTodos, theme, toggleTheme }) {
    const [todoName, setTodoName] = useState('')
    const allDone = todos.every(todo => todo.isDone)
        
    function handleChange(e) {
        setTodoName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos(prevTodos => [...prevTodos, {id: nanoid(), value: todoName, isDone: false, isEditing: false}])
        setTodoName('')
    }

    function toggleAllDone() {
        allDone
            ? setTodos(prevTodos => prevTodos.map(todo =>
                ({...todo, isDone: todo.isDone = false}))) 
            :
            setTodos(prevTodos => prevTodos.map(todo =>
                ({...todo, isDone: todo.isDone = true})))
    }

    return (
        <StyledHeader>
            <div>
                <h1>T O D O</h1>
                <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
            </div>
            
            <form onSubmit={handleSubmit}>
                {todos.length !== 0 && <div>
                    <Checkbox toggleDone={toggleAllDone} isDone={allDone}/>
                </div>}
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={todoName}
                    onChange={handleChange}
                />
            </form>
        </StyledHeader>
    )
}

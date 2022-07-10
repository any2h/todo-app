import { useEffect, useState } from "react"
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "./components/styles/GlobalStyles"
import { LightTheme, DarkTheme } from "./components/styles/Themes"
import { useDarkMode } from "./hooks/useDarkMode"
import Checkbox from './components/Checkbox'
import { nanoid } from "nanoid"
import Header from "./components/Header"
import Todo from "./components/Todo"
import Footer from "./components/Footer"

const StyledApp = styled.div`
    max-width: 588px;
    margin: 3rem auto 0;
    padding-inline: 1.5rem;

    > div {
        box-shadow: 0px 40px 60px -25px rgba(0, 0, 0, 0.1), 
                    0px 20px 40px -25px rgba(0, 0, 0, 0.1);
    }

    > p {
        margin-top: 3rem;
        text-align: center;
        font-size: .875rem;
        color: ${({theme}) => theme.footerFontColor};

        @media (max-width: 35em) {
            margin-top: 6rem;
        }
    }

    section {
        position: relative;

        > div {
            display: flex;
            position: absolute;
            top: -68px;
            left: 24px;
        }
    }
`

const defaultTodos = [
    {id: nanoid(), name: 'Have breakfast', completed: true},
    {id: nanoid(), name: 'Complete Todo App', completed: true},
    {id: nanoid(), name: '10 minutes meditation', completed: false},
    {id: nanoid(), name: 'Walk the dog', completed: false},
]

const filterNames = {
    All: () => true,
    Active: todo => !todo.completed,
    Completed: todo => todo.completed
}

export default function App() {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || defaultTodos)
    const [filter, setFilter] = useState('All')
    const allDone = todos.every(todo => todo.completed)
    const [theme, setTheme] = useDarkMode()
    const themeMode = theme === 'light' ? LightTheme : DarkTheme

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function addTask(name) {
        if (name) {
            setTodos(prevTodos => [...prevTodos, {id: nanoid(), name, completed: false}])
        }
    }

    function editTask(id, newName) {
        setTodos(prevTodos => prevTodos.map(todo => 
            todo.id === id ? {...todo, name: newName} : todo
        ))
    }

    function toggleTaskCompleted(id) {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo    
        ))
    }

    function deleteTask(id) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    function toggleAllCompleted() {
        allDone
            ? setTodos(prevTodos => prevTodos.map(todo =>
                ({...todo, completed: todo.completed = false}))) 
            : setTodos(prevTodos => prevTodos.map(todo =>
                ({...todo, completed: todo.completed = true})))
    }

    const todoElements = todos.filter(filterNames[filter]).map(todo => {
        return <Todo 
                    key={todo.id}
                    {...todo}
                    editTask={editTask}
                    toggleTaskCompleted={toggleTaskCompleted}
                    deleteTask={deleteTask}
                />
    })

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <StyledApp>
                <div>
                    <Header
                        addTask={addTask}
                        theme={theme}
                        toggleTheme={setTheme}
                    />

                    <section>
                        {todos.length !== 0 && <div>
                            <Checkbox toggleDone={toggleAllCompleted} completed={allDone}/>
                        </div>}
                        <ul>
                            {todoElements}
                        </ul>
                    </section>

                    {todos.length !== 0 && 
                        <Footer
                            filterNames={Object.keys(filterNames)}
                            todos={todos}
                            setTodos={setTodos}
                            filter={filter}
                            setFilter={setFilter}
                        />
                    }
                </div>
                {todos.length !== 0 && <p>Double click on the task to edit</p>}
            </StyledApp>
        </ThemeProvider>
    );
}

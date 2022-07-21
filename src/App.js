import { useEffect, useState } from "react"
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "./components/styles/GlobalStyles"
import { LightTheme, DarkTheme } from "./components/styles/Themes"
import { useDarkMode } from "./hooks/useDarkMode"
import { nanoid } from "nanoid"
import Header from "./components/Header"
import Todo from "./components/Todo"
import Footer from "./components/Footer"
import TodoList from "./components/TodoList"

const StyledApp = styled.div`
    max-width: 588px;
    margin: 3rem auto 0;
    padding-inline: 1.5rem;

    > div {
        box-shadow: 0px 40px 60px -25px rgba(0, 0, 0, 0.1), 
                    0px 20px 40px -25px rgba(0, 0, 0, 0.1);
    }

    > p {
        margin-top: 2rem;
        text-align: center;
        font-size: .8125rem;
        color: ${({theme}) => theme.footerFontColor};

        @media (max-width: 35em) {
            margin-top: 6rem;
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
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || defaultTodos),
        [filter, setFilter] = useState('All'),
        allDone = todos.every(todo => todo.completed),
        [theme, setTheme] = useDarkMode(),
        themeMode = theme === 'light' ? LightTheme : DarkTheme;

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

    function clearCompleted() {
        setTodos(prevTodos => prevTodos.filter(todo => todo.completed === false))
    }

    const todoElements = todos.filter(filterNames[filter]).map(todo => 
        <Todo 
            key={todo.id}
            {...todo}
            editTask={editTask}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
        />
    )

    const filterBtns = Object.keys(filterNames).map((name, i) =>
        <button
            key={i}
            name={name}
            data-pressed={name === filter}
            onClick={() => setFilter(name)}
        >
            {name}
        </button>
    )

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

                    <TodoList
                        toggleAllCompleted={toggleAllCompleted}
                        todosLength={todos.length}
                        allDone={allDone}
                    >
                        {todoElements}
                    </TodoList>

                    {todos.length !== 0 && 
                        <Footer
                            todos={todos}
                            clearCompleted={clearCompleted}
                        >
                            {filterBtns}
                        </Footer>
                    }
                </div>
                {todos.length !== 0 && <p>Double click to edit a task</p>}
            </StyledApp>
        </ThemeProvider>
    );
}

import { useEffect, useState } from "react"
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "./components/styles/GlobalStyles"
import { LightTheme, DarkTheme } from "./components/styles/Themes"
import { useDarkMode } from "./components/useDarkMode"
import Header from "./components/Header"
import Todo from "./components/Todo"
import Footer from "./components/Footer"


const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 540px;
    margin: 3rem auto 0;
`

const filterNames = {
    All: () => true,
    Active: todo => !todo.isDone,
    Completed: todo => todo.isDone
}

export default function App() {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])
    const [filter, setFilter] = useState('All')
    const [theme, setTheme] = useDarkMode()
    const themeMode = theme === 'light' ? LightTheme : DarkTheme

    console.log(todos)
    console.log(filter)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const todoElements = todos.filter(filterNames[filter]).map((todo, i) => {
        return <Todo 
                    key={i}
                    {...todo}
                    setTodos={setTodos}
                />
    })

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <StyledApp>
                    <Header
                        setTodos={setTodos}
                        theme={theme}
                        toggleTheme={setTheme}
                    />

                    <section>
                        <ul>
                            {todoElements}
                        </ul>
                    </section>

                    <Footer
                        filterNames={Object.keys(filterNames)}
                        setTodos={setTodos}
                        setFilter={setFilter}
                        todoCount={todos.length}
                    />
                </StyledApp>
            </>
        </ThemeProvider>
    );
}

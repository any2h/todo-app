import { StyledFooter } from "./styles/StyledFooter"

export default function Footer({ filterNames, todos, setTodos, filter, setFilter }) {

    const filterBtns = filterNames.map((name, i) =>
        <button
            key={i}
            name={name}
            data-pressed={name === filter}
            onClick={() => setFilter(name)}
        >
            {name}
        </button>
    )

    function clearCompleted() {
        setTodos(prevTodos => prevTodos.filter(todo => todo.isDone === false))
    }

    const todoCount = todos.filter(todo => !todo.isDone).length
    const todoDone = todos.filter(todo => todo.isDone).length
    
    return (
        <StyledFooter>
            <span>{todoCount} {todoCount === 1 ? 'item left' : 'items left'}</span>
            <div>
                {filterBtns}
            </div>
            <button style={{opacity: todoDone && 1}} onClick={clearCompleted}>Clear Completed</button>
        </StyledFooter>
    )
}

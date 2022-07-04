import { StyledFooter } from "./styles/StyledFooter"

export default function Footer({ filterNames, setTodos, setFilter, todoCount}) {

    const filterBtns = filterNames.map(filter =>
        <button 
            onClick={filterTodos}
        >
            {filter}
        </button>
    )

    function clearCompleted() {
        setTodos(prevTodos => prevTodos.filter(todo => todo.isDone === false))
    }

    function filterTodos(e) {
        setFilter(e.target.textContent)
    }

    return (
        <StyledFooter>
            <span>{todoCount} items left</span>
            <div>
                {filterBtns}
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
        </StyledFooter>
    )
}

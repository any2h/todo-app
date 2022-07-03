
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
        <footer>
            <span>{todoCount} items left</span>
            {filterBtns}
            <button onClick={clearCompleted}>Clear Completed</button>
        </footer>
    )
}

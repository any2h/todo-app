import { StyledFooter } from "./styles/StyledFooter"

export default function Footer({ clearCompleted, todos, children }) {
    const todoCount = todos.filter(todo => !todo.completed).length
    const todoDone = todos.filter(todo => todo.completed).length
    
    return (
        <StyledFooter>
            <span>{todoCount} {todoCount === 1 ? 'item left' : 'items left'}</span>
            <div>
                {children}
            </div>
            <button style={{opacity: todoDone && 1}} onClick={clearCompleted}>Clear Completed</button>
        </StyledFooter>
    )
}

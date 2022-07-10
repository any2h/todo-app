import { StyledTodoList } from "./styles/StyledTodoList"
import Checkbox from "./Checkbox"

export default function TodoList({todosLength, toggleAllCompleted, allDone, children}) {
    return (
        <StyledTodoList>
            {todosLength !== 0 &&
                <div>
                    <Checkbox toggleDone={toggleAllCompleted} completed={allDone}/>
                </div>
            }
            <ul>
                {children}
            </ul>
        </StyledTodoList>
    )
}

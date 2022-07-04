import styled from "styled-components";

export const StyledTodo = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 1.125rem 1rem; */
    padding-inline: 1rem;
    height: 65px;
    background-color: ${({theme}) => theme.bgColor};

    &:first-child {
        border-radius: 7.5px 7.5px 0 0;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid ${({theme}) => theme.borderColor};
    }
    
    > div {
        display: flex;
        /* align-items: center; */
        gap: 1rem;

        > form {
            display: flex;
            align-items: center;

            input {
                position: absolute;
                height: 100%;
                border: 0;
                /* outline: 1px solid palegoldenrod; */
                box-shadow: inset 0 -1px 5px 0 hsl(237,14%,26%);
            }
        } 
    }

    > button {
        opacity: 0;
    }

    &:hover > button {
        opacity: 1;
    }
`

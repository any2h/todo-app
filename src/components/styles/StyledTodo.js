import styled from "styled-components";

export const StyledTodo = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.5rem;
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
        transition: ${({theme}) => theme.transition};
    }
    
    > div {
        cursor: pointer;
        display: flex;
        width: 100%;
        gap: .5rem;

        @media (max-width: 35em) {
            gap: .25rem;
        }

        > form {
            display: flex;
            align-items: center;

            input {
                position: absolute;
                width: 60%;
                height: 100%;
                margin-left: 2.75rem;
                border: 0;
                box-shadow: inset 0 -1px 5px 0 hsl(237, 14%, 36%);
            }
        }

        > div {
            width: 100%;
            margin-top: 2.5px;
        }
    }

    > button {
        opacity: 0;
        height: 18px;

        @media (max-width: 35em) {
            opacity: 1;
        }
    }

    &:hover > button {
        opacity: 1;
    }
`

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

    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .custom-checkbox+label::before {
        content: '';
        width: 1.375rem;
        height: 1.375rem;
        outline: 1px solid hsla(235.4, 31.7%, 92%, 0.3);
        border-radius: 50%;
        transition: all .15s ease-in-out;
    }

    .custom-checkbox+label::after {
        position: relative;
        content: '';
        width: 1rem;
        height: 1rem;
        background-image: url('./images/icon-check.svg');
        background-repeat: no-repeat;
        background-size: 80%;
        left: -44.5%;
        bottom: -15%;
        opacity: 0;
        transition: all .15s ease-in-out;
    }

    .custom-checkbox:checked+label::before {
        background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }

    .custom-checkbox:checked+label::after {
        opacity: 1;
    }

    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
        outline: 1px solid #8D82BE;
    }
`

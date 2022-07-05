import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: ${({theme}) => theme.transition};
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.125rem;
        color: ${({theme}) => theme.fontColor};
        line-height: 1.5;
        min-height: 100vh;
        margin: 0;
        background-color: ${({theme}) => theme.body};
        background-image: url(${props => props.theme.bgImage});
        background-repeat: no-repeat;
        background-position: top;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    img {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
        background-color: ${({theme}) => theme.bgColor};
        border: 0;
    }

    input:focus {
        outline: 0;
    }

    input[type="checkbox"] {
        cursor: pointer;
    }

    button {
        cursor: pointer;
        font-weight: 700;
        border: 0;
        background: transparent;
        transition: all .10s ease-in-out;

        &:hover {
            color: ${({theme}) => theme.btnHover};
        }

        &[data-pressed="true"] {
            color: hsl(220, 98%, 61%);
        }
    }
`

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.125rem;
        color: ${({theme}) => theme.fontColor};
        line-height: 1.5;
        min-height: 100vh;
        margin: 0;
        background-color: ${({theme}) => theme.body};
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
        /* border: 0; */
    }

    input:focus {
        outline: 0;
    }

    button {
        border: 0;
        background: transparent;
    }
`

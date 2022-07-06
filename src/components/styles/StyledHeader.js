import styled from "styled-components";

export const StyledHeader = styled.header`

    h1 {
        color: #fff;
    }

    > div {
        display: flex;
        justify-content: space-between;
    }

    form {
        position: relative;

        > div {
            position: absolute;
            display: flex;
            top: 19px;
            left: 24px;
        }

        > input {
            width: 100%;
            border: 0;
            padding: 1.125rem 1rem;
            margin-bottom: 1.5rem;
            border-radius: 7.5px;
            text-indent: 3.125rem;
        }
    }
`

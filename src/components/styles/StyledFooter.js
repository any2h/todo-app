import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem; 
    background-color: ${({theme}) => theme.bgColor};
    font-size: .875rem;
    color: ${({theme}) => theme.footerFontColor};
    border-radius: 0 0 7.5px 7.5px;

    /* > * {
        flex: 1;
    } */

    > div {
        display: flex;
        justify-content: center;
        gap: 1.25rem;
        padding-left: 2rem;

        @media (max-width: 35em) {
            font-size: .9375rem;
            position: absolute;
            height: 48px;
            width: 100%;
            top: 125%;
            left: 50%;
            transform: translateX(-50%);
            gap: 2rem;
            padding-left: .75rem;
            background-color: ${({theme}) => theme.bgColor};
            border-radius: 7.5px;
        }
    }

    > button {
        font-weight: 400;
    }
`

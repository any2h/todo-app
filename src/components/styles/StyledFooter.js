import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem; 
    background-color: ${({theme}) => theme.bgColor};
    font-size: .875rem;
    color: ${({theme}) => theme.footerFontColor};
    border-radius: 0 0 7.5px 7.5px;

    > div {
        display: flex;
        gap: .75rem;
    }
`

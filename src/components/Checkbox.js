import styled from "styled-components"

const Input = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
    appearance: none;

    &:checked+label::before {
        background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }

    &:checked+label::after {
        opacity: 1;
    }

    &:not(:disabled):not(:checked)+label:hover::before {
        outline: 1px solid #8D82BE;
    } 
`

const Label = styled.label`
    display: inline-flex;
    align-items: center;
    user-select: none;

    &::before {
        content: '';
        width: 1.375rem;
        height: 1.375rem;
        outline: ${({theme}) => theme.checkboxOutline};
        border-radius: 50%;
        transition: all .15s ease-in-out;
    }

    &::after {
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
`

export default function Checkbox({toggleDone, completed}) {
  return (
    <>
        <Input type="checkbox" checked={completed} onChange={toggleDone} />
        <Label onClick={toggleDone}></Label>
    </>
  )
}

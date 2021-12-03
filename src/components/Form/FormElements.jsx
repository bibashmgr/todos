import styled from "styled-components";

// icons
import {AiOutlinePlus} from 'react-icons/ai';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
`

export const FormBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 300px;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    border-right: 2px solid black;
`

export const Button = styled(AiOutlinePlus)`
    font-size: 2rem;
    cursor: pointer;
`
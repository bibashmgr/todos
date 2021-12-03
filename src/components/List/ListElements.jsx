import styled from "styled-components";

export const ListContainer = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style: none;
`
export const ItemContainer = styled.li`
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid black;
    padding: 5px 0px;
    margin-bottom: 10px;
`
export const Item = styled.div`
    width: 100%;
`
export const ItemInput = styled.input`
    width: 1.5rem;
`
export const ItemLabel = styled.label`
    overflow: auto;
`

export const DeleteIcon = styled.img`
    width: 15px;
    margin-left: 5px;
    cursor: pointer;
`
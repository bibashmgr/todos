import React from 'react';

// components
import {ListContainer, ItemContainer, Item, ItemInput, ItemLabel, DeleteIcon} from './ListElements';

// css
import './index.css'

const List = ({items, setItems, isCompleted, setIsCompleted}) => {

    const handleCheck = (e) => {
        setIsCompleted(!isCompleted);
        !isCompleted ? document.getElementById(Number(e.target.id) + 1).className = 'completed' : document.getElementById(Number(e.target.id) + 1).className = 'incompleted';
    }

    const handleDelete = (e) => {
        let delItem = Number(e.target.id) - 2;
        let results = items.filter((item) => {return item.id !== delItem});
        setItems(results);
        console.log('%cTask Removed','color:red;');
    }

    return (
        <ListContainer>
            {items.map((item)=>{
                return(
                    <ItemContainer key={item.id}>
                        <Item>
                            <ItemInput type='checkbox' className='incompleted' name='item' id={item.id} onChange={handleCheck} />
                            <ItemLabel htmlFor='item' id={item.id + 1} >{item.info}</ItemLabel>
                        </Item>
                        <DeleteIcon src='./images/delete.png' alt='delete' id={item.id + 2} onClick={handleDelete} />
                    </ItemContainer>
                )
            })}
        </ListContainer>
    )
}

export default List

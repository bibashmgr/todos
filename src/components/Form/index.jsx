import React from 'react';

// components
import { FormContainer, FormBox, Input, Button } from './FormElements';

const Form = ({task, setTask, items}) => {

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleClick = () => {
        if(task.length > 2){
            setTask('');
            items.push({id:Math.floor(Math.random() * 1000), info:task});
            console.log('%cTask Added','color:green;');

        }
    }

    return (
        <FormContainer>
            <FormBox>
                <Input type='text' name='task' id='task' onChange={handleChange} value={task} />
                <Button onClick={handleClick} />
            </FormBox>
        </FormContainer>
    )
}

export default Form

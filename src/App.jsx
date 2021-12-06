import React from 'react';
import { useState } from 'react';

// css
import './App.css';

// components
import Form from './components/Form';
import List from './components/List';

const App = () => {

  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <div className='app'>
      <div className='header'>
        TODOs
      </div>
      <Form task={task} setTask={setTask} items={items}/>
      <List items={items} setItems={setItems} isCompleted={isCompleted} setIsCompleted={setIsCompleted} />
    </div>
  );
}

export default App;

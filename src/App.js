import React, { useState } from 'react';
import './App.css';
// import Header from './Header.js';

const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
       <header>
        <h1>Task Manager</h1>
      </header>
  
      <h2>Manage your team's<br/> work,<br/> projects, & tasks <br/>online</h2>
      <div>
        <input 
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <footer>
        <p>
 While using todoist, you agree to have read and accepted our terms of use, cookie and privacy policy<br/>
Copyright 1999-2023 by Refsnes Data. All Rights Reserved. todoIst is Powered by todoIst.CSS.</p>
      </footer>
    </div>
  );
};

export default TaskComponent;


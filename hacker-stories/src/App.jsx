import React, { useState } from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete Lab 11', completed: false },
    { id: 2, title: 'Review JSX Events and State', completed: false }
  ]);
  
 
  const [newTask, setNewTask] = useState('');
  
 
  function toggleTask(id) {
    
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        
        return {...task, completed: !task.completed};
      }
      
      return task;
    });
    
   
    setTasks(updatedTasks);
  }
  
  
  function addTask(e) {
    
    e.preventDefault();
    
    
    if (newTask.trim() === '') return;
    
    
    const taskToAdd = {
      id: tasks.length + 1,
      title: newTask,
      completed: false
    };
    
    
    setTasks([...tasks, taskToAdd]);
    
    
    setNewTask('');
  }
  
  return (
    <div>
      <h1>To-Do List</h1>
      
      {/* Task list */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {/* Cross out completed tasks */}
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none' 
            }}>
              {task.title}
            </span>
            
            {/* Button to toggle completion */}
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
      
      {/* Form to add new tasks */}
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;

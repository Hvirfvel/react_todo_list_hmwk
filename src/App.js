import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"}
  ]);

  const [newTask, setNewTask] = useState('');

  const [priority, setPriority] = useState('');

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className={task.priority === "high" ? "high-priority" : "low-priority"}>
        <span>{task.name}</span>
      </li>
    )
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const handlePriorityInput = (event) => {
    setPriority(event.target.value);
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: priority})
    setTasks(copyTasks);
    setNewTask('');
    setPriority('');
  };

  return (
    <>
      <h1>ToDo's</h1>

      <form onSubmit={saveNewTask}>
        <input id='new-task' type="text" value={newTask} onChange={handleTaskInput} />

        <input 
          type="radio" 
          id="low-priority" 
          name="priority" 
          value="low" 
          onChange={handlePriorityInput} 
        />
        <label htmlFor="low-priority">Low</label>

        <input 
          type="radio" 
          id="high-priority" 
          name="priority" 
          value="high" 
          onChange={handlePriorityInput}
        />
        <label htmlFor="high-priority">High</label>

        <input type="submit" value="Save Task" />
      </form>

      <ul>
        {taskNodes}
      </ul>

    </>
  );
}

export default App;

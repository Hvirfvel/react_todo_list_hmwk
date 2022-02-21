import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    "Buy shopping", "Clean bathroom", "Car's MOT"
  ]);

  const [newTask, setNewTask] = useState('');

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index}><span>{task}</span></li>
    )
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks, newTask];
    setTasks(copyTasks);
    setNewTask('');
  };

  return (
    <>
      <h1>ToDo's</h1>

      <form onSubmit={saveNewTask}>
        <input id='new-task' type="text" value={newTask} onChange={handleTaskInput} />
        <input type="submit" value="Save Task" />
      </form>

      <ul>
        {taskNodes}
      </ul>

    </>
  );
}

export default App;

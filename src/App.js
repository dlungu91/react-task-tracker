import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const [showAddTaskForm, setShowAddTaskForm] = useState (false)

  const deleteTaskHandler = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminderHandler = async(id) => {
    const taskToToggle = await fetchTasks(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(updTask),})

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task));
  }

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(task)})

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTaskForm (!showAddTaskForm)} showAdd={showAddTaskForm} />
      {
        showAddTaskForm && <AddTask onAdd={addTask} />
      }

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTaskHandler} onToggle={toggleReminderHandler} />
      ) : (
        "No tasks available!"
      )}
    </div>
  );
};

export default App;

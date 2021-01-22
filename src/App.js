import { useState } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Sharons Valentines gift payment",
      day: "Jan 26th 2021 at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Dinner with Sharon",
      day: "Feb 14th 2021 at 7:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Birthday Diner for Sharon",
      day: "Apr 4th 2021 at 7:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Propose marriage to Sharon",
      day: "Sep 29th 2021 at 9:00pm",
      reminder: false,
    },
    {
      id: 5,
      text: "Wedding day!",
      day: "jul 20th 2022 at 10:00am",
      reminder: true,
    },
  ]);

  const [showAddTaskForm, setShowAddTaskForm] = useState (false)

  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminderHandler = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
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

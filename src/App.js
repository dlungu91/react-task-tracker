import {useState} from 'react';

import Header from './Components/Header';
import Tasks from './Components/Tasks';

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Sharons Valentines gift payment',
        day: 'Jan 26th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dinner with Sharon',
        day: 'Feb 14th 2021 at 7:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Birthday Diner for Sharon',
        day: 'Apr 4th 2021 at 7:30pm',
        reminder: true,
    },
    {
        id: 4,
        text: 'Propose marriage to Sharon',
        day: 'Sep 29th 2021 at 9:00pm',
        reminder: true,
    },
    {
        id: 5,
        text: 'Wedding day!',
        day: 'jul 20th at 10:00pm',
        reminder: true,
    }
  ]);

  const deleteTaskHandler = (id) => {
    
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTaskHandler} />
    </div>
  );
}

export default App;

import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.text}
          day={task.day}
          reminder={task.reminder}
          id={task.id}
          onDelete={onDelete}
          onToggle={onToggle}

        ></Task>
      ))}
    </div>
  );
};

export default Tasks;

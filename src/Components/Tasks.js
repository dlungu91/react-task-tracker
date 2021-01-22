import Task from './Task';

const Tasks = ({tasks, onDelete}) => {

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task.text} day={task.day} id={task.id} onDelete={onDelete}></Task>
            ))}
        </div>
    )
}

export default Tasks;
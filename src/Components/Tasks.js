import Task from './Task';

const Tasks = ({tasks}) => {

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task.text} day={task.day} ></Task>
            ))}
        </div>
    )
}

export default Tasks;
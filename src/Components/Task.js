const Task = ({id, task, day}) => {
    return (
        <div className='task'>
            <h3>{task}</h3>
            <p>{day}</p>
        </div>
    )
}

export default Task;
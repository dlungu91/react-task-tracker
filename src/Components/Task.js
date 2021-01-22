import {FaTimes} from 'react-icons/fa';

const Task = ({id, task, day, onDelete}) => {
    return (
        <div className='task'>
            <h3>{task} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(id)} /></h3>
            <p>{day}</p>
        </div>
    )
}

export default Task;
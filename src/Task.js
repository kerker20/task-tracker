import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : 'blurr'}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{ task.text }  <DeleteOutlineRoundedIcon style={{ color: '#b51d05' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{ task.day }</p>
        </div>
    )
}

export default Task

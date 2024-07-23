import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from './slices/taskSlice';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        const newDescription = prompt("Edit Task Description:", task.description);
        if (newDescription) {
            dispatch(editTask({ id: task.id, description: newDescription }));
        }
    };

    return (
        <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            <span>{task.description}</span>
            <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Complete'}</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Task;

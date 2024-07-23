import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setName(taskToEdit.name);
            setDescription(taskToEdit.description);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) {
            setError('Both fields are required');
            return;
        }
        setError('');

        if (taskToEdit) {
            editTask({ ...taskToEdit, name, description });
            clearEdit();
        } else {
            addTask({ name, description, completed: false });
        }
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{taskToEdit ? 'Edit Task' : 'Add Task'}</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" id='add-btn'>{taskToEdit ? 'Update Task' : 'Add Task'}</button>
            {taskToEdit && <button onClick={clearEdit}>Cancel Edit</button>}
        </form>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    taskToEdit: PropTypes.object,
    clearEdit: PropTypes.func.isRequired
};

export default TaskForm

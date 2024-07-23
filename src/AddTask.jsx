// src/components/AddTask.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './slices/taskSlice';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            dispatch(addTask(description));
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;

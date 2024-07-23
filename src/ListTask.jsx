import { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return true;
    });

    return (
        <div>
            <div style={{ marginBottom: "30px", display: "flex", alignItems: "center", gap: "20px", justifyContent: "center" }}>
                <h3>Filter By:</h3>
                <div>
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('done')}>Done</button>
                    <button onClick={() => setFilter('notDone')}>Not Done</button>
                </div>
            </div>
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;

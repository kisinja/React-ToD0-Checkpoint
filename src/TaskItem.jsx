import { ImCheckmark2 } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

const TaskItem = ({ task, markCompleted, deleteTask, editTask }) => {
    return (
        <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="task">
            <h5 style={{ color: 'maroon', textDecoration: 'underline' }}>ID: {task.id}</h5>
            <h4> <strong>Name:</strong> {task.name}</h4>
            <p> <strong>Description:</strong> {task.description}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => markCompleted(task.id)} id="action-btn" title="Completed">
                    <ImCheckmark2 style={{ fontSize: '20px', color: 'green' }} />
                </button>
                <button onClick={() => editTask(task)} id="action-btn" title="Edit Task">
                    <FaEdit style={{ fontSize: '20px', color: 'yellow' }} />
                </button>
                <button onClick={() => deleteTask(task.id)} id="action-btn" title="Delete Task">
                    <MdDelete style={{ fontSize: '20px', color: 'red' }} />
                </button>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired
};

export default TaskItem;
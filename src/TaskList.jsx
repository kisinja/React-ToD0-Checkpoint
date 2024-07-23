import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';

const TaskList = ({ tasks, markCompleted, deleteTask, editTask }) => {
    return (
        <div>
            {
                tasks.length > 0 ? (
                    tasks.map(task => (
                        <div key={task.id} className="tasks">
                            <TaskItem
                                task={task}
                                markCompleted={markCompleted}
                                deleteTask={deleteTask}
                                editTask={editTask}
                            />
                        </div>
                    ))
                ) : (
                    <p>No tasks at the moment !!</p>
                )
            }
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired
};

export default TaskList;
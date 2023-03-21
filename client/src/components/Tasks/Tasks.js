import { Link } from "react-router-dom";
import TaskRow from "./TaskRow";

const Tasks = ({
    tasks
}) => {
    return(
        
    <section className="list">
        
        <h2 className="section-title">Tasks</h2>
        {tasks.length !== 0 && (
            <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Assignee</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(t => <TaskRow key={t._id} {...t}/>)}
            </tbody>
        </table>
        )}
        
        {tasks.length === 0 && (
            <div>
                <h2>No Tasks yet!</h2>
            </div>
        )}

        <div className="add">
            <Link className="action-edit" to="/tasks/create" >Add new task</Link>
        </div>
    </section>

    );
};

export default Tasks;
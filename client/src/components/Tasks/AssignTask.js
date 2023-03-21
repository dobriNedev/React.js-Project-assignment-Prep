import { Link } from "react-router-dom";

const AssignTask = () => {
    return (
    <div>
        <h2>Assign Task to Employee</h2>
        <form method="POST">
            <div className="form-group">
                <label forhtml="assignee">Assignee:</label>
                <select className="form-control" id="assignee" name="assignee">
                    {/* {{#each employees}}
                    <option value="{{this._id}} {{this.firstName}} {{this.lastName}}">{{this.firstName}} {{this.lastName}}
                        ({{this.role}})</option>
                    {{/each}} */}
                </select>
            </div>
            <br></br>
            <Link className="action-edit" to="/tasks">Back</Link>
            <br></br>
            <button type="submit">Assign</button>
        </form>
    </div>
    );
};

export default AssignTask;
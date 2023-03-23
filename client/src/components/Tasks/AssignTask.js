import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { taskServiceFactory } from "../../services/taskService";
import AssignTaskOption from "./AssignTaskOption";

const AssignTask = ({
    employees,
    onAssignTaskSubmit
}) => {
    const { taskId } =  useParams();
    const taskService = useService(taskServiceFactory);
    const {values, onSubmit, onChangeHandler, onValuesChange } = useForm({
        assignee: '',
    }, onAssignTaskSubmit);

    useEffect(() => {
        taskService.getOne(taskId)
        .then(res => {
            onValuesChange(res);
        })
    }, [taskId]);

    return (
    <div>
        <h2>Assign Task to Employee</h2>
        <form method="POST" onSubmit={onSubmit}>
            <div className="form-group">
                <label forhtml="assignee">Assignee:</label>
                <select className="form-control" id="assignee" name="assignee" value={values.assignee} onChange={onChangeHandler}>
                    {employees.map(e => <AssignTaskOption key={e._id} {...e}/>)}
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
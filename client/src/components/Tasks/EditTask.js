import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { taskServiceFactory } from "../../services/taskService";

const EditTask = ({
    onTaskEditSubmit,
}) => {
    const { taskId } = useParams();
    const taskService = useService(taskServiceFactory);
    const {values, onChangeHandler, onSubmit, onValuesChange} = useForm({
        title: '',
        description: '',
        dueDate: '',
    }, onTaskEditSubmit)

    useEffect(() => {
        taskService.getOne(taskId)
        .then(res => {
            onValuesChange(res);
        })
    }, [taskId]);

    return(       
        <form method="POST" onSubmit={onSubmit}>
            <h2>Edit Task</h2>
            <br></br>
            <label forhtml="title">Title:</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                min="3" 
                max="15"  
                required
                value={values.title}
                onChange={onChangeHandler}
                />
            <br></br>
            <label forhtml="description">Description:</label>
            <textarea
                id="description"
                name="description"
                minLength="10"
                maxLength="150"
                required
                value={values.description}
                onChange={onChangeHandler}
                ></textarea>
            <br></br>
            <label forhtml="dueDate">Due Date:</label>
            <input
                type="date"
                id="dueDate"
                name="dueDate"
                required
                value={values.dueDate}
                onChange={onChangeHandler}
                />
            <br></br>
            <button type="submit">Edit</button>
            <br></br>
        <Link className="action-edit" to="/tasks">Back</Link>
        </form>
    );
};

export default EditTask;
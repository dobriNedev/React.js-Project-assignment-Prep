import { Link } from "react-router-dom";

const EditTask = () => {
    return(       
        <form method="POST">
            <h2>Edit Task</h2>
            <br></br>
            <label forhtml="title">Title:</label>
            <input type="text" id="title" name="title" min="3" max="15"  required/>
            <br></br>
            <label forhtml="description">Description:</label>
            <textarea id="description" name="description" minlength="10" maxlength="150" required></textarea>
            <br></br>
            <label forhtml="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate"  required/>
            <br></br>
            <label forhtml="status">Status:</label>
            <input type="text" id="status" name="status" min="3" max="15" disabled/>
            <br></br>
            <button type="submit">Edit</button>
        <Link className="action-edit" to="/tasks">Back</Link>
        </form>
    );
};

export default EditTask;
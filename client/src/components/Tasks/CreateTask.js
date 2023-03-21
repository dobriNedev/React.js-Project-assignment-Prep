import { useState } from "react";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { authContext } from "../../contexts/autContext";
const CreateTask = ({
    onTaskCreateSubmit
}) => {
    // const [values, setValues] = useState({
    //     title: '',
    //     description: '',
    //     dueDate: '',
    //     status: 'open',
    //     assignee: ''
    // });

    // const onChangeHandler = (e) => {
    //     setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    // };

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     onTaskCreateSubmit(values);
    // };
    const { token } = useContext(authContext);

    const {values, onChangeHandler, onSubmit} = useForm({
            title: '',
            description: '',
            dueDate: '',
            status: 'open',
            assignee: '',
        }, onTaskCreateSubmit);

    return(
        <form onSubmit={onSubmit}>
            <h2>Create Task</h2>
            <br></br>
            <label forhtml="title">Title:</label>
            <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" min="3" max="15" required/>
            <br></br>
            <label forhtml="description">Description:</label>
            <textarea value={values.description} onChange={onChangeHandler} id="description" name="description" minLength="10" maxLength="150" required></textarea>
            <br></br>
            <label forhtml="dueDate">Due Date:</label>
            <input value={values.dueDate} onChange={onChangeHandler} type="date" id="dueDate" name="dueDate" required/>
            <br></br>
            <button type="submit">Create Task</button>
        </form>
    );
};

export default CreateTask;
import { useState } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";

const CreateEmployee = ({
    onEmployeeCreateSubmit,
}) => {
    // const [values, setValues] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phoneNumber: "",
    //     birthDate: "",
    //     salary: "",
    //     role: ""
    // });

    // const onChangeHandler = (e) => {
    //     setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    // };

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     onEmployeeCreateSubmit(values);
    // }

    const { values, onChangeHandler, onSubmit } = useForm({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            birthDate: "",
            salary: "",
            role: ""
    }, onEmployeeCreateSubmit)

    return (
        <form onSubmit={onSubmit} method="POST">
            <h2>Create Employee</h2>
            <br></br>
            <label htmlFor="firstName">First name:</label>
            <input 
                value={values.firstName} 
                onChange={onChangeHandler} 
                type="text" 
                id="firstName" 
                name="firstName" 
                required 
                />
            <br></br>
            <label htmlFor="lastName">Last name:</label>
            <input 
                value={values.lastName} 
                onChange={onChangeHandler} 
                type="text" 
                id="lastName" 
                name="lastName" 
                required 
                />
            <br></br>
            <label htmlFor="email">Email:</label>
            <input 
                value={values.email} 
                onChange={onChangeHandler} 
                type="email" 
                id="email" 
                name="email" 
                required 
                />
            <br></br>
            <label htmlFor="phoneNumber">Phone:</label>
            <input 
                value={values.phoneNumber} 
                onChange={onChangeHandler} 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                required 
                />
            <br></br>
            <label htmlFor="birthDate">Date of Birth:</label>
            <input 
                value={values.birthDate} 
                onChange={onChangeHandler} 
                type="date" 
                id="birthDate" 
                name="birthDate" 
                required 
                />
            <br></br>
            <label htmlFor="salary">Monthly Salary in BGN:</label>
            <input 
                value={values.salary} 
                onChange={onChangeHandler} 
                type="number" 
                id="salary" 
                name="salary" 
                required 
                min="760" 
                max="10000" 
                />
            <br></br>
            <label htmlFor="role">Role:</label>
            <select value={values.role} onChange={onChangeHandler} name="role">
                <option value="intern">Intern</option>
			    <option value="junior">Junior</option>
			    <option value="regular">Regular</option>
                <option value="senior">Senior</option>
		    </select>
            <br></br>
            <button type="submit">Create</button>
           <br></br>
            <Link className="action-edit" to={'/employees'}>Back</Link>
        </form>
    );
};

export default CreateEmployee;
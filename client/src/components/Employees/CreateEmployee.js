
import { useState } from "react";

const CreateEmployee = ({
    onEmployeeCreateSubmit,
}) => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        birthDate: "",
        salary: "",
        role: ""
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onEmployeeCreateSubmit(values);
    }

    return (
        <form onSubmit={onSubmit} >
            <h2>Create Employee</h2>
            <br></br>
            <label for="firstName">First name:</label>
            <input value={values.firstName} onChange={onChangeHandler} type="text" id="firstName" name="firstName" required />
            <br></br>
            <label for="lastName">Last name:</label>
            <input value={values.lastName} onChange={onChangeHandler} type="text" id="lastName" name="lastName" required />
            <br></br>
            <label for="email">Email:</label>
            <input value={values.email} onChange={onChangeHandler} type="email" id="email" name="email" required />
            <br></br>
            <label for="phoneNumber">Phone:</label>
            <input value={values.phoneNumber} onChange={onChangeHandler} type="tel" id="phoneNumber" name="phoneNumber" required />
            <br></br>
            <label for="birthDate">Date of Birth:</label>
            <input value={values.birthDate} onChange={onChangeHandler} type="date" id="birthDate" name="birthDate" required />
            <br></br>
            <label for="salary">Monthly Salary in BGN:</label>
            <input value={values.salary} onChange={onChangeHandler} type="number" id="salary" name="salary" required min="760" max="10000" />
            <br></br>
            <label for="role">Role:</label>
            <select value={values.role} onChange={onChangeHandler} name="role">
                <option value="intern" >Intern</option>
			    <option value="junior" >Junior</option>
			    <option value="regular" >Regular</option>
                <option value="senior" >Senior</option>
		    </select>
            <br></br>
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateEmployee;
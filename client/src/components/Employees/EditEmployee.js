import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { employeeContex } from "../../contexts/employeeContext";
import useForm from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { employeeServiceFactory } from "../../services/empolyeeService";

const EditEmployee = () => {
	const { onEditEmployeeSubmit } = useContext(employeeContex);
	const { employeeId } = useParams();
	const employeeService = useService(employeeServiceFactory);
	const { values, onChangeHandler, onSubmit, onValuesChange } = useForm({
		firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        birthDate: "",
        salary: "",
        role: ""
	}, onEditEmployeeSubmit);

	useEffect(()=> {
		employeeService.getOne(employeeId)
		.then(result => {
			onValuesChange(result);
		})
	}, [employeeId]);


    return(
        <form method="POST" onSubmit={onSubmit}>
        <h2>Edit Employee's information</h2>
            <br></br>
		    <label forhtml="firstName">First name:</label>
		    <input 
				type="text" 
				id="firstName" 
				name="firstName" 
				required
				value={values.firstName}
				onChange={onChangeHandler}
				/>
		    <br></br>
		    <label forhtml="lastName">Last name:</label>
		    <input 
				type="text" 
				id="lastName" 
				name="lastName" 
				value={values.lastName} 
				onChange={onChangeHandler}
				required
				/>
		    <br></br>
		    <label forhtml="email">Email:</label>
		    <input 
				type="email" 
				id="email" 
				name="email" 
				value={values.email} 
				onChange={onChangeHandler}
				required
				/>
		    <br></br>
		    <label forhtml="phoneNumber">Phone:</label>
		    <input 
				type="tel" 
				id="phoneNumber" 
				name="phoneNumber" 
				value={values.phoneNumber} 
				onChange={onChangeHandler}
				required
				/>
		    <br></br>
		    <label forhtml="birthDate">Date of Birth:</label>
		    <input 
				type="date" 
				id="birthDate" 
				name="birthDate" 
				value={values.birthDate} 
				onChange={onChangeHandler}
				required
				/>
		    <br></br>
		    <label forhtml="salary">Monthly Salary in BGN:</label>
		    <input 
				type="number" 
				id="salary" 
				name="salary" 
				min="760" 
				max="10000" 
				value={values.salary} 
				onChange={onChangeHandler}
				required
				/>
		    <br></br>
		    <label forhtml="role">Role:</label>
		    <select name="role" onChange={onChangeHandler}>
                <option value="intern" >Intern</option>
			    <option value="junior" >Junior</option>
			    <option value="regular" >Regular</option>
                <option value="senior" >Senior</option>
		    </select>
		    <br></br>
		    <button type="submit">Edit</button>
		    <br></br>
            <Link className="action-edit" to={'/employees'}>Back</Link>
	    </form>
    );
};

export default EditEmployee;
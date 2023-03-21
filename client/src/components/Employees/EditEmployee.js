import { Link } from "react-router-dom";

const EditEmployee = () => {
    return(
        <form method="POST">
        <h2>Edit Employee's information</h2>
            <br></br>
		    <label forhtml="firstName">First name:</label>
		    <input type="text" id="firstName" name="firstName" defaultvalue="" required/>
		    <br></br>
		    <label forhtml="lastName">Last name:</label>
		    <input type="text" id="lastName" name="lastName" defaultvalue="" required/>
		    <br></br>
		    <label forhtml="email">Email:</label>
		    <input type="email" id="email" name="email" defaultvalue="" required/>
		    <br></br>
		    <label forhtml="phoneNumber">Phone:</label>
		    <input type="tel" id="phoneNumber" name="phoneNumber" defaultvalue="" required/>
		    <br></br>
		    <label forhtml="birthDate">Date of Birth:</label>
		    <input type="date" id="birthDate" name="birthDate" defaultvalue="" required/>
		    <br></br>
		    <label forhtml="salary">Monthly Salary in BGN:</label>
		    <input type="number" id="salary" name="salary" min="760" max="10000" defaultvalue="" required/>
		    <br></br>
		    <label forhtml="role">Role:</label>
		    <select name="role">
                <option value="intern" >Intern</option>
			    <option value="junior" >Junior</option>
			    <option value="regular" >Regular</option>
                <option value="senior" >Senior</option>
		    </select>
		    <br></br>
		    <button type="submit">Edit</button>
		    <br></br>
            <Link className="action-edit" to="/employees/:employeeId">Back</Link>
	    </form>
    );
};

export default EditEmployee;
import { Link } from 'react-router-dom';
import EmployeeRow from './EmployeeRow';


const Employees = ({
    employees,
}) => {
    return(
        <section className="list">
        <h2 className="section-title">Employees</h2>
        {employees.length !== 0 && (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                        <th>Monthly Salary</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e => <EmployeeRow key={e._id} {...e}/> )}
                </tbody>
            </table>
        )}
             
        {employees.length === 0 && (
            <div>
            <h2>No employees yet!</h2>
            </div>
        )}
         <div className="add">
            <Link className="action-edit" to="/employees/create">Add new employee</Link>
        </div>
    </section>
    );
};

export default Employees;

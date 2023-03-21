import { Link } from "react-router-dom";

const EmployeeRow = ({
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    salary,
    role
}) => {
    return(
        <tr>
    <td>{firstName} {lastName}</td>
    <td>{email}</td>
    <td>{phoneNumber}</td>
    <td>{birthDate}</td>
    <td>{salary}</td>
    <td>{role}</td>
    <td>
        <Link className="action-edit" to={`/employees/${_id}/edit`}> Edit </Link>
        <Link className="action-delete" to={`/employees/${_id}/delete`}>Delete</Link>
        <Link className="action-assign" to={`/employees/${_id}/tasks`}>Tasks</Link>
    </td>
</tr>
    );
};

export default EmployeeRow;
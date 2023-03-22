import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../contexts/autContext";
import { useService } from "../../hooks/useService";
import { employeeServiceFactory } from "../../services/empolyeeService";

const EmployeeRow = ({
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    salary,
    role,
    _ownerId
}) => {
    const navigate = useNavigate();

    const { userId } = useContext(authContext);

    const isOwner = _ownerId === userId;

    const employeeService = useService(employeeServiceFactory);

    const onDeleteClick = async() => {
        await employeeService.delete(_id);

        //TODO: change employees state

        navigate('/employees');
    }

    return(
        <tr>
    <td>{firstName} {lastName}</td>
    <td>{email}</td>
    <td>{phoneNumber}</td>
    <td>{birthDate}</td>
    <td>{salary}</td>
    <td>{role}</td>
    {isOwner && (
            <td>
            <Link className="action-edit" to={`/employees/${_id}/edit`}> Edit </Link>
            {/* <Link className="action-delete" to={`/employees/${_id}/delete`}>Delete</Link> */}
            <button onClick={onDeleteClick}>Delete</button>
        </td>
    )}
    <td>
        <Link className="action-assign" to={`/employees/${_id}/tasks`}>Tasks</Link>
    </td>
</tr>
    );
};

export default EmployeeRow;
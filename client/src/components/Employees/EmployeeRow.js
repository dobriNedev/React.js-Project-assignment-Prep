import { Link } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeRow = (employee) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.role}</td>
      <td>
        {/* <Link className="action-edit" to={`/employees/${_id}/details`}></Link> */}
        <EmployeeDetails {...employee} />
      </td>
    </tr>
  );
};

export default EmployeeRow;

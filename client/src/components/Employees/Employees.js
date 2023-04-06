import { Link } from "react-router-dom";
import { useContext } from "react";
import { employeeContex } from "../../contexts/employeeContext";
import EmployeeRow from "./EmployeeRow";

import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const Employees = () => {
  const { employees } = useContext(employeeContex);
  return (
    <section className="list">
      <h2 className="section-title">Employees</h2>
      {employees.length === 0 && (
        <div>
          <h2>No employees yet!</h2>
        </div>
      )}
      {employees.length !== 0 && (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e) => (
                <EmployeeRow key={e._id} {...e} />
              ))}
            </tbody>
          </Table>
        </>
      )}
      <div className="add">
        <Link className="action-edit" to="/employees/create">
          Add new employee
        </Link>
      </div>
    </section>
  );
};

export default Employees;

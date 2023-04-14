import { Link, useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeTaskRow from "./EmployeeTaskRow";
import { useService } from "../../hooks/useService";
import { employeeServiceFactory } from "../../services/empolyeeService";
import { employeeTasksContext } from "../../contexts/EmployeeTasksContext";
import Assign from "./Assign";

const EmployeeTasks = () => {
  const { employeeTasks } = useContext(employeeTasksContext);
  const { employeeId } = useParams();

  //   const [employee, setEmployee] = useState({});

  //   const employeeService = useService(employeeServiceFactory);

  //   useEffect(() => {
  //     employeeService.getOne(employeeId).then((result) => {
  //       setEmployee(result);
  //     });
  //   }, []);

  return (
    <section className="list">
      <h2 className="section-title"> tasks</h2>
      {employeeTasks.length !== 0 && (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>Title</th>
                <th>Due date</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {employeeTasks.map((t) => (
                <EmployeeTaskRow key={t._id} {...t} />
              ))}
            </tbody>
          </Table>
        </>
      )}
      {employeeTasks.length === 0 && (
        <>
          <div>
            <h2>No Tasks yet!</h2>
          </div>
          <Assign />
        </>
      )}
      <div className="add">
        <Link className="action-edit" to="/employees">
          Back
        </Link>
      </div>
    </section>
  );
};

export default EmployeeTasks;

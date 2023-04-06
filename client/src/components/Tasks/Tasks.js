import { Link } from "react-router-dom";
import TaskRow from "./TaskRow";
import { useContext } from "react";
import { taskContext } from "../../contexts/taskContext";

import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const Tasks = () => {
  const { tasks } = useContext(taskContext);
  return (
    <section className="list">
      <h2 className="section-title">Tasks</h2>
      {tasks.length !== 0 && (
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
              {tasks.map((t) => (
                <TaskRow key={t._id} {...t} />
              ))}
            </tbody>
          </Table>
        </>
      )}
      {tasks.length === 0 && (
        <div>
          <h2>No Tasks yet!</h2>
        </div>
      )}
      <div className="add">
        <Link className="action-edit" to="/tasks/create">
          Add new task
        </Link>
      </div>
    </section>
  );
};

export default Tasks;

import { useState, useEffect } from "react";
import { useService } from "../../hooks/useService";
import { taskServiceFactory } from "../../services/taskService";

const EmployeeTaskRow = ({ _id }) => {
  const [task, setTask] = useState({});

  const taskService = useService(taskServiceFactory);

  useEffect(() => {
    taskService.getOne(_id).then((result) => setTask(result));
  }, []);

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.dueDate}</td>
      <td>{task.status}</td>
      <td>{/* <TaskDetails {...task} /> */}</td>
    </tr>
  );
};

export default EmployeeTaskRow;

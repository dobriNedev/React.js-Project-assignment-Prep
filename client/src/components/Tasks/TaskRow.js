import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../contexts/autContext";
import { useService } from "../../hooks/useService";
import { taskServiceFactory } from "../../services/taskService";
import TaskDetails from "./TaskDetails";

const TaskRow = (task) => {
  // const navigate = useNavigate();

  // const { userId } = useContext(authContext);

  // const isOwner = _ownerId === userId;

  // const taskService = useService(taskServiceFactory);

  // const onDeleteClick = async() => {
  //     await taskService.delete(_id);

  //     //TODO: change tasks state

  //     navigate('/tasks');
  // }

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.dueDate}</td>
      <td>{task.status}</td>
      <td>
        <TaskDetails {...task} />
      </td>
    </tr>
  );
};

export default TaskRow;

import { Link } from "react-router-dom";

const TaskClose = () => {
    return(
        <tr>
  <td>Tasktitle</td>
  <td>TaskDueDate</td>
  <td>TaskStatus</td>
  <td>
    {/* {{#if (eq this.status 'ongoin')}} */}
      <Link className="action-delete" to="/tasks/:taskId/close">Close</Link>
    
  </td>
</tr>
    );
};

export default TaskClose;
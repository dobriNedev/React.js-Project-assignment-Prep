import { Link } from "react-router-dom";

const TaskRow = ({
  _id,
  title,
  description,
  assignee,
  dueDate,
  status,

}) => {
    return(
        <tr>
  <td>{title}</td>
  <td>{description}</td>
  <td>
  {/* {{#each this.assignee}}
    {{this.firstName}} {{this.lastName}}
    {{#unless @last}}, {{/unless}}
  {{/each}} */}
  {assignee}
  </td>
  <td>{dueDate}</td>
  <td>{status}</td>
  <td>
    {/* {{#if (eq this.status 'closed')}}
    {{else}}
      {{#if (eq this.status 'open')}} */}
      <Link className="action-edit" to={`/tasks/${_id}/edit`}>Edit</Link>
      <Link className="action-delete" to={`/tasks/${_id}/delete`}>Delete</Link>
      <Link className="action-assign" to={`/tasks/${_id}/assign`}>Assign</Link>
  </td>
</tr>
    );
};

export default TaskRow;
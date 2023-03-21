import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../contexts/autContext";

const TaskRow = ({
    _id,
    title,
    description,
    assignee,
    dueDate,
    status,
    _ownerId
}) => {
    const { userId } = useContext(authContext);

    const isOwner = _ownerId === userId;

    return (
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

            {/* {{#if (eq this.status 'closed')}}
    {{else}}
      {{#if (eq this.status 'open')}} */}
            {/* TODO: add check for status too - only opened tasks can be deleted or/and edited */}
            {isOwner && (
                <td>
                    <Link className="action-edit" to={`/tasks/${_id}/edit`}>Edit</Link>
                    <Link className="action-delete" to={`/tasks/${_id}/delete`}>Delete</Link>
                </td>
            )}
            <td>
                <Link className="action-assign" to={`/tasks/${_id}/assign`}>Assign</Link>
            </td>
        </tr>
    );
};

export default TaskRow;
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../contexts/autContext";
import { useService } from "../../hooks/useService";
import { taskServiceFactory } from "../../services/taskService";

const TaskRow = ({
    _id,
    title,
    description,
    assignee,
    dueDate,
    status,
    _ownerId
}) => {
    const navigate = useNavigate();

    const { userId } = useContext(authContext);

    const isOwner = _ownerId === userId;

    const taskService = useService(taskServiceFactory);

    const onDeleteClick = async() => {
        await taskService.delete(_id);

        //TODO: change tasks state

        navigate('/tasks');
    }

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
                    {/* <Link className="action-delete" to={`/tasks/${_id}/delete`} onClick={onDeleteClick}>Delete</Link> */}
                    
                    <button  onClick={onDeleteClick}>Delete</button>
                </td>
            )}
            <td>
                <Link className="action-assign" to={`/tasks/${_id}/assign`}>Assign</Link>
            </td>
        </tr>
    );
};

export default TaskRow;
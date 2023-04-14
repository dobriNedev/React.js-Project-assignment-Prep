import { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { taskContext } from "../../contexts/taskContext";

const EmployeeTastsListGroup = () => {
  const { tasks } = useContext(taskContext);
  return (
    <ListGroup as="ul">
      {tasks.length === 0 ? (
        <div>
          <p>No tasks yet!</p>
        </div>
      ) : (
        tasks.map((t) => (
          <ListGroup.Item key={t._id} as="li">
            {t.title}
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  );
};

export default EmployeeTastsListGroup;

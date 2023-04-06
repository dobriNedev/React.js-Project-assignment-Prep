import { useState, useContext } from "react";
import { authContext } from "../../contexts/autContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TaskDetails = ({ title, description, dueDate, status, _ownerId }) => {
  const { isAuthenticated, userId } = useContext(authContext);
  const isOwner = _ownerId === userId;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    console.log("Edit");
  };

  const handelDelete = () => {
    console.log("Delete");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Due date: {dueDate}</p>
          <p>Status: {status}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {isOwner ? (
            <>
              <Button variant="primary" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="danger" onClick={handelDelete}>
                Delete
              </Button>
            </>
          ) : isAuthenticated ? (
            <Button variant="primary">Comment</Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetails;

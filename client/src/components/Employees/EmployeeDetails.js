import { useState, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { authContext } from "../../contexts/autContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EmployeeDetails = ({
  _id,
  firstName,
  lastName,
  email,
  birthDate,
  role,
  salary,
  _ownerId,
}) => {
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

  const handleTasks = () => {
    console.log("Handle Employee's tasks");
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
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Date of birth: {birthDate}</p>
          <p>Role: {role}</p>
          <p>Salary: {salary}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {isOwner ? (
            <>
              <LinkContainer to={`/employees/${_id}/edit`}>
                <Button variant="primary" onClick={handleEdit}>
                  Edit
                </Button>
              </LinkContainer>
              <Button variant="danger" onClick={handelDelete}>
                Delete
              </Button>
              <LinkContainer to={`/employees/${_id}/tasks`}>
                <Button variant="success" onClick={handleTasks}>
                  Tasks
                </Button>
              </LinkContainer>
            </>
          ) : isAuthenticated ? (
            <Button variant="primary">Comment</Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeDetails;

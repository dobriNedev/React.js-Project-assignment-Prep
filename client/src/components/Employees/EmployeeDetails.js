import { useState, useContext } from "react";
import { authContext } from "../../contexts/autContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EmployeeDetails = ({
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

export default EmployeeDetails;

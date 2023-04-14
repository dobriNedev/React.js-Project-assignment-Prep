import { useState, useContext } from "react";

import { authContext } from "../../contexts/autContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EmployeeTastsListGroup from "./EmployeeTasksListGroup";

const Assign = ({ _id, _ownerId }) => {
  const { isAuthenticated, userId } = useContext(authContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAssign = async () => {
    console.log("HandleAssing");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Assign Task
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeTastsListGroup />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {isAuthenticated && (
            <Button variant="primary" onClick={handleAssign}>
              Assign
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Assign;

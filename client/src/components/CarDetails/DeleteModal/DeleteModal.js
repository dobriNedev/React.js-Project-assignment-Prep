import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../../../hooks/useService";
import { carServiceFactory } from "../../../services/carService";
import { useCarContext } from "../../../contexts/CarContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DeleteModal = ({ car }) => {
  const navigate = useNavigate();
  const carService = useService(carServiceFactory);
  const { deleteCar } = useCarContext();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onDeleteClick = async () => {
    await carService.delete(car._id);
    deleteCar(car._id);
    navigate("/catalog");
    handleClose();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the following car?</p>
          <p>
            <img src={car.imageUrl} />
            <br />
            Brand: {car.brand}
            <br />
            Model: {car.model}
            <br />
            Price: ${car.price}
            <br />
            Location: {car.location}
            <br />
            Description: {car.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onDeleteClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

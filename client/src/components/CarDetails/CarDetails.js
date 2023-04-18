import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import { carServiceFactory } from "../../services/carService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import * as commentService from "../../services/commentService";
import { AddComment } from "./AddComment/AddComment";
import { carReducer } from "../../reducers/carReducer";

import Button from "react-bootstrap/Button";
import { DeleteModal } from "./DeleteModal/DeleteModal";

import styles from "./CarDetails.module.css";

export const CarDetails = () => {
  const carService = useService(carServiceFactory);

  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { carId } = useParams();

  const [carData, dispatch] = useReducer(carReducer, {
    comments: [],
    car: {},
  });

  useEffect(() => {
    carService.getOne(carId).then((res) => {
      dispatch({
        type: "CAR_FETCH",
        payload: {
          car: res,
        },
      });
    });

    commentService.getAll(carId).then((res) => {
      dispatch({
        type: "COMMENTS_FETCH",
        payload: {
          comments: res,
        },
      });
    });
  }, [carId]);

  //TODO FIX isOwner!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //const isOwner = carData.car._ownerId === userId;
  const isOwner = true;
  //TODO FIX isOwner!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(carId, values.comment);

    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userEmail,
    });
  };
  return (
    <div className={styles.details}>
      <h1>{carData.car.brand}</h1>
      <img src={carData.car.imageUrl} alt={carData.car.brand} />
      <p>Model: {carData.car.model}</p>
      <p>Price: ${carData.car.price}</p>
      <p>Location: {carData.car.location}</p>
      <p>Description: {carData.car.description}</p>

      {isOwner && (
        <div className={styles.buttons}>
          <Button href={`/catalog/${carId}/edit`} variant="primary">
            Edit
          </Button>
          {/* <Button variant="danger" onClick={onDeleteClick}>
            Delete
          </Button> */}
          {/* <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
            Delete
          </Button> */}
          <DeleteModal car={carData.car} />
          <Button href="/catalog" variant="secondary">
            Back
          </Button>
        </div>
      )}

      <h2>Comments</h2>
      <ul>
        {carData.comments &&
          carData.comments.map((x) => (
            <li key={x._id}>
              <p>
                {x.author.email}: {x.comment}
              </p>
            </li>
          ))}
      </ul>

      {!carData.comments?.length && <p>No comments</p>}

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </div>
  );
};

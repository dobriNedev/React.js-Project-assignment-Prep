import styles from "./EditCar.module.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { useForm } from "../../hooks/useForm";
import { carServiceFactory } from "../../services/carService";
import { useCarContext } from "../../contexts/CarContext";

export const EditCar = () => {
  const { onCarEditSubmit } = useCarContext();

  const { carId } = useParams();

  const carService = useService(carServiceFactory);

  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      brand: "",
      model: "",
      price: "",
      location: "",
      imageUrl: "",
      description: "",
    },
    onCarEditSubmit
  );

  useEffect(() => {
    carService.getOne(carId).then((result) => {
      changeValues(result);
    });
  }, [carId]);

  return (
    <section className={styles.editResource}>
      <h2>Edit Car Listing</h2>
      <form method="POST" onSubmit={onSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={values.brand}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={values.model}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={values.price}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={values.location}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="imageUrl">Image Url:</label>
        <input
          value={values.imageUrl}
          onChange={changeHandler}
          type="text"
          id="imageUrl"
          name="imageUrl"
          className={styles.input}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={values.description}
          onChange={changeHandler}
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" className={styles.btn}>
          Edit
        </button>
      </form>
    </section>
  );
};

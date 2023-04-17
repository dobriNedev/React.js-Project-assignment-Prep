import styles from "./CreateCar.module.css";
import { useCarContext } from "../../contexts/CarContext";

import { useForm } from "../../hooks/useForm";

export const CreateCar = () => {
  const { onCreateSubmit } = useCarContext();

  const { values, changeHandler, onSubmit } = useForm(
    {
      brand: "",
      model: "",
      price: "",
      location: "",
      imageUrl: "",
      description: "",
    },
    onCreateSubmit
  );

  return (
    <section className={styles.createResource}>
      <h2>Add Car</h2>
      <form method="POST" onSubmit={onSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={values.brand}
          onChange={changeHandler}
          required
          placeholder="Tesla"
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={values.model}
          onChange={changeHandler}
          placeholder="X"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={values.price}
          onChange={changeHandler}
          required
          placeholder="750 000"
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={values.location}
          onChange={changeHandler}
          required
          placeholder="Stavanger, Norway"
        />

        <label htmlFor="car-img">Image Url:</label>
        <input
          value={values.imageUrl}
          onChange={changeHandler}
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="https://tesla-cdn.thron.com/delivery/public/image/tesla/458cfaaf-de1e-47e0-867e-cb78c1993db3/bvlatuR/std/1200x628/Model-X-Social?quality=auto-medium&format=auto"
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={values.description}
          onChange={changeHandler}
          required
          placeholder="Enter description"
        ></textarea>

        <button type="submit" className={styles.createBtn}>
          Add Car
        </button>
      </form>
    </section>
  );
};

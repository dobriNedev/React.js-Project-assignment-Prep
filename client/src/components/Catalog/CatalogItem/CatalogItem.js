import styles from "./CatalogItem.module.css";

import { Link } from "react-router-dom";

export const CatalogItem = ({
  _id,
  brand,
  model,
  price,
  location,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={brand} />
      <div className={styles.details}>
        <h3>{brand}</h3>
        <p className={styles.model}>{model}</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.location}>{location}</p>
        <Link to={`/catalog/${_id}`} className={styles.details}>
          Details
        </Link>
      </div>
    </div>
  );
};

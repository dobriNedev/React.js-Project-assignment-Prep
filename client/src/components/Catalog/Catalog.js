import styles from "./Catalog.module.css";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { useCarContext } from "../../contexts/CarContext";
import { useEffect } from "react";

export const Catalog = () => {
  const { cars, getAllCars } = useCarContext();

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <section className={styles.catalog}>
      <h2>Cars Catalog</h2>

      {cars.map((x) => (
        <CatalogItem key={x._id} {...x} />
      ))}

      {cars.length === 0 && (
        <div className={styles["no-cars"]}>
          {/* Add link to create car */}
          <p className={styles["message-p"]}>
            There are no listings yet. Come back later!
          </p>
        </div>
      )}
    </section>
  );
};

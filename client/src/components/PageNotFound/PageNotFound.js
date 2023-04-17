import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export const PageNotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <div>
        <p>
          Something went wrong! <Link to="/">Back</Link> to home page!
        </p>
      </div>
    </div>
  );
};

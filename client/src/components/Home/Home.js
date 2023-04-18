import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Slider } from "./Slider/Slider";

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>AutoConnect</h1>
      <Slider />
    </div>
  );
};

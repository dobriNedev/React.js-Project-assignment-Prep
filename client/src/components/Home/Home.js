import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    // {/* <div className={styles.home}>
    //   <div className={styles.background}>
    //     <h1 className={styles.heading}>AutoConnect</h1>
    //     <h2 className={styles.subheading}>
    //       A Website for car owners and enthusiasts
    //     </h2>
    //   </div>
    // </div> */}
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src="./assets/car2" alt="First slide" />
        <Carousel.Caption>
          <h3>We show our cars</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="./assets/car3" alt="Second slide" />

        <Carousel.Caption>
          <h3>We comment with other users</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="./assets/car1" alt="Third slide" />

        <Carousel.Caption>
          <h3>We share car enthusiasm</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

//     {/* <ul>
//   <li>
//     <p className={styles.info}>We show our cars</p>
//   </li>
//   <li>
//     <p className={styles.info}>We comment with other users</p>
//   </li>
//   <li>
//     <p className={styles.info}>We share car enthusiasm</p>
//   </li>
// </ul> */}

// {/* <Link to="/catalog" className={styles.button}>
//         Cars
//       </Link> */}

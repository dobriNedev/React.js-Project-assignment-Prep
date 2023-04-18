import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAFAzVZtG6WgmBsnIW_Bp8HOjF4TKn_hWwA&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We show our cars</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLWgIPnpdIseh8hiSb-fBg0ewtsE9ODkLAA&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>We comment with other users</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GiWhmQiBRTHkR73OwAQtjEsjX5YxDChH2Q&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>We share car enthusiasm</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

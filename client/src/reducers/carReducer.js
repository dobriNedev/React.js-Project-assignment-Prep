export const carReducer = (state, action) => {
  switch (action.type) {
    case "CAR_FETCH":
      return {
        ...state,
        car: action.payload.car,
      };
    case "COMMENTS_FETCH":
      return {
        ...state,
        comments: action.payload.comments,
      };
    case "COMMENT_ADD":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload,
            author: { email: action.userEmail },
          },
        ],
      };
    case "CAR_DELETE":
      const newCars = state.cars.filter(
        (car) => car.id !== action.payload.carId
      );
      return {
        ...state,
        cars: newCars,
      };
    default:
      return state;
  }
};

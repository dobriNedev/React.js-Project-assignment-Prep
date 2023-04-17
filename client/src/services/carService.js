import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/cars";

export const carServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);

    const cars = Object.values(result);
    return cars;
  };

  const getOne = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);

    return result;
  };

  const create = async (carData) => {
    const result = await request.post(baseUrl, carData);

    return result;
  };

  const deleteCar = async (carId) => {
    request.delete(`${baseUrl}/${carId}`);
  };

  const edit = async (carId, data) => request.put(`${baseUrl}/${carId}`, data);

  return {
    getAll,
    getOne,
    create,
    delete: deleteCar,
    edit,
  };
};

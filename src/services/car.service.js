import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const carService = {
  getAllCars: () => axiosService.get(urls.cars),
  createCar: (car) => axiosService.post(`${urls.cars}`, car),
  updateCarById: (carId, car) => axiosService.put(`${urls.cars}/${carId}`, car),
};
export { carService };

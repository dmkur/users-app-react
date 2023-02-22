import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const carService = {
  getAllCars: () => axiosService.get(urls.cars),
  createCar: (userId, car) => axiosService.post(`${urls.cars}/${userId}`,car),
  updateCarById: (carId, car) => axiosService.put(`${urls.cars}/${carId}`, car),

};
export { carService };

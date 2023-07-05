import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const carService = {
  getAllCars: () => axiosService.get(urls.cars),
  createCar: (car) => axiosService.post(`${urls.cars}`, car),
  getCarById: (carId) => axiosService.get(`${urls.cars}/${carId}`),
  getCarByParams: (params) => axiosService.get(`${urls.cars}`, { params }),
  updateCarById: (carId, car) => axiosService.put(`${urls.cars}/${carId}`, car),
  deleteCarById: (carId) => axiosService.delete(`${urls.cars}/${carId}`),
};
export { carService };

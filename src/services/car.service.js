import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const carService = {
  getAllCars: () => axiosService.get(urls.cars),
  updateCarById: (carId) => axiosService.get(`${urls.cars}/${carId}`),
};
export { carService };

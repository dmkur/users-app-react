import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users),
    create: (data) => axiosService.post(urls.users, data),
}

export {
    userService
}

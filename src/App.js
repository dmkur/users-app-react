// import "./App.style.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { CarsPage, LoginPage, RegisterPage, UsersPage } from "./pages";
import { SingleCar } from "./components/SingleCar/SingleCar";

const App = () => {
  return (
    <Routes>
      <Route path={""} element={<MainLayout />}>
        <Route index element={<Navigate to={"/cars"} />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/users"} element={<UsersPage />} />
        <Route path={"/cars"} element={<CarsPage />} />
        <Route path={"/cars/:carId"} element={<SingleCar />} />
      </Route>
    </Routes>
  );
};

export { App };

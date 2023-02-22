import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carActions } from "../../redux";
import { Car } from "../Car/Car";
import { CarForm } from "../CarForm/CarForm";

const Cars = () => {
  const { cars, carForUpdate } = useSelector((state) => state.carReducer);
  console.log(carForUpdate, "_________");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carActions.getAll());
  }, []);

  if (!cars) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <CarForm />
      <div>{cars && cars.map((car) => <Car car={car} key={car._id} />)}</div>
    </div>
  );
};

export { Cars };

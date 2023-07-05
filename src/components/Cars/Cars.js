import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { carActions } from "../../redux";
import { Car } from "../Car/Car";
import { CarFindForm } from "../CarFindForm/CarFindForm";

const Cars = () => {
  const { cars, isLoading } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carActions.getAll());
  }, []);

  if (!isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Fragment>
      <div>
        <CarFindForm />
      </div>
      {cars &&
        cars.map((car) => (
          <Link to={`/cars/${car._id}`} key={car._id}>
            <Car car={car} />
          </Link>
        ))}
    </Fragment>
  );
};

export { Cars };

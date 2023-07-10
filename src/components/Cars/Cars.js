import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { carService } from "../../services";
import { Car } from "../Car/Car";
import { CarFindForm } from "../CarFindForm/CarFindForm";

const Cars = () => {
  const [cars, setCars] = useState([]);
  console.log(cars, "carsState");
  const [loading, setLoading] = useState(false);
  const { setCarForQuery } = useSelector((state) => state.carReducer);
  console.log(setCarForQuery, "cars");

  useEffect(() => {
    getCars();
  }, [setCarForQuery]);

  const getCars = async () => {
    setLoading(true);
    if (setCarForQuery) {
      
      const { data } = await carService.getCarByParams(setCarForQuery);
      setCars(data);
    } else {
      
      const { data } = await carService.getAllCars();
      setCars(data);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <div>
        <CarFindForm cars={cars} />
      </div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        cars &&
        cars.map((car) => (
          <Link to={`/cars/${car._id}`} key={car._id}>
            <Car car={car} />
          </Link>
        ))
      )}
    </Fragment>
  );
};

export { Cars };

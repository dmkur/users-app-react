import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carService } from "../../services";
import { Car } from "../Car/Car";
import { CarFindForm } from "../CarFindForm/CarFindForm";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCars();
  }, []);
  const getCars = async () => {
    setLoading(true);
    const { data } = await carService.getAllCars();
    setCars(data);
    setLoading(false);
  };

  return (
    <Fragment>
      <div>
        <CarFindForm />
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

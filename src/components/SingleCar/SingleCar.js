import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { carActions } from "../../redux";
import { carService } from "../../services";
import { Car } from "../Car/Car";
import { User } from "../User/User";

const SingleCar = () => {
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { isLoading, carById } = useSelector((state) => state.carReducer);

  // const dispatch = useDispatch();
  const { carId } = useParams();

  useEffect(() => {
    // dispatch(carActions.getCarById({ carId }));
    getCar();
  }, [carId]);

  const getCar = async () => {
    const arr = [];
    setLoading(true);
    const { data } = await carService.getCarById(carId);
    arr.push({ ...data });
    setCar(arr);

    setLoading(false);
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {" "}
      {car.map((car) => (
        <div key={car._id}>
          <User user={car.user} />
          <Car car={car} key={car.id} />
        </div>
      ))}
    </div>
  );
};

export { SingleCar };

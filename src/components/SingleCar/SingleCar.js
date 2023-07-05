import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { carActions } from "../../redux";
import { Car } from "../Car/Car";
import { User } from "../User/User";

const SingleCar = () => {
  const { isLoading, carById } = useSelector((state) => state.carReducer);

  const dispatch = useDispatch();
  const { carId } = useParams();
  console.log(carById);

  useEffect(() => {
    dispatch(carActions.getCarById({ carId }));
  }, [carId]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {" "}
      {carById.map((car) => (
        <div key={car._id}>
          <User user={car.user} />
          <Car car={car} key={car.id} />
        </div>
      ))}
    </div>
  );
};

export { SingleCar };

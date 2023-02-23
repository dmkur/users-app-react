import { useDispatch } from "react-redux";
import { carActions } from "../../redux";

const Car = ({ car }) => {
  const { model, year, price } = car;

  const dispatch = useDispatch();

  return (
    <div>
      <h4>Model: {model}</h4>
      <div>Price: {price}</div>
      <div>Year: {year}</div>
      <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>
        Edit
      </button>
      <button
        onClick={() => dispatch(carActions.deleteCarById({ carId: car._id }))}
      >
        Delete
      </button>
      <hr />
    </div>
  );
};

export { Car };

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { carActions } from "../../redux";

const CarForm = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { carForUpdate } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (carForUpdate) {
      setValue("model", carForUpdate.model);
      setValue("price", carForUpdate.price);
      setValue("year", carForUpdate.year);
    }
  }, [carForUpdate]);

  const submit = (carData) => {
    console.log(carData);

    if (carForUpdate) {
      dispatch(carActions.updateCarById({ carId: carForUpdate._id, carData }));
    } else {
      dispatch(carActions.create({ carData }));
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Model: </label>
        <input type={"text"} {...register("model")} w />
      </div>

      <div>
        <label className="form_label">Price: </label>
        <input type={"text"} {...register("price")} />
      </div>

      <div c>
        <label>Year: </label>
        <input type={"text"} {...register("year")} />
      </div>

      <div>
        <button type={"submit"}>{!carForUpdate ? "Create" : "Update"}</button>
      </div>
    </form>
  );
};

export { CarForm };

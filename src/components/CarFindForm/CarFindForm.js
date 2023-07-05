import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { carActions } from "../../redux";

const CarFindForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (obj) => {
    console.log(obj);
    // dispatch(carActions.getCarByParams({params:obj}))
  };

  return (
    <Fragment>
      <div>CarFindForm</div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form_div">
          <label className="form_label">Model: </label>
          <input type={"text"} {...register("model")} className="form_input" />
        </div>

        <div className="form_div">
          <label className="form_label">Price: </label>
          <input type={"text"} {...register("price")} className="form_input" />
        </div>

        <div className="form_div">
          <label className="form_label">Year: </label>
          <input type={"text"} {...register("year")} className="form_input" />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button type={"submit"}>Find</button>
        </div>
      </form>
    </Fragment>
  );
};

export { CarFindForm };

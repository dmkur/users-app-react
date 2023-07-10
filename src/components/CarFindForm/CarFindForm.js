import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { carActions } from "../../redux";

const CarFindForm = ({ cars }) => {

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();

  const submit = (obj) => {
    for (let key in obj) {
      if (obj[key] === "") delete obj[key];
    }
    setQuery(obj);
    // dispatch(carActions.getCarByParams({ params: obj }));
    reset();
  };
  const res = () => {
    setQuery("");
    dispatch(carActions.getAll());
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(submit)}>
        <div>CarFindForm</div>
        <div>
          <label>Model: </label>
          <input type={"text"} {...register("model")} />
        </div>

        <div>
          <label>Price: </label>
          <input type={"text"} {...register("price")} />
        </div>

        <div>
          <label>Year: </label>
          <input type={"text"} {...register("year")} />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button type={"submit"}>Find</button>
        </div>
      </form>
      <div>
        <button onClick={res}>Res</button>
      </div>
    </Fragment>
  );
};

export { CarFindForm };

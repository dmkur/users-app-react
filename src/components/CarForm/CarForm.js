import "./CarForm.style.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux";

const CarForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (userData) => {
    // const { error } = await dispatch(authActions.login({ userData }));
    // if (!error) {
    //   navigate("/cars");
    // }
    // reset();
  };

  return (
    <div className="form_wrapper cars_form">
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
          <button type={"submit"}>Create</button>
        </div>
      </form>
    </div>
  );
};

export { CarForm };

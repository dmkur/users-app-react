import { useForm } from "react-hook-form";
import { userActions } from "../../redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hover } from "@testing-library/user-event/dist/hover";

const RegisterForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (userData) => {
    const { error } = await dispatch(userActions.createUser({ userData }));
    if (!error) {
      navigate("/login");
    }
    reset();
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(submit)}>
        <div className="form_div">
          <label className="form_label">Name: </label>
        </div>
        <input type={"text"} {...register("name")} className="form_input" />

        <div className="form_div">
          <label className="form_label">Age: </label>
        </div>
        <input type={"number"} {...register("age")} className="form_input" />

        <div className="form_div">
          <label className="form_label">Email: </label>
        </div>
        <input type={"text"} {...register("email")} className="form_input" />

        <div className="form_div">
          <label className="form_label">Password: </label>
        </div>
        <input
          type={"password"}
          {...register("password")}
          className="form_input"
        />

        <div style={{ marginTop: "20px" }}>
          <button type={"submit"}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export { RegisterForm };

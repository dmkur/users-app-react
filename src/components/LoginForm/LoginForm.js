import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../redux";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (userData) => {
    const { error } = await dispatch(authActions.login({ userData }));
    if (!error) {
      navigate("/cars");
    }
    reset();
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(submit)}>
        <div className="form_div">
          <label className="form_label">Email: </label>
          <input type={"text"} {...register("email")} className="form_input" />
        </div>

        <div className="form_div">
          <label className="form_label">Password: </label>
          <input
            type={"password"}
            {...register("password")}
            className="form_input"
          />
        </div>

        <span style={{ fontSize: "13px" }}>
          Still not with us? <Link to={"/register"}>Sign up</Link>
        </span>

        <div style={{ marginTop: "10px" }}>
          <button type={"submit"}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };

import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {authActions} from "../../redux";

const LoginForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submit = (userData) => {
        console.log(userData)
        const { error } = dispatch(authActions.login({ userData }));
        if (!error) {
            navigate("/cars");
        }
        reset();
    };

  return (
      <form onSubmit={handleSubmit(submit)} style={{textAlign:'center'}}>
          <div >
              <label >Password: </label>
          </div>
          <input type={"password"} {...register("password")} />

          <div>
              <label>Email: </label>
          </div>
          <input type={"text"} {...register("email")} />

          <div style={{marginTop:'10px'}}>
              <button type={"submit"}>Submit</button>
          </div>
      </form>
  )
};

export {LoginForm};

import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {authActions} from "../../redux";

const LoginForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (userData) => {
        const {error} =await dispatch(authActions.login({userData}));
        if (!error) {
            navigate("/users");
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} style={{textAlign: "center"}}>
            <div>
                <label>Email: </label>
            </div>
            <input type={"text"} {...register("email")} />

            <div>
                <label>Password: </label>
            </div>
            <input type={"password"} {...register("password")} />


            <div style={{marginTop: "10px"}}>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    );
};

export {LoginForm};

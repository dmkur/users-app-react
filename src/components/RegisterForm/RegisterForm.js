import {useForm} from "react-hook-form";
import {userActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const RegisterForm = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (userData) => {
        const {error} = await dispatch(userActions.createUser({userData}));
        if (!error) {
            navigate("/login");
        }
        reset();
    };

    return (
        <form  onSubmit={handleSubmit(submit)} style={{textAlign:'center'}}>
            <div>
                <label>Name: </label>
            </div>
            <input type={"text"} {...register("name")} />

            <div>
                <label>Age: </label>
            </div>
            <input type={"number"} {...register("age")} />

            <div>
                <label>Password: </label>
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
    );
};

export {RegisterForm};

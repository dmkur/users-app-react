import "./CarForm.style.css";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {useEffect} from "react";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {carForUpdate} = useSelector((state) => state.carReducer);
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
        console.log(carData)

        if (carForUpdate) {
           dispatch(carActions.updateCarById({carId: carForUpdate._id, carData}));
        } else {
            dispatch(carActions.create({carData}));

        }
        reset();
    };

    return (
        <div className="form_wrapper cars_form">
            <form onSubmit={handleSubmit(submit)}>
                <div className="form_div">
                    <label className="form_label">Model: </label>
                    <input type={"text"} {...register("model")} className="form_input"/>
                </div>

                <div className="form_div">
                    <label className="form_label">Price: </label>
                    <input type={"text"} {...register("price")} className="form_input"/>
                </div>

                <div className="form_div">
                    <label className="form_label">Year: </label>
                    <input type={"text"} {...register("year")} className="form_input"/>
                </div>

                <div style={{marginTop: "10px"}}>
                    <button type={"submit"} >{!carForUpdate ? 'Create' : 'Update'}</button>
                </div>
            </form>
        </div>
    );
};

export {CarForm};

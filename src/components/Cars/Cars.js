import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars} = useSelector(state => state.carReducer);
    console.log(cars)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])

    if(!cars) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {cars && cars.map(car => <Car car={car} key={car._id}/>)}
        </div>
    )
};

export {Cars};
